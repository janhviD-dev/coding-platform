"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

type Tier = "all" | "md" | "lg";

const tierClass: Record<Tier, string> = {
  all: "",
  md: "hidden md:block",
  lg: "hidden lg:block",
};

const particles: { x: number; y: number; r: number; tier: Tier }[] = [
  { x: 210, y: 130, r: 1.6, tier: "all" },
  { x: 1240, y: 800, r: 1.6, tier: "all" },
  { x: 600, y: 90, r: 1.2, tier: "md" },
  { x: 900, y: 830, r: 1.2, tier: "md" },
  { x: 90, y: 470, r: 1.4, tier: "lg" },
  { x: 1350, y: 430, r: 1.4, tier: "lg" },
  { x: 520, y: 800, r: 1, tier: "lg" },
  { x: 980, y: 110, r: 1, tier: "lg" },
];

const isHidden = (el: Element) => getComputedStyle(el).display === "none";

export default function HeroBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const glow = glowRef.current;
    if (!root || !glow) return;

    const mm = gsap.matchMedia(root);

    const runAmbient = () => {
      // Soft teal glows drifting slowly
      gsap.utils.toArray<HTMLElement>("[data-glow]").forEach((el, i) => {
        gsap.to(el, {
          x: i % 2 ? -40 : 40,
          y: i % 2 ? 30 : -30,
          duration: 13 + i * 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    };

    const runSvg = () => {
      // Orbit rings breathe back and forth
      gsap.utils.toArray<SVGGElement>("[data-orbit]").forEach((el, i) => {
        if (isHidden(el)) return;
        gsap.to(el, {
          rotation: i % 2 ? -7 : 7,
          svgOrigin: "720 450",
          duration: 24 + i * 6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      // Single orbiting dot (full slow revolution)
      const orbiter = root.querySelector<SVGGElement>("[data-orbiter]");
      if (orbiter && !isHidden(orbiter)) {
        gsap.to(orbiter, {
          rotation: 360,
          svgOrigin: "720 450",
          duration: 90,
          ease: "none",
          repeat: -1,
        });
      }

      // Path drift
      gsap.utils.toArray<SVGPathElement>("[data-drift]").forEach((el, i) => {
        if (isHidden(el)) return;
        gsap.to(el, {
          y: i % 2 ? -8 : 8,
          duration: 9 + i * 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      // Nodes travelling along paths
      gsap.utils.toArray<SVGPathElement>("[data-travel]").forEach((path, i) => {
        if (isHidden(path)) return;
        const node = root.querySelector<SVGCircleElement>(
          `[data-node="${path.dataset.travel}"]`,
        );
        if (!node) return;
        const len = path.getTotalLength();
        const state = { p: 0 };
        gsap.to(state, {
          p: 1,
          duration: 16 + i * 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          onUpdate: () => {
            const pt = path.getPointAtLength(state.p * len);
            node.setAttribute("cx", String(pt.x));
            node.setAttribute("cy", String(pt.y));
          },
        });
      });

      // Network nodes pulse gently
      gsap.utils.toArray<SVGCircleElement>("[data-pulse]").forEach((el, i) => {
        if (isHidden(el)) return;
        gsap.to(el, {
          opacity: 0.2,
          duration: 3 + (i % 4),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.4,
        });
      });

      // Floating particles
      gsap.utils.toArray<SVGCircleElement>("[data-float]").forEach((el, i) => {
        if (isHidden(el)) return;
        gsap.to(el, {
          x: gsap.utils.random(-14, 14),
          y: gsap.utils.random(-18, 18),
          duration: gsap.utils.random(7, 12),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.3,
        });
      });
    };

    const runMouse = () => {
      const host = root.parentElement;
      if (!host) return;

      gsap.set(glow, { xPercent: -50, yPercent: -50, x: 0, y: 0 });
      const glowX = gsap.quickTo(glow, "x", {
        duration: 1.6,
        ease: "power3.out",
      });
      const glowY = gsap.quickTo(glow, "y", {
        duration: 1.6,
        ease: "power3.out",
      });

      const layers = gsap.utils.toArray<SVGGElement>("[data-depth]");
      const setters = layers.map((el) => {
        const d = Number(el.dataset.depth);
        return {
          d,
          x: gsap.quickTo(el, "x", { duration: 2, ease: "power2.out" }),
          y: gsap.quickTo(el, "y", { duration: 2, ease: "power2.out" }),
        };
      });

      let shown = false;

      const onMove = (e: MouseEvent) => {
        const r = root.getBoundingClientRect();
        const px = e.clientX - r.left;
        const py = e.clientY - r.top;
        if (!shown) {
          shown = true;
          gsap.set(glow, { x: px, y: py });
          gsap.to(glow, { opacity: 1, duration: 1.5, ease: "sine.inOut" });
        }
        glowX(px);
        glowY(py);
        const nx = px / r.width - 0.5;
        const ny = py / r.height - 0.5;
        setters.forEach((s) => {
          s.x(-nx * s.d);
          s.y(-ny * s.d);
        });
      };

      const onLeave = () => {
        gsap.to(glow, { opacity: 0, duration: 1.5, ease: "sine.inOut" });
        shown = false;
        setters.forEach((s) => {
          s.x(0);
          s.y(0);
        });
      };

      host.addEventListener("mousemove", onMove);
      host.addEventListener("mouseleave", onLeave);
      return () => {
        host.removeEventListener("mousemove", onMove);
        host.removeEventListener("mouseleave", onLeave);
      };
    };

    mm.add(
      {
        desktop:
          "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        tablet:
          "(min-width: 768px) and (max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        mobile:
          "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
      },
      (ctx) => {
        const { desktop, tablet, mobile } = ctx.conditions as {
          desktop: boolean;
          tablet: boolean;
          mobile: boolean;
        };
        runAmbient();
        if (desktop || tablet) runSvg();
        if (mobile) {
          // Only floating particles, very calm
          runSvg();
        }
        if (desktop) return runMouse();
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <motion.div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {/* Ambient teal glows */}
      <div
        data-glow
        className="absolute -top-40 left-[15%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(46,176,168,0.10)_0%,transparent_65%)]"
      />
      <div
        data-glow
        className="absolute -bottom-48 right-[10%] hidden h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(46,176,168,0.08)_0%,transparent_65%)] md:block"
      />

      {/* Cursor glow (desktop only, fades in on first move) */}
      <div
        ref={glowRef}
        className="absolute left-0 top-0 hidden h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(46,176,168,0.12)_0%,transparent_65%)] opacity-0 lg:block"
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Far layer: orbits */}
        <g data-depth="10" className="hidden md:block">
          <g data-orbit>
            <ellipse
              cx="720"
              cy="450"
              rx="620"
              ry="330"
              stroke="#2eb0a8"
              strokeWidth="0.6"
              opacity="0.10"
            />
          </g>
          <g data-orbit className="hidden lg:block">
            <ellipse
              cx="720"
              cy="450"
              rx="470"
              ry="250"
              transform="rotate(-12 720 450)"
              stroke="#2eb0a8"
              strokeWidth="0.5"
              strokeDasharray="2 10"
              opacity="0.16"
            />
          </g>
          <g data-orbiter className="hidden lg:block">
            <circle cx="1340" cy="450" r="2.2" fill="#2eb0a8" opacity="0.6" />
            <circle cx="1340" cy="450" r="7" fill="#2eb0a8" opacity="0.08" />
          </g>
        </g>

        {/* Mid layer: travelling paths */}
        <g data-depth="18">
          <path
            data-drift
            data-travel="a"
            d="M-60 180 C160 120 300 220 520 160"
            stroke="#2eb0a8"
            strokeWidth="0.7"
            opacity="0.22"
          />
          <circle
            data-node="a"
            cx="-60"
            cy="180"
            r="2.2"
            fill="#2eb0a8"
            opacity="0.8"
          />

          <path
            data-drift
            data-travel="b"
            d="M1500 740 C1280 800 1160 700 940 760"
            stroke="#2eb0a8"
            strokeWidth="0.7"
            opacity="0.22"
            className="hidden md:block"
          />
          <circle
            data-node="b"
            cx="1500"
            cy="740"
            r="2.2"
            fill="#2eb0a8"
            opacity="0.8"
            className="hidden md:block"
          />

          <path
            data-drift
            data-travel="c"
            d="M1500 140 C1300 90 1180 200 980 150"
            stroke="#2eb0a8"
            strokeWidth="0.6"
            opacity="0.18"
            className="hidden lg:block"
          />
          <circle
            data-node="c"
            cx="1500"
            cy="140"
            r="1.8"
            fill="#2eb0a8"
            opacity="0.7"
            className="hidden lg:block"
          />

          <path
            data-drift
            data-travel="d"
            d="M-60 790 C170 850 300 750 470 810"
            stroke="#2eb0a8"
            strokeWidth="0.6"
            opacity="0.18"
            className="hidden lg:block"
          />
          <circle
            data-node="d"
            cx="-60"
            cy="790"
            r="1.8"
            fill="#2eb0a8"
            opacity="0.7"
            className="hidden lg:block"
          />
        </g>

        {/* Near layer: sparse network clusters */}
        <g data-depth="28" className="hidden md:block">
          <g stroke="#2eb0a8" strokeWidth="0.6" opacity="0.2">
            <line x1="120" y1="140" x2="260" y2="90" />
            <line x1="260" y1="90" x2="340" y2="190" />
            <line x1="120" y1="140" x2="340" y2="190" />
          </g>
          <circle
            data-pulse
            cx="120"
            cy="140"
            r="2.5"
            fill="#2eb0a8"
            opacity="0.5"
          />
          <circle
            data-pulse
            cx="260"
            cy="90"
            r="1.8"
            fill="#2eb0a8"
            opacity="0.45"
          />
          <circle
            data-pulse
            cx="340"
            cy="190"
            r="2"
            fill="#2eb0a8"
            opacity="0.4"
          />

          <g stroke="#2eb0a8" strokeWidth="0.6" opacity="0.2">
            <line x1="1320" y1="760" x2="1200" y2="820" />
            <line x1="1200" y1="820" x2="1120" y2="740" />
            <line x1="1320" y1="760" x2="1120" y2="740" />
          </g>
          <circle
            data-pulse
            cx="1320"
            cy="760"
            r="2.5"
            fill="#2eb0a8"
            opacity="0.5"
          />
          <circle
            data-pulse
            cx="1200"
            cy="820"
            r="1.8"
            fill="#2eb0a8"
            opacity="0.45"
          />
          <circle
            data-pulse
            cx="1120"
            cy="740"
            r="2"
            fill="#2eb0a8"
            opacity="0.4"
          />
        </g>

        {/* Floating particles */}
        <g data-depth="36">
          {particles.map((p, i) => (
            <circle
              key={i}
              data-float
              cx={p.x}
              cy={p.y}
              r={p.r}
              fill="#2eb0a8"
              opacity="0.4"
              className={tierClass[p.tier]}
            />
          ))}
        </g>
      </svg>
    </motion.div>
  );
}
