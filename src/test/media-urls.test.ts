import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { resolveExternalMediaUrl } from "../../vite.config";

const root = process.cwd();
const assetsDir = join(root, "src", "assets");
const publicMediaDir = join(root, "public", "media");

describe("Vercel / external host media URLs", () => {
  it("mirrors every active src/assets/*.asset.json file in public/media with exact size", () => {
    const pointers = readdirSync(assetsDir).filter((f) => f.endsWith(".asset.json"));
    expect(pointers.length).toBeGreaterThan(0);
    for (const file of pointers) {
      const pointer = JSON.parse(readFileSync(join(assetsDir, file), "utf8")) as {
        url: string;
        original_filename: string;
        size: number;
      };
      const mirrored = join(publicMediaDir, pointer.original_filename);
      expect(statSync(mirrored).size).toBe(pointer.size);
      const resolved = resolveExternalMediaUrl(pointer, join(assetsDir, file), {
        onLovable: false,
        mediaOrigin: "",
      });
      expect(resolved).toBe(`/media/${pointer.original_filename}`);
      expect(resolved).not.toContain("id-preview--");
    }
  });

  it("keeps /__l5e URLs on Lovable and skips legacy comparison pointers", () => {
    const sample = {
      url: "/__l5e/assets-v1/abc/hero.webp",
      original_filename: "hero-1.webp",
    };
    expect(resolveExternalMediaUrl(sample, "/repo/src/assets/hero-1.webp.asset.json", { onLovable: true })).toBe(
      sample.url,
    );
    expect(
      resolveExternalMediaUrl(sample, "/repo/src/assets/legacy/hero-1.webp.asset.json", {
        onLovable: false,
        mediaOrigin: "",
      }),
    ).toBe(sample.url);
    expect(
      resolveExternalMediaUrl(sample, "/repo/src/assets/hero-1.webp.asset.json", {
        onLovable: false,
        mediaOrigin: "https://cdn.example.com/",
      }),
    ).toBe("https://cdn.example.com/__l5e/assets-v1/abc/hero.webp");
  });
});