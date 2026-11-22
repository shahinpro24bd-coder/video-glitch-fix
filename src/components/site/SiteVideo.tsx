import { useEffect, useRef, type Ref } from "react";

/**
 * Site clip with a smart loading order.
 * - `priority` (the home hero) downloads and autoplays straight away, so it starts first.
 * - Every other clip renders its sources immediately but only fetches a few KB (metadata) until
 *   the priority clip can play (or the page has loaded / 2.5s passed). Then it buffers fully and
 *   starts playing just before it scrolls into view, so it is already running when the visitor
 *   reaches it, without stealing bandwidth from the hero.
 * - `mobile` is an optional lighter encode for phones; `av1` an optional smaller AV1 encode;
 *   browsers pick the first source they can play, falling back to the MP4.
 */
let markReady: () => void = () => {};
const priorityReady: Promise<void> =
  typeof window === "undefined"
    ? Promise.resolve()
    : new Promise<void>((resolve) => {
        let done = false;
        markReady = () => { if (!done) { done = true; resolve(); } };
        window.setTimeout(markReady, 2500);
        if (document.readyState === "complete") window.setTimeout(markReady, 400);
        else window.addEventListener("load", () => window.setTimeout(markReady, 400), { once: true });
      });

export const AV1_TYPE = 'video/mp4; codecs="av01.0.08M.08"';

type Props = {
  mp4: string;
  av1?: string | undefined;
  mobile?: string | undefined;
  poster?: string | undefined;
  className?: string;
  priority?: boolean;
  /** Buffer straight away alongside the hero instead of waiting for it (small clips right below the hero). */
  eager?: boolean;
  /** false = the caller controls play/pause (e.g. the footer clip). */
  autoPlay?: boolean;
  videoRef?: Ref<HTMLVideoElement>;
};

export function SiteVideo({ mp4, av1, mobile, poster, className, priority = false, eager = false, autoPlay = true, videoRef }: Props) {
  const own = useRef<HTMLVideoElement | null>(null);
  const setRef = (el: HTMLVideoElement | null) => {
    own.current = el;
    if (typeof videoRef === "function") videoRef(el);
    else if (videoRef) (videoRef as { current: HTMLVideoElement | null }).current = el;
  };

  useEffect(() => {
    const v = own.current;
    if (!v) return;
    if (priority) {
      const go = () => markReady();
      if (v.readyState >= 3) go();
      v.addEventListener("canplay", go, { once: true });
      v.addEventListener("error", go, { once: true });
      void v.play().catch(() => {});
      return () => { v.removeEventListener("canplay", go); v.removeEventListener("error", go); };
    }
    let alive = true;
    let io: IntersectionObserver | undefined;
    void (eager ? Promise.resolve() : priorityReady).then(() => {
      if (!alive) return;
      v.preload = "auto";
      if (!autoPlay) { v.load(); return; }
      if (typeof IntersectionObserver === "undefined") { void v.play().catch(() => {}); return; }
      // Buffer now; play only near the viewport so off-screen clips don't cost decoding time.
      io = new IntersectionObserver(([e]) => {
        if (e?.isIntersecting) void v.play().catch(() => {});
        else v.pause();
      }, { rootMargin: "60% 0px" });
      io.observe(v);
      if (v.readyState < 2) v.load();
    });
    return () => { alive = false; io?.disconnect(); };
  }, [priority, eager, autoPlay, mp4, av1, mobile]);

  return (
    <video
      key={`${mobile ?? ""}|${av1 ?? ""}|${mp4}`}
      ref={setRef}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay={priority}
      preload={priority || eager ? "auto" : "metadata"}
      aria-hidden="true"
    >
      {mobile && <source src={mobile} type="video/mp4" media="(max-width: 767.98px)" />}
      {av1 && <source src={av1} type={AV1_TYPE} />}
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
