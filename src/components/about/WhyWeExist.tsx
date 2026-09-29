"use client";

import { motion } from "framer-motion";

export default function WhyWeExist() {
  return (
    /* =========================================================
        02. WHY WE EXIST SECTION
    ========================================================= */

    <section
      id="why-we-exist"
      className="
        relative
        py-28
        sm:py-36
        lg:py-44
        px-5
        sm:px-8
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-1/4
            -left-40
            w-96
            h-96
            rounded-full
            bg-secondary/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-1/4
            -right-40
            w-96
            h-96
            rounded-full
            bg-secondary/5
            blur-[140px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Small Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4">
            <span className="w-10 h-[1px] bg-secondary" />

            <span
              className="
                text-secondary
                text-sm
                sm:text-base
                font-syne
                uppercase
                tracking-[0.25em]
              "
            >
              Why We Exist
            </span>
          </div>
        </motion.div>

        {/* Main Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            max-w-6xl
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-8xl
            font-raleway
            font-semibold
            leading-[1.05]
            tracking-tight
          "
        >
          Because learning
          <span className="text-secondary"> to code</span>
          <br />
          should open
          <span className="text-secondary"> possibilities.</span>
          <br />
          Not create
          <span className="text-white/35"> limitations.</span>
        </motion.h2>

        {/* Bottom Content */}
        <div
          className="
            mt-16
            sm:mt-20
            grid
            lg:grid-cols-[1fr_1.5fr]
            gap-10
            lg:gap-24
            items-start
          "
        >
          {/* Left Side Number */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block"
          >
            <div
              className="
                text-[120px]
                xl:text-[160px]
                font-raleway
                font-semibold
                leading-none
                text-white/[0.035]
                select-none
              "
            >
              02
            </div>

            <div className="mt-[-25px] ml-2">
              <span
                className="
                  text-secondary
                  font-italiana
                  text-2xl
                "
              >
                The purpose
              </span>
            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="
                text-lg
                sm:text-xl
                lg:text-2xl
                text-white/65
                font-syne
                leading-relaxed
              "
            >
              Learning to code should not feel like memorizing endless syntax or
              simply watching tutorials.
              <span className="text-white">
                {" "}
                It should give students the confidence to create, experiment and
                solve real problems.
              </span>
            </p>

            <p
              className="
                mt-7
                text-base
                sm:text-lg
                text-white/45
                font-syne
                leading-relaxed
                max-w-3xl
              "
            >
              We created TFP Coding Classes to bridge the gap between learning
              concepts and actually using them. Our goal is to make technology
              practical, engaging and accessible — so students can move from
              understanding an idea to building something with it.
            </p>

            {/* Highlight Quote */}
            <div
              className="
                relative
                mt-10
                pl-6
                sm:pl-8
                border-l-2
                border-secondary
              "
            >
              <p
                className="
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                  text-white
                  font-raleway
                  font-medium
                  leading-relaxed
                "
              >
                “We don't just want students to
                <span className="text-secondary"> learn technology.</span>
                <br className="hidden sm:block" />
                We want them to
                <span className="text-secondary"> use it with confidence.</span>
                ”
              </p>
            </div>

            {/* Small Bottom Tags */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Learn With Purpose",
                "Build With Confidence",
                "Solve Real Problems",
                "Grow Continuously",
              ].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.025]
                    text-white/55
                    text-sm
                    font-syne
                    hover:border-secondary/40
                    hover:text-secondary
                    transition-all
                    duration-300
                  "
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Divider */}
        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
            origin-left
            mt-24
            sm:mt-32
            h-px
            bg-gradient-to-r
            from-secondary/50
            via-white/10
            to-transparent
          "
        />
      </div>
    </section>
  );
}
