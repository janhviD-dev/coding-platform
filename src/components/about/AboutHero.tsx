"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <main className="min-h-screen bg-primary overflow-hidden">
      {/* =========================================================
          01. ABOUT HERO SECTION
      ========================================================= */}

      <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-5 sm:px-6 pt-20">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[120px]" />

          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        {/* Technical Background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Flow */}
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

          {/* Right Flow */}
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

          {/* Connecting Dots */}
          <circle
            cx="150"
            cy="285"
            r="2"
            fill="#2eb0a8"
            opacity="0.45"
          />

          <circle
            cx="250"
            cy="320"
            r="1.5"
            fill="#2eb0a8"
            opacity="0.35"
          />

          <circle
            cx="350"
            cy="355"
            r="1"
            fill="#2eb0a8"
            opacity="0.3"
          />

          <circle
            cx="1290"
            cy="285"
            r="2"
            fill="#2eb0a8"
            opacity="0.45"
          />

          <circle
            cx="1190"
            cy="320"
            r="1.5"
            fill="#2eb0a8"
            opacity="0.35"
          />

          <circle
            cx="1090"
            cy="355"
            r="1"
            fill="#2eb0a8"
            opacity="0.3"
          />

          {/* Floating Points */}
          <circle
            cx="420"
            cy="220"
            r="1.5"
            fill="#2eb0a8"
            opacity="0.25"
          />

          <circle
            cx="1020"
            cy="220"
            r="1.5"
            fill="#2eb0a8"
            opacity="0.25"
          />

          <circle
            cx="330"
            cy="710"
            r="1.5"
            fill="#2eb0a8"
            opacity="0.22"
          />

          <circle
            cx="1110"
            cy="710"
            r="1.5"
            fill="#2eb0a8"
            opacity="0.22"
          />
        </svg>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Small Heading */}
          <motion.h1
            className="text-secondary text-xl sm:text-2xl md:text-3xl mb-5 flex justify-center font-italiana"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            More Than Just Coding
          </motion.h1>

          {/* Main Heading */}
          <motion.h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              text-white
              text-center
              font-raleway
              font-semibold
              leading-tight
              px-3
            "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            We Build

            <br className="hidden sm:block" />

            {/* Highlighted Word */}
            <span className="relative inline-block px-5 py-2 mt-2">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
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
                    delay: 0.6,
                    ease: "easeInOut",
                  }}
                />

                {/* Corner Dots */}
                <circle
                  cx="1"
                  cy="1"
                  r="1.3"
                  fill="#2eb0a8"
                />

                <circle
                  cx="99"
                  cy="1"
                  r="1.3"
                  fill="#2eb0a8"
                />

                <circle
                  cx="1"
                  cy="39"
                  r="1.3"
                  fill="#2eb0a8"
                />

                <circle
                  cx="99"
                  cy="39"
                  r="1.3"
                  fill="#2eb0a8"
                />
              </svg>

              <span className="relative z-10">
                Developers
              </span>
            </span>

            <br />

            For The Real World.
          </motion.h2>

          {/* Hero Description */}
          <motion.p
            className="
              text-lg
              sm:text-xl
              md:text-2xl
              text-white/70
              text-center
              font-syne
              leading-relaxed
              mt-7
              sm:mt-9
              px-5
              max-w-3xl
              mx-auto
            "
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            TFP Coding Classes is a learning community focused on
            <span className="text-secondary font-semibold">
              {" "}
              practical skills, real projects,
            </span>{" "}
            and career-ready developers.
          </motion.p>

          {/* Bottom Tag */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <div
              className="
                flex
                items-center
                gap-3
                px-5
                py-2.5
                rounded-full
                border
                border-secondary/30
                bg-secondary/5
                backdrop-blur-sm
                text-secondary
                font-syne
                text-sm
                sm:text-base
              "
            >
              <button>Let's Connect</button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}