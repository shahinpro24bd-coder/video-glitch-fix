import { createElement, useEffect, useRef, useState, type CSSProperties, type HTMLAttributes } from "react";
import { T, useEditable } from "@/lib/editable";
import { REVEAL_MARGIN } from "@/components/site/Sections";

type RevealProps = HTMLAttributes<HTMLElement> & { as?: "section" | "div" | "footer" | "article" | "header" };

/**
 * Scroll-reveal wrapper: adds `rx is-in` once its top enters the viewport, so children
 * marked `.rx-up/.rx-left/.rx-right/.rx-zoom/.rx-pop/.rx-clip/.rx-rise` play their entrance
 * (staggered with the `--d` delay, see `dl()`). Don't nest one Reveal inside another.
 */
export function Reveal({ as = "section", className = "", children, ...rest }: RevealProps) {
  const { edit } = useEditable();
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const io = new IntersectionObserver(
      (es) => { if (es.some((e) => e.isIntersecting)) { setInView(true); io.disconnect(); } },
      { rootMargin: REVEAL_MARGIN },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return createElement(as, { ...rest, ref, className: `rx ${inView || edit ? "is-in" : ""} ${className}`.trim() }, children);
}

/** Entrance delay for an `.rx-*` element, in milliseconds. */
export const dl = (ms: number, extra?: CSSProperties) => ({ ["--d" as string]: `${ms}ms`, ...extra }) as CSSProperties;

/** Text split into words that slide up one by one inside a Reveal (edit mode shows the plain editable field). */
export function Words({ k, d }: { k?: string | undefined; d: string }) {
  const { edit, get } = useEditable();
  if (edit && k) return <T k={k} d={d} />;
  return (
    <>
      {(k ? get(k, d) : d).split(/\s+/).filter(Boolean).map((w, n) => (
        <span key={n} className="svx-word"><span style={{ ["--w" as string]: n }}>{w}</span></span>
      ))}
    </>
  );
}
