"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const BASE_SIZE = 40;
const HOVER_SIZE = 54;
const PRESS_SCALE = 0.85;
const FOLLOW = 0.18;

const INTERACTIVE_SELECTOR =
  "a, button, [data-cursor], input, textarea, select";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const inner = innerRef.current;

    if (!cursor || !inner) return;

    const mm = gsap.matchMedia();

    mm.add("(hover: hover) and (pointer: fine)", () => {
      let active = false;
      let hovering = false;
      let pressed = false;

      let clientX = 0;
      let clientY = 0;

      const pos = {
        x: 0,
        y: 0,
      };

      let angle = 0;
      let stretch = 0;

      gsap.set(cursor, {
        opacity: 0,
        x: 0,
        y: 0,
      });

      gsap.set(inner, {
        width: BASE_SIZE,
        height: BASE_SIZE,
        scale: 1,
      });

      const tick = () => {
        const targetX = clientX;
        const targetY = clientY;

        const k = 1 - Math.pow(1 - FOLLOW, gsap.ticker.deltaRatio());

        const prevX = pos.x;
        const prevY = pos.y;

        pos.x += (targetX - pos.x) * k;
        pos.y += (targetY - pos.y) * k;

        const vx = pos.x - prevX;
        const vy = pos.y - prevY;

        const speed = Math.hypot(vx, vy);

        const targetStretch = Math.min(speed * 0.012, 0.3);

        stretch += (targetStretch - stretch) * 0.2;

        if (speed > 1) {
          const targetAngle = (Math.atan2(vy, vx) * 180) / Math.PI;

          const diff = ((targetAngle - angle + 540) % 360) - 180;

          angle += diff * 0.15;
        }

        gsap.set(cursor, {
          x: pos.x,
          y: pos.y,
          rotation: angle,
          scaleX: 1 + stretch,
          scaleY: 1 - stretch * 0.4,
        });
      };

      const updateSize = () => {
        const size = hovering ? HOVER_SIZE : BASE_SIZE;

        gsap.to(inner, {
          width: size,
          height: size,
          duration: 0.3,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      const updatePress = () => {
        gsap.to(inner, {
          scale: pressed ? PRESS_SCALE : 1,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const show = (e: MouseEvent) => {
        clientX = e.clientX;
        clientY = e.clientY;

        pos.x = clientX;
        pos.y = clientY;

        active = true;

        gsap.ticker.remove(tick);
        gsap.ticker.add(tick);

        gsap.killTweensOf(cursor, "opacity");

        gsap.to(cursor, {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      const hide = () => {
        active = false;
        hovering = false;
        pressed = false;

        updateSize();
        updatePress();

        gsap.killTweensOf(cursor, "opacity");

        gsap.to(cursor, {
          opacity: 0,
          duration: 0.2,
          ease: "power2.out",
          onComplete: () => {
            if (!active) {
              gsap.ticker.remove(tick);
            }
          },
        });
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!active) {
          show(e);
          return;
        }

        clientX = e.clientX;
        clientY = e.clientY;
      };

      const onMouseOver = (e: MouseEvent) => {
        const target = e.target as Element | null;

        if (!target) return;

        const interactive = target.closest(INTERACTIVE_SELECTOR);

        const nextHover = interactive !== null;

        if (nextHover !== hovering) {
          hovering = nextHover;
          updateSize();
        }
      };

      const onMouseDown = () => {
        pressed = true;
        updatePress();
      };

      const onMouseUp = () => {
        pressed = false;
        updatePress();
      };

      const onWindowBlur = () => {
        hide();
      };

      window.addEventListener("mousemove", onMouseMove);

      window.addEventListener("mouseover", onMouseOver);

      window.addEventListener("mousedown", onMouseDown);

      window.addEventListener("mouseup", onMouseUp);

      window.addEventListener("blur", onWindowBlur);

      gsap.ticker.add(tick);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);

        window.removeEventListener("mouseover", onMouseOver);

        window.removeEventListener("mousedown", onMouseDown);

        window.removeEventListener("mouseup", onMouseUp);

        window.removeEventListener("blur", onWindowBlur);

        gsap.ticker.remove(tick);

        gsap.killTweensOf([cursor, inner]);
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <>
      <style>{`
        html[data-custom-cursor="true"],
        html[data-custom-cursor="true"] * {
          cursor: none !important;
        }
      `}</style>

      <div
        ref={cursorRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          flex
          h-0
          w-0
          items-center
          justify-center
          opacity-0
        "
      >
        <div
          ref={innerRef}
          className="
            shrink-0
            rounded-xl
            border-2
            border-white
          "
          style={{
            width: BASE_SIZE,
            height: BASE_SIZE,
          }}
        />
      </div>
    </>
  );
}
