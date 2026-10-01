
"use client";

import Image from "next/image";
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
        lg:py-30
        px-5
        sm:px-8
        mb-5
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

        {/* =====================================================
            SECTION LABEL
        ===================================================== */}

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

        {/* =====================================================
            MAIN STATEMENT
        ===================================================== */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            max-w-6xl
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-6xl
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

        {/* =====================================================
            TFP INTRO — IMAGE + TEXT
        ===================================================== */}

        <div
          className="
            mt-24
            sm:mt-32
            lg:mt-40
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-20
            items-center
          "
        >

          {/* ===================================================
              LEFT IMAGE
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              relative
              w-full
              h-[320px]
              sm:h-[420px]
              lg:h-[500px]
              overflow-hidden
              rounded-2xl
            "
          >
            <Image
              src="/images/tfp-about.jpg"
              alt="Students learning and building with technology at TFP Coding Classes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Teal Border */}
            <div
              className="
                absolute
                inset-0
                rounded-2xl
                border
                border-secondary/20
              "
            />
          </motion.div>

          {/* ===================================================
              RIGHT TEXT
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            {/* Small Label */}
            <p
              className="
                text-secondary
                font-syne
                text-sm
                sm:text-base
                uppercase
                tracking-[0.2em]
                mb-5
              "
            >
              More Than A Classroom
            </p>

            {/* Heading */}
            <h3
              className="
                font-raleway
                font-semibold
                text-3xl
                sm:text-4xl
                lg:text-5xl
                leading-tight
                mb-7
              "
            >
              We create a space where
              <span className="text-secondary">
                {" "}
                learning becomes practical.
              </span>
            </h3>

            {/* Description */}
            <div
              className="
                space-y-5
                text-white/55
                font-syne
                text-base
                sm:text-lg
                leading-relaxed
              "
            >
              <p>
                TFP Coding Classes is a learning community built to help
                students understand technology beyond just theory.
              </p>

              <p>
                We focus on practical learning, real projects, hands-on
                experimentation, and the confidence to actually build
                something from what you learn.
              </p>

              <p>
                Our goal is simple — create an environment where students
                can explore technology, learn by doing, and prepare themselves
                for real-world opportunities.
              </p>
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-secondary" />

              <span className="text-white/30 font-syne text-sm">
                Learn. Experiment. Build.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
