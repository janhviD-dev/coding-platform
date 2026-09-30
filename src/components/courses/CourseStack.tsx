"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CourseCard from "./CourseCard";
import { courses } from "./courses.data";
import { motion } from "framer-motion";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/* ---- TWEAK HERE ---------------------------------------------------- */
const CONFIG = {
  scaleAmount: 0.05, // covered card ends at 1 - 0.05 = 0.95
  dimTo: 0.78, // covered card ends at 78% brightness
  scrub: 0.6, // seconds of smoothing (higher = softer/slower catch-up)
  // pin: distance from viewport top for card 0, and extra offset per card (px)
  desktop: { pin: 96, gap: 28 },
  tablet: { pin: 84, gap: 22 },
  mobile: { pin: 76, gap: 16 },
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
          isDesktop: "(min-width: 1024px)",
          isTablet: "(min-width: 640px) and (max-width: 1023px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, isTablet, reduce } = context.conditions as {
            isDesktop: boolean;
            isTablet: boolean;
            reduce: boolean;
          };
          const { pin, gap } = isDesktop
            ? CONFIG.desktop
            : isTablet
              ? CONFIG.tablet
              : CONFIG.mobile;

          const items = gsap.utils.toArray<HTMLElement>(
            "[data-stack-item]",
            root,
          );
          const last = items.length - 1;
          const offsetOf = (i: number) => pin + i * gap; // each card pins a bit lower -> visible stack

          items.forEach((item, i) => {
            if (i === last) return;

            // 1) PIN: card i sticks at its own offset until the LAST card reaches its slot.
            //    pinSpacing:false lets the next card slide over it instead of pushing it.
            ScrollTrigger.create({
              trigger: item,
              start: `top top+=${offsetOf(i)}`,
              endTrigger: items[last],
              end: `top top+=${offsetOf(last)}`,
              pin: true,
              pinSpacing: false,
              invalidateOnRefresh: true,
            });

            // 2) DEPTH: as card i+1 travels from the viewport bottom to its pin slot,
            //    card i scrubs to smaller + darker. Progress is tied to scroll, not time.
            if (!reduce) {
              const inner =
                item.querySelector<HTMLElement>("[data-stack-inner]");
              gsap.to(inner, {
                scale: 1 - CONFIG.scaleAmount,
                filter: `brightness(${CONFIG.dimTo})`,
                ease: "none",
                scrollTrigger: {
                  trigger: items[i + 1],
                  start: "top bottom",
                  end: `top top+=${offsetOf(i + 1)}`,
                  scrub: CONFIG.scrub,
                  invalidateOnRefresh: true,
                },
              });
            }
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
      ctx.revert(); // kills every trigger/tween created above (safe for HMR + StrictMode)
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="overflow-x-clip bg-#090843 px-4 pb-24 pt-16 sm:px-6 md:pt-24"
    >
      <div className="-translate-y-2 flex w-full justify-center">
        <div className="relative inline-flex items-center justify-center px-8 py-3">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            fill="none"
          >
            <rect
              x="1"
              y="1"
              width="98"
              height="38"
              rx="1"
              fill="#2eb0a8"
              fillOpacity="0.25"
            />

            <motion.rect
              x="1"
              y="1"
              width="98"
              height="38"
              rx="1"
              stroke="#2eb0a8"
              strokeWidth="0.7"
              opacity="0.7"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                ease: "easeInOut",
              }}
            />

            <circle cx="1" cy="1" r="1.3" fill="#2eb0a8" />
            <circle cx="99" cy="1" r="1.3" fill="#2eb0a8" />
            <circle cx="1" cy="39" r="1.3" fill="#2eb0a8" />
            <circle cx="99" cy="39" r="1.3" fill="#2eb0a8" />
          </svg>

          <h2 className="relative z-40  text-center font-raleway text-white">
            Course
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-5xl">
        <h2 className=" text-white font-raleway mx-auto mb-10 max-w-2xl text-center text-2xl font-medium sm:text-3xl md:mb-16 md:text-4xl">
          Not Sure Which Course Fits You? Don&apos;t Worry, We&apos;re Here To
          Help.
        </h2>

        {/* Bottom margin = scroll distance between cards (bigger = slower stacking) */}
        {courses.map((course, i) => (
          <div
            key={course.id}
            data-stack-item
            className={i === courses.length - 1 ? "" : "mb-10 md:mb-20"}
          >
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </section>
  );
}
