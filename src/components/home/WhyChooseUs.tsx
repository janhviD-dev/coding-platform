"use client";
import { motion } from "framer-motion";
import { CircleCheck, CircleX } from "lucide-react";

export default function WhyChooseUs(){
    return(
         <div className="flex flex-col items-center justify-center">
          <div className="relative inline-flex items-center justify-center px-8 py-3">
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
                  delay: 0.8,
                  ease: "easeInOut",
                }}
              />

              <circle cx="1" cy="1" r="1.3" fill="#2eb0a8" />
              <circle cx="99" cy="1" r="1.3" fill="#2eb0a8" />
              <circle cx="1" cy="39" r="1.3" fill="#2eb0a8" />
              <circle cx="99" cy="39" r="1.3" fill="#2eb0a8" />
            </svg>

            <h2 className="relative z-10 text-center font-raleway text-white">
              WHY CHOOSE US
            </h2>
          </div>

          <p className="mt-6 w-[90%] text-center font-raleway text-2xl leading-tight sm:w-[85%] sm:text-3xl md:w-[80%] md:text-4xl lg:w-[75%] lg:text-5xl xl:w-[70%] 2xl:w-[65%]">
            What Sets TFP Coding Classes Apart From Other Coding Classes?
          </p>
          {/* Comparison Section */}
          <section className="w-full px-5 sm:px-8 md:px-10 lg:px-16 mt-12 sm:mt-16">
            {/* BIG OUTER CONTAINER */}
            <div
              className="
    relative mx-auto max-w-5xl
    rounded-3xl
    border border-white/20
    bg-white/10
    backdrop-blur-xl
    shadow-[0_8px_40px_rgba(0,0,0,0.25)]
    p-2 sm:p-3
    overflow-hidden
  "
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_0.9fr] md:gap-6">
                {/* ================= TFP ================= */}
                <div
                  className="
    rounded-2xl
    border border-green-800
    shadow-[0_0_20px_rgba(22,163,74,0.25)]
    p-5 sm:p-6 md:p-7
  "
                >
                  {/* TFP LOGO + NAME */}
                  <div className="flex items-center gap-4">
                    <img
                      src="/tfp_logo.png"
                      alt="TFP Coding Classes"
                      className="w-15 h-15 object-contain"
                    />

                    <div className="h-10 w-px bg-black/50" />
                    <h3
                      className="
      font-libre
      font-semibold
      text-lg sm:text-xl md:text-2xl
      text-white
    "
                    >
                      TFP Coding Classes
                    </h3>
                  </div>

                  {/* TFP FEATURES */}
                  <div className="mt-6 space-y-4 sm:space-y-5">
                    <div className="flex items-center gap-3">
                      <CircleCheck
                        className="
        h-5 w-5 shrink-0
        text-green-700
        sm:h-6 sm:w-6
      "
                        strokeWidth={2.5}
                      />
                      <p className="font-flamenco text-sm sm:text-base md:text-lg text-white">
                        Highly Affordable, No Quality Cuts
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <CircleCheck
                        className="
        h-5 w-5 shrink-0
        text-green-700
        sm:h-6 sm:w-6
      "
                        strokeWidth={2.5}
                      />
                      <p className="font-flamenco text-sm sm:text-base md:text-lg text-white">
                        Industry-Relevant, Job-Oriented Curriculum
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <CircleCheck
                        className="
        h-5 w-5 shrink-0
        text-green-700
        sm:h-6 sm:w-6
      "
                        strokeWidth={2.5}
                      />
                      <p className="font-flamenco text-sm sm:text-base md:text-lg text-white">
                        Project-Based, Skill-First Learning
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <CircleCheck
                        className="
        h-5 w-5 shrink-0
        text-green-700
        sm:h-6 sm:w-6
      "
                        strokeWidth={2.5}
                      />
                      <p className="font-flamenco text-sm sm:text-base md:text-lg text-white">
                        Continuously Updated With Industry Trends
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <CircleCheck
                        className="
        h-5 w-5 shrink-0
        text-green-700
        sm:h-6 sm:w-6
      "
                        strokeWidth={2.5}
                      />
                      <p className="font-flamenco text-sm sm:text-base md:text-lg text-white">
                        Internal Hackathons, Challenges & Face-Offs
                      </p>
                    </div>
                  </div>
                </div>

                {/* ================= OTHERS ================= */}
                <div className="flex flex-col justify-center px-3 sm:px-4 md:px-5">
                  <h3 className="font-libre text-lg sm:text-xl md:text-2xl text-white/60">
                    Others
                  </h3>

                  <div className="mt-6 space-y-5 sm:space-y-6">
                    <div className="flex items-center gap-3">
                      <CircleX
                        className="
          h-5 w-5 shrink-0
          text-red-700
          sm:h-6 sm:w-6
        "
                        strokeWidth={2.5}
                      />
                      <p className="font-flamenco text-sm sm:text-base text-white/60">
                        High Fees With Compromised Quality
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <CircleX
                        className="
          h-5 w-5 shrink-0
          text-red-700
          sm:h-6 sm:w-6
        "
                        strokeWidth={2.5}
                      />
                      <p className="font-flamenco text-sm sm:text-base text-white/60">
                        Theory-Centric Learning
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <CircleX
                        className="
          h-5 w-5 shrink-0
          text-red-700
          sm:h-6 sm:w-6
        "
                        strokeWidth={2.5}
                      />
                      <p className="font-flamenco text-sm sm:text-base text-white/60">
                        Outdated, Static Curriculum
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <CircleX
                        className="
          h-5 w-5 shrink-0
          text-red-700
          sm:h-6 sm:w-6
        "
                        strokeWidth={2.5}
                      />
                      <p className="font-flamenco text-sm sm:text-base text-white/60">
                        No Competitive Learning Environment
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <CircleX
                        className="
          h-5 w-5 shrink-0
          text-red-700
          sm:h-6 sm:w-6
        "
                        strokeWidth={2.5}
                      />
                      <p className="font-flamencoy text-sm sm:text-base text-white/60">
                        Limited Practical Exposure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}