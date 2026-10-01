"use client";
import { motion } from "framer-motion";


export default function LearningJourney() {
 
  return (
   <>
   <section>

       <div className="relative mb-20 mx-auto flex w-fit -translate-y-2 items-center justify-center px-6 py-2 sm:-translate-y-3 sm:px-8 sm:py-3">
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
    
            <h2 className="relative z-10 text-center font-sora  text-white sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">
              Our Evolution
            </h2>
          </div>

          
   </section>
   </>
  );
}
