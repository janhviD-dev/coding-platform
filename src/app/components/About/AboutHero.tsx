//

"use client";

import { motion } from "framer-motion";


{/* =========================================================
    01. ABOUT HERO SECTION
========================================================= */}

<section className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 sm:px-8">

  {/* Background Glow */}
  <div className="absolute inset-0 pointer-events-none">

    <div
      className="
        absolute
        top-20
        left-1/4
        w-80
        h-80
        bg-secondary/10
        rounded-full
        blur-[130px]
      "
    />

    <div
      className="
        absolute
        bottom-10
        right-1/4
        w-80
        h-80
        bg-secondary/10
        rounded-full
        blur-[130px]
      "
    />

  </div>


  {/* Technical Background Lines */}
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1440 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >

    {/* Left Curves */}

    <path
      d="M-100 300 C180 230 300 320 500 420"
      stroke="#2eb0a8"
      strokeWidth="0.8"
      opacity="0.25"
    />

    <path
      d="M-100 650 C180 700 320 590 500 510"
      stroke="#2eb0a8"
      strokeWidth="0.6"
      opacity="0.18"
    />


    {/* Right Curves */}

    <path
      d="M1540 300 C1260 230 1140 320 940 420"
      stroke="#2eb0a8"
      strokeWidth="0.8"
      opacity="0.25"
    />

    <path
      d="M1540 650 C1260 700 1120 590 940 510"
      stroke="#2eb0a8"
      strokeWidth="0.6"
      opacity="0.18"
    />


    {/* Small Tech Dots */}

    <circle
      cx="180"
      cy="285"
      r="2"
      fill="#2eb0a8"
      opacity="0.45"
    />

    <circle
      cx="300"
      cy="330"
      r="1.5"
      fill="#2eb0a8"
      opacity="0.35"
    />

    <circle
      cx="1260"
      cy="285"
      r="2"
      fill="#2eb0a8"
      opacity="0.45"
    />

    <circle
      cx="1140"
      cy="330"
      r="1.5"
      fill="#2eb0a8"
      opacity="0.35"
    />

    <circle
      cx="400"
      cy="180"
      r="1.5"
      fill="#2eb0a8"
      opacity="0.25"
    />

    <circle
      cx="1040"
      cy="180"
      r="1.5"
      fill="#2eb0a8"
      opacity="0.25"
    />

  </svg>


  {/* Hero Content */}

  <div className="relative z-10 max-w-6xl mx-auto text-center pt-20">

    {/* Small Heading */}

    <motion.p
      className="
        text-secondary
        text-xl
        sm:text-2xl
        md:text-3xl
        font-italiana
        mb-5
      "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      About TFP Coding Classes
    </motion.p>


    {/* Main Heading */}

    <motion.h1
      className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-8xl
        font-raleway
        font-semibold
        leading-[1.05]
      "
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.15,
      }}
    >

      We Don't Just

      <br />

      <span className="text-secondary">
        Teach Code.
      </span>

      <br />

      We Build{" "}

      <span className="relative inline-block">

        <span className="relative z-10">
          Developers.
        </span>

        {/* Animated Underline */}

        <motion.span
          className="
            absolute
            left-0
            right-0
            bottom-1
            h-3
            bg-secondary/20
            -z-0
          "
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
        />

      </span>

    </motion.h1>


    {/* Description */}

    <motion.p
      className="
        max-w-3xl
        mx-auto
        mt-8
        text-lg
        sm:text-xl
        md:text-2xl
        text-white/65
        font-syne
        leading-relaxed
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

      TFP Coding Classes is built to help students move from
      learning concepts to building real things — and from
      writing code to becoming confident developers.

    </motion.p>


    {/* CTA */}

    <motion.div
      className="mt-10 flex justify-center"
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

      <a
        href="#who-we-are"
        className="
          group
          flex
          items-center
          gap-3
          px-7
          py-3
          rounded-md
          bg-secondary
          text-white
          font-syne
          font-semibold
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_0_30px_rgba(46,176,168,0.35)]
        "
      >

        <span>
          Discover Our Story
        </span>

        <span
          className="
            text-xl
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>

      </a>

    </motion.div>

  </div>

</section>

