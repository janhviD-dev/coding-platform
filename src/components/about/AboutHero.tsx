"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <main className="min-h-screen overflow-hidden bg-primary">
      {/* =========================================================
          01. ABOUT HERO SECTION
      ========================================================= */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-20 sm:px-6">
        {/* =====================================================
            BACKGROUND GLOW
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute
              left-1/4
              top-1/4
              h-72
              w-72
              rounded-full
              bg-secondary/[0.08]
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              bottom-1/4
              right-1/4
              h-72
              w-72
              rounded-full
              bg-secondary/[0.06]
              blur-[140px]
            "
          />
        </div>

        {/* =====================================================
            TECHNICAL BACKGROUND
        ===================================================== */}

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* -------------------------------------------------
              LEFT FLOW
          ------------------------------------------------- */}

          <path
            d="M-80 300 C180 250 270 330 470 400"
            stroke="#2eb0a8"
            strokeWidth="0.8"
            opacity="0.3"
          />

          <path
            d="M-100 620 C170 680 300 570 470 500"
            stroke="#2eb0a8"
            strokeWidth="0.6"
            opacity="0.22"
          />

          {/* -------------------------------------------------
              RIGHT FLOW
          ------------------------------------------------- */}

          <path
            d="M1520 300 C1260 250 1170 330 970 400"
            stroke="#2eb0a8"
            strokeWidth="0.8"
            opacity="0.3"
          />

          <path
            d="M1540 620 C1270 680 1140 570 970 500"
            stroke="#2eb0a8"
            strokeWidth="0.6"
            opacity="0.22"
          />

          {/* -------------------------------------------------
              CONNECTING DOTS - LEFT
          ------------------------------------------------- */}

          <circle cx="150" cy="285" r="2" fill="#2eb0a8" opacity="0.45" />

          <circle cx="250" cy="320" r="1.5" fill="#2eb0a8" opacity="0.35" />

          <circle cx="350" cy="355" r="1" fill="#2eb0a8" opacity="0.3" />

          {/* -------------------------------------------------
              CONNECTING DOTS - RIGHT
          ------------------------------------------------- */}

          <circle cx="1290" cy="285" r="2" fill="#2eb0a8" opacity="0.45" />

          <circle cx="1190" cy="320" r="1.5" fill="#2eb0a8" opacity="0.35" />

          <circle cx="1090" cy="355" r="1" fill="#2eb0a8" opacity="0.3" />

          {/* -------------------------------------------------
              FLOATING POINTS
          ------------------------------------------------- */}

          <circle cx="420" cy="220" r="1.5" fill="#2eb0a8" opacity="0.25" />

          <circle cx="1020" cy="220" r="1.5" fill="#2eb0a8" opacity="0.25" />

          <circle cx="330" cy="710" r="1.5" fill="#2eb0a8" opacity="0.22" />

          <circle cx="1110" cy="710" r="1.5" fill="#2eb0a8" opacity="0.22" />
        </svg>

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* -------------------------------------------------
              SMALL HEADING
          ------------------------------------------------- */}

          <motion.h1
            className="
              mb-5
              flex
              justify-center
              font-italiana
              text-xl
              text-secondary
              sm:text-2xl
              md:text-3xl
            "
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            More Than Just Coding
          </motion.h1>

          {/* -------------------------------------------------
              MAIN HEADING
          ------------------------------------------------- */}

          <motion.h2
            className="
              px-3
              text-center
              font-raleway
              text-4xl
              font-semibold
              leading-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            We Build
            <br className="hidden sm:block" />
            {/* -------------------------------------------------
                HIGHLIGHTED WORD
            ------------------------------------------------- */}
            <span className="relative mt-2 inline-block px-5 py-2">
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
                fill="none"
              >
                {/* Teal Fill */}

                <rect
                  x="1"
                  y="1"
                  width="98"
                  height="38"
                  rx="1"
                  fill="#2eb0a8"
                  fillOpacity="0.25"
                />

                {/* Animated Border */}

                <motion.rect
                  x="1"
                  y="1"
                  width="98"
                  height="38"
                  rx="1"
                  stroke="#2eb0a8"
                  strokeWidth="0.7"
                  opacity="0.7"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 0.7,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.6,
                    ease: "easeInOut",
                  }}
                />

                {/* Corner Dots */}

                <circle cx="1" cy="1" r="1.3" fill="#2eb0a8" />

                <circle cx="99" cy="1" r="1.3" fill="#2eb0a8" />

                <circle cx="1" cy="39" r="1.3" fill="#2eb0a8" />

                <circle cx="99" cy="39" r="1.3" fill="#2eb0a8" />
              </svg>

              <span className="relative z-10">Developers</span>
            </span>
            <br />
            For The Real World.
          </motion.h2>

          {/* -------------------------------------------------
              HERO DESCRIPTION
          ------------------------------------------------- */}

          <motion.p
            className="
              mx-auto
              mt-7
              max-w-3xl
              px-5
              text-center
              font-syne
              text-lg
              leading-relaxed
              text-white/70
              sm:mt-9
              sm:text-xl
              md:text-2xl
            "
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
          >
            TFP Coding Classes is a learning community focused on
            <span className="font-semibold text-secondary">
              {" "}
              practical skills, real projects,
            </span>{" "}
            and career-ready developers.
          </motion.p>

          {/* -------------------------------------------------
              BOTTOM TAG
          ------------------------------------------------- */}

          <motion.div
            className="mt-8 flex justify-center"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
          >
            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-secondary/30
                bg-secondary/[0.05]
                px-5
                py-2.5
                font-syne
                text-sm
                text-secondary
                backdrop-blur-sm
                sm:text-base
              "
            >
<<<<<<< HEAD
              <button>Let's Connect</button>
=======
              <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
              Learn • Build • Grow
>>>>>>> 5c836707e1290ae510e311b97cbd1cced78dc04a
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 5c836707e1290ae510e311b97cbd1cced78dc04a
