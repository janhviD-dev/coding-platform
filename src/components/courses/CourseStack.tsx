"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CourseCard from "./CourseCard";
import { courses } from "./courses.data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  // Mobile address bar hiding/showing fires resize -> prevents refresh jumps while scrolling.
  ScrollTrigger.config({ ignoreMobileResize: true });
}

/* ---- TWEAK HERE ---------------------------------------------------- */
const CONFIG = {
  scaleAmount: 0.05, // covered card ends at 1 - 0.05 = 0.95
  dimTo: 0.78, // covered card ends at 78% brightness
  scrub: 0.8, // smoothing in seconds (higher = softer / slower catch-up)

  // TIMING: shrink + dim wait until the next card has covered this fraction
  // of the current card. 0 = starts the moment cards touch, 0.3 = after 30% covered.
  dimDelay: 0.3,

  // After the last card lands, keep the stack pinned for this much scroll (in vh)
  // so the final card can be read before the section scrolls away.
  lastHoldVh: 0.35,

  // Per-breakpoint: pin = distance from viewport top for card 0 (px),
  // gap = extra offset per following card (px) = how much of earlier cards stays visible.
  mobile: { pin: 72, gap: 14 },
  tablet: { pin: 84, gap: 20 },
  desktop: { pin: 96, gap: 26 },
  wide: { pin: 112, gap: 32 },

  safeBottom: 16, // px kept free below a pinned card on short screens
};
/* -------------------------------------------------------------------- */

export default function CourseStack() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isWide: "(min-width: 1536px)",
          isDesktop: "(min-width: 1024px) and (max-width: 1535px)",
          isTablet: "(min-width: 640px) and (max-width: 1023px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isWide, isDesktop, isTablet, reduce } =
            context.conditions as {
              isWide: boolean;
              isDesktop: boolean;
              isTablet: boolean;
              reduce: boolean;
            };
          const { pin, gap } = isWide
            ? CONFIG.wide
            : isDesktop
              ? CONFIG.desktop
              : isTablet
                ? CONFIG.tablet
                : CONFIG.mobile;

          const items = gsap.utils.toArray<HTMLElement>(
            "[data-stack-item]",
            root,
          );
          const last = items.length - 1;

          // Where card i sticks. If a card is taller than the screen (phones in landscape,
          // small laptops) it is moved up so its BOTTOM stays visible and it can be read.
          const pinTop = (i: number) =>
            Math.min(
              pin + i * gap,
              window.innerHeight - items[i].offsetHeight - CONFIG.safeBottom,
            );

          // Shared end: last card arrives at its slot, then everything holds a bit longer.
          const endPos = () =>
            `top top+=${pinTop(last) - window.innerHeight * CONFIG.lastHoldVh}`;

          items.forEach((item, i) => {
            // 1) PIN. pinSpacing:false -> next card slides OVER this one instead of pushing it.
            ScrollTrigger.create({
              trigger: item,
              start: () => `top top+=${pinTop(i)}`,
              endTrigger: items[last],
              end: endPos,
              pin: true,
              pinSpacing: false,
              invalidateOnRefresh: true,
            });

            if (i === last || reduce) return;

            // 2) DEPTH. Runs only while card i+1 is physically covering card i:
            //    from (A) next card's top reaching card i's bottom edge (+ delay)
            //    to   (B) next card settling in its own pin slot.
            const inner = item.querySelector<HTMLElement>("[data-stack-inner]");
            gsap.to(inner, {
              scale: 1 - CONFIG.scaleAmount,
              filter: `brightness(${CONFIG.dimTo})`,
              ease: "none",
              scrollTrigger: {
                trigger: items[i + 1],
                start: () => {
                  const A = pinTop(i) + item.offsetHeight;
                  const B = pinTop(i + 1);
                  return `top top+=${A - (A - B) * CONFIG.dimDelay}`;
                },
                end: () => `top top+=${pinTop(i + 1)}`,
                scrub: CONFIG.scrub,
                invalidateOnRefresh: true,
              },
            });
          });
        },
      );

      return () => mm.revert();
    }, root);

    // Images/fonts change heights, so recompute trigger positions once loaded.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert(); // kills every trigger/tween (safe for HMR + StrictMode)
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="overflow-x-clip bg-#090843 px-3 pb-[40svh] pt-14 sm:px-6 md:pt-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mx-auto mb-10 max-w-2xl text-center text-[clamp(1.375rem,3.2vw+0.5rem,2.5rem)] font-medium leading-tight md:mb-16">
          Not Sure Which Course Fits You? Don&apos;t Worry, We&apos;re Here To
          Help.
        </h2>

        {/*
          READING TIME: bottom margin of each wrapper = how long a pinned card stays
          untouched before the next card begins to cover it. Raise it for more time.
        */}
        {courses.map((course, i) => (
          <div
            key={course.id}
            data-stack-item
            className={i === courses.length - 1 ? "" : "mb-[max(7rem,34svh)]"}
          >
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </section>
  );
}
