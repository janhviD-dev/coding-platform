"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    let previousX = mouseX;
    let previousY = mouseY;

    let rafId: number;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.2;
      currentY += (mouseY - currentY) * 0.2;

      const velocityX = mouseX - previousX;
      const velocityY = mouseY - previousY;

      const speed = Math.sqrt(
        velocityX * velocityX + velocityY * velocityY
      );

      const angle =
        Math.atan2(velocityY, velocityX) * (180 / Math.PI);

      const stretch = Math.min(1 + speed * 0.012, 1.3);

      gsap.set(cursor, {
        x: currentX,
        y: currentY,
        rotation: angle * 0.25,
        scaleX: stretch,
        scaleY: 1 / Math.sqrt(stretch),
      });

      previousX += (mouseX - previousX) * 0.15;
      previousY += (mouseY - previousY) * 0.15;

      rafId = requestAnimationFrame(animate);
    };

    const enter = () => {
      gsap.to(cursor, {
        width: 54,
        height: 54,
        borderRadius: 15,
        opacity: 0.9,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(cursor, {
        width: 40,
        height: 40,
        borderRadius: 11,
        opacity: 0.6,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const down = () => {
      gsap.to(cursor, {
        scale: 0.78,
        duration: 0.12,
        ease: "power2.out",
      });
    };

    const up = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.35,
        ease: "back.out(2)",
      });
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor]"
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);
    });

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    animate();

    return () => {
      cancelAnimationFrame(rafId);

      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        fixed
        top-0
        left-0

        z-[99999]
        pointer-events-none

        w-[40px]
        h-[40px]

        rounded-[11px]

        border
        border-white

        opacity-100

        -translate-x-1/2
        -translate-y-1/2

        will-change-transform
      "
    />
  );
}
