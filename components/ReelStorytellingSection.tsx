"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type Ref } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import { SecondaryButton } from "@/components/Buttons";
import { REEL_STORIES, type ReelStory } from "@/content/reel-stories";

// ponytail: one component, two renderings — measured pinned track on
// desktop, plain vertical list on mobile / reduced-motion. Playback is
// native <video> from public/reels/; one IntersectionObserver on the
// media frames picks the dominant card in both modes.

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M5 3.5v13l11-6.5z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M5 3.5h4v13H5zM11 3.5h4v13h-4z" />
    </svg>
  );
}

function SoundOnIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M3 7v6h4l5 4V3L7 7H3z" />
      <path d="M14.5 6.5a5 5 0 0 1 0 7M16.8 4a8.4 8.4 0 0 1 0 12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M3 7v6h4l5 4V3L7 7H3z" />
      <path d="M14 8l5 5M19 8l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ReelVideo({
  story,
  playing,
  audioOn,
  onToggleMute,
  registerFrame,
}: {
  story: ReelStory;
  /** True when this is the dominant visible card. */
  playing: boolean;
  /** True when sound is enabled (default); false only after explicit mute. */
  audioOn: boolean;
  onToggleMute: () => void;
  registerFrame: (id: string, el: HTMLElement | null) => void;
}) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [pausedByUser, setPausedByUser] = useState(false);
  const [explicitPlay, setExplicitPlay] = useState(false);
  const [tapToPlay, setTapToPlay] = useState(false);
  const [sourceError, setSourceError] = useState(false);
  const [buffering, setBuffering] = useState(false);
  const num = String(story.reelNumber).padStart(2, "0");
  const playable = story.mediaType === "local-video" && Boolean(story.videoSrc);

  // Fresh activation clears any manual pause: the dominant card always
  // offers motion (autoplay itself is gated below on reduced-motion).
  useEffect(() => {
    if (playing) {
      setPausedByUser(false);
      setTapToPlay(false);
    }
  }, [playing]);

  // The actual muted property — always synced, never icon-only.
  // Default is audible (muted=false); only an explicit toggle mutes.
  useEffect(() => {
    const v = videoRef.current;
    if (v) v.muted = !audioOn;
  }, [audioOn]);

  const shouldPlay =
    playable && !sourceError && (explicitPlay || (playing && !reduceMotion)) && !pausedByUser;

  // Honest autoplay: try audible first. If the browser blocks it, play()
  // rejects → show the play control instead of silently falling back to
  // muted playback.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (shouldPlay) {
      v.play().catch(() => setTapToPlay(true));
    } else {
      v.pause();
    }
  }, [shouldPlay, audioOn]);

  const resume = () => {
    setTapToPlay(false);
    setPausedByUser(false);
    setExplicitPlay(true);
  };

  const frameRef = useCallback(
    (el: HTMLElement | null) => registerFrame(story.id, el),
    [registerFrame, story.id],
  );

  // ponytail: one portrait frame for video + poster — wrapper owns the
  // 9:16 ratio, media fills it with contain so nothing is ever cropped.
  const frameClass =
    "relative mx-auto aspect-[9/16] w-full overflow-hidden rounded-card bg-ink md:h-[62vh] md:w-auto md:max-w-full";
  const mediaClass = "h-full w-full object-contain";

  if (!playable) {
    return (
      <figure ref={frameRef as Ref<HTMLElement>} data-reel-id={story.id} className="m-0">
        <div className={frameClass}>
          <Image
            src={story.poster}
            alt={story.alt}
            width={540}
            height={960}
            loading="lazy"
            sizes="(max-width: 860px) 90vw, 34vw"
            className={mediaClass}
          />
        </div>
        <figcaption className="mt-2 text-[0.85rem] text-muted">
          Video file pending — watch the original on Instagram.
        </figcaption>
      </figure>
    );
  }

  // showAsPlaying reflects intent + browser reality: a blocked autoplay
  // (tapToPlay) shows Play, never a fake Pause.
  const showAsPlaying = shouldPlay && !tapToPlay;

  return (
    <figure ref={frameRef as Ref<HTMLElement>} data-reel-id={story.id} className="m-0">
      <div className={frameClass}>
        {sourceError ? (
          <Image
            src={story.poster}
            alt={story.alt}
            width={540}
            height={960}
            loading="lazy"
            sizes="(max-width: 860px) 90vw, 34vw"
            className={mediaClass}
          />
        ) : (
          <video
            ref={videoRef}
            src={story.videoSrc}
            poster={story.poster}
            playsInline
            loop
            preload={playing ? "auto" : "none"}
            aria-label={`Reel ${num}: ${story.title}`}
            className={mediaClass}
            onWaiting={() => setBuffering(true)}
            onPlaying={() => {
              setBuffering(false);
              setTapToPlay(false);
            }}
            onCanPlay={() => setBuffering(false)}
            onPause={() => setBuffering(false)}
            onError={() => setSourceError(true)}
          />
        )}
        {sourceError ? (
          <p className="absolute inset-x-3 bottom-3 m-0 rounded-full bg-ivory/95 px-4 py-2 text-center text-[0.85rem] text-ink">
            Video couldn&apos;t load — use the Instagram link below.
          </p>
        ) : (
          <>
            {!showAsPlaying ? (
              <button
                type="button"
                onClick={resume}
                aria-label={tapToPlay ? `Tap to play reel ${num}` : `Play reel ${num}`}
                className="absolute inset-0 grid cursor-pointer place-items-center bg-ink/20"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-ivory/95 text-forest-deep">
                  <PlayIcon />
                </span>
              </button>
            ) : null}
            {buffering && !tapToPlay ? (
              <p aria-hidden="true" className="absolute left-3 top-3 m-0 rounded-full bg-ink/70 px-3 py-1 text-[0.8rem] text-ivory">
                Loading…
              </p>
            ) : null}
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() =>
                  showAsPlaying ? setPausedByUser(true) : resume()
                }
                aria-label={showAsPlaying ? `Pause reel ${num}` : `Play reel ${num}`}
                aria-pressed={showAsPlaying}
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-ivory/95 text-forest-deep"
              >
                {showAsPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>
              <button
                type="button"
                onClick={onToggleMute}
                aria-label={audioOn ? `Mute reel ${num}` : `Enable sound for reel ${num}`}
                aria-pressed={audioOn}
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-ivory/95 text-forest-deep"
              >
                {audioOn ? <SoundOnIcon /> : <MutedIcon />}
              </button>
            </div>
          </>
        )}
      </div>
    </figure>
  );
}

function ReelPanel({
  story,
  active,
  playing,
  audioOn,
  onToggleMute,
  registerFrame,
  pinned,
}: {
  story: ReelStory;
  active: boolean;
  playing: boolean;
  audioOn: boolean;
  onToggleMute: () => void;
  registerFrame: (id: string, el: HTMLElement | null) => void;
  pinned: boolean;
}) {
  // Canonical rule: the reel number decides. Odd → story left, video
  // right; even → video left, story right. DOM stays story-first so
  // reading order never changes; only desktop grid placement flips.
  const mediaFirst = story.reelNumber % 2 === 0;
  const num = String(story.reelNumber).padStart(2, "0");
  return (
    <article
      aria-labelledby={`reel-${story.id}-title`}
      data-active={active}
      data-layout={mediaFirst ? "media-first" : "story-first"}
      className={
        pinned
          ? "grid w-[86vw] shrink-0 grid-cols-1 items-center gap-6 px-2 md:w-[74vw] md:max-w-[1024px] md:grid-cols-2 md:gap-10"
          : "grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10"
      }
    >
      <div className={mediaFirst ? "md:col-start-2 md:row-start-1" : "md:col-start-1 md:row-start-1"}>
        <p aria-hidden="true" className="font-display text-[2.5rem] leading-none text-sage">
          {num}
        </p>
        {story.category ? (
          <p className="mt-2 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-earth">
            {story.category}
          </p>
        ) : null}
        <h3 id={`reel-${story.id}-title`} className="mt-2 text-[1.6rem]">
          {story.title}
        </h3>
        <p>{story.message}</p>
        {story.caption ? (
          <p className="border-l-[3px] border-sage pl-3 text-[0.95rem] text-muted">
            {story.caption}
          </p>
        ) : null}
        {story.needsReview ? (
          <p className="text-[0.85rem] text-muted">
            Details pending content review — see the original post for the
            authoritative record.
          </p>
        ) : null}
        <p className="mt-4">
          <SecondaryButton small href={story.instagramUrl} target="_blank" rel="noopener">
            View original on Instagram
          </SecondaryButton>
        </p>
      </div>
      <div className={mediaFirst ? "md:col-start-1 md:row-start-1" : "md:col-start-2 md:row-start-1"}>
        <ReelVideo
          story={story}
          playing={playing}
          audioOn={audioOn}
          onToggleMute={onToggleMute}
          registerFrame={registerFrame}
        />
      </div>
    </article>
  );
}

export default function ReelStorytellingSection() {
  const count = REEL_STORIES.length;
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [travel, setTravel] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  // ponytail: one session-wide sound switch, default audible. Explicit
  // mute/unmute persists across reel changes — no per-reel surprises.
  const outerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef(new Map<string, HTMLElement>());
  const ratiosRef = useRef(new Map<string, number>());

  // ponytail: match the 860px prototype breakpoint, not Tailwind default.
  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 860px)");
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const enablePin = isDesktop && !reduceMotion;

  const registerFrame = useCallback((id: string, el: HTMLElement | null) => {
    if (el) framesRef.current.set(id, el);
    else framesRef.current.delete(id);
  }, []);

  // One observer over the actual media frames: the highest visible ratio
  // wins, so exactly one reel is ever the playback candidate — in the
  // pinned track and in the vertical list alike. Offscreen / hidden tab
  // yields no candidate, so everything pauses.
  useEffect(() => {
    ratiosRef.current.clear();
    const pick = () => {
      let best: string | null = null;
      let bestRatio = 0;
      ratiosRef.current.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = id;
        }
      });
      setPlayingId((prev) => {
        const next = bestRatio >= 0.35 ? best : null;
        return prev === next ? prev : next;
      });
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.reelId;
          if (!id) continue;
          if (entry.isIntersecting) ratiosRef.current.set(id, entry.intersectionRatio);
          else ratiosRef.current.delete(id);
        }
        pick();
      },
      { threshold: [0, 0.35, 0.6, 1] },
    );
    framesRef.current.forEach((el) => io.observe(el));
    const onVis = () => {
      if (document.hidden) {
        ratiosRef.current.clear();
        setPlayingId(null);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [count, enablePin]);

  const [muted, setMuted] = useState(false);
  const toggleMute = useCallback(() => {
    setMuted((prev) => !prev);
  }, []);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(count - 1, Math.max(0, Math.floor(v * count)));
    setActiveIdx((prev) => (prev === i ? prev : i));
  });

  // Measure real travel: track width minus viewport width. Outer height =
  // one viewport + travel, so the last panel lands exactly at the edge.
  useLayoutEffect(() => {
    if (!enablePin) return;
    const outer = outerRef.current;
    const view = viewRef.current;
    const track = trackRef.current;
    if (!outer || !view || !track) return;
    const measure = () => {
      const distance = Math.max(0, track.scrollWidth - view.clientWidth);
      setTravel((prev) => (prev === distance ? prev : distance));
      outer.style.height = `${view.clientHeight + distance}px`;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    ro.observe(view);
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => undefined);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      outer.style.height = "";
    };
  }, [enablePin, count]);

  return (
    <section
      id="stories"
      aria-labelledby="stories-title"
      className="overflow-clip border-y border-border bg-white py-16"
    >
      <div className="wrap">
        <SectionHeading
          eyebrow="Stories in motion"
          title="Moments from the community"
          titleId="stories-title"
          sub="Scroll on — each reel pairs footage with its story. Videos play here on this page with sound when the browser allows it; tap play if needed. Full posts live on Instagram."
        />
      </div>

      {enablePin ? (
        <div ref={outerRef} className="relative">
          <div
            ref={viewRef}
            className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
          >
            <div className="wrap mb-6 flex w-full items-center justify-between gap-4">
              <p
                className="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-muted"
                role="status"
              >
                Reel {String(activeIdx + 1).padStart(2, "0")} /{" "}
                {String(count).padStart(2, "0")}
              </p>
              <div
                className="h-[3px] w-40 overflow-hidden rounded-full bg-border"
                aria-hidden="true"
              >
                <motion.div
                  style={{ scaleX: scrollYProgress }}
                  className="h-full w-full origin-left bg-earth"
                />
              </div>
            </div>
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex w-max items-center gap-[10vw] px-[7vw]"
            >
              {REEL_STORIES.map((story, i) => (
                <ReelPanel
                  key={story.id}
                  story={story}
                  active={i === activeIdx}
                  playing={playingId === story.id}
                  audioOn={!muted}
                  onToggleMute={toggleMute}
                  registerFrame={registerFrame}
                  pinned
                />
              ))}
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="wrap mt-8 grid gap-14">
          {REEL_STORIES.map((story) => (
            <ReelPanel
              key={story.id}
              story={story}
              active={playingId === story.id}
              playing={playingId === story.id}
              audioOn={!muted}
              onToggleMute={toggleMute}
              registerFrame={registerFrame}
              pinned={false}
            />
          ))}
        </div>
      )}
    </section>
  );
}
