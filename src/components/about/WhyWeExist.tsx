"use client";

import { motion } from "framer-motion";

// export default function AboutHero() {
//   return (
//     <main className="min-h-screen bg-primary overflow-hidden">

//       {/* =========================================================
//           01. ABOUT HERO SECTION
//       ========================================================= */}

//       <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-5 sm:px-6 pt-20">

//         {/* Background Glow */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[120px]" />
//           <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[120px]" />
//         </div>

//         {/* Technical Background */}
//         <svg
//           className="absolute inset-0 w-full h-full pointer-events-none"
//           viewBox="0 0 1440 900"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {/* Left Flow */}
//           <path
//             d="M-80 300 C180 250 270 330 470 400"
//             stroke="#2eb0a8"
//             strokeWidth="0.8"
//             opacity="0.3"
//           />

//           <path
//             d="M-100 620 C170 680 300 570 470 500"
//             stroke="#2eb0a8"
//             strokeWidth="0.6"
//             opacity="0.22"
//           />

//           {/* Right Flow */}
//           <path
//             d="M1520 300 C1260 250 1170 330 970 400"
//             stroke="#2eb0a8"
//             strokeWidth="0.8"
//             opacity="0.3"
//           />

//           <path
//             d="M1540 620 C1270 680 1140 570 970 500"
//             stroke="#2eb0a8"
//             strokeWidth="0.6"
//             opacity="0.22"
//           />

//           {/* Connecting Dots */}
//           <circle
//             cx="150"
//             cy="285"
//             r="2"
//             fill="#2eb0a8"
//             opacity="0.45"
//           />

//           <circle
//             cx="250"
//             cy="320"
//             r="1.5"
//             fill="#2eb0a8"
//             opacity="0.35"
//           />

//           <circle
//             cx="350"
//             cy="355"
//             r="1"
//             fill="#2eb0a8"
//             opacity="0.3"
//           />

//           <circle
//             cx="1290"
//             cy="285"
//             r="2"
//             fill="#2eb0a8"
//             opacity="0.45"
//           />

//           <circle
//             cx="1190"
//             cy="320"
//             r="1.5"
//             fill="#2eb0a8"
//             opacity="0.35"
//           />

//           <circle
//             cx="1090"
//             cy="355"
//             r="1"
//             fill="#2eb0a8"
//             opacity="0.3"
//           />

//           {/* Floating Points */}
//           <circle
//             cx="420"
//             cy="220"
//             r="1.5"
//             fill="#2eb0a8"
//             opacity="0.25"
//           />

//           <circle
//             cx="1020"
//             cy="220"
//             r="1.5"
//             fill="#2eb0a8"
//             opacity="0.25"
//           />

//           <circle
//             cx="330"
//             cy="710"
//             r="1.5"
//             fill="#2eb0a8"
//             opacity="0.22"
//           />

//           <circle
//             cx="1110"
//             cy="710"
//             r="1.5"
//             fill="#2eb0a8"
//             opacity="0.22"
//           />
//         </svg>

//         {/* Hero Content */}
//         <div className="relative z-10 max-w-5xl mx-auto text-center">

//           {/* Small Heading */}
//           <motion.h1
//             className="text-secondary text-xl sm:text-2xl md:text-3xl mb-5 flex justify-center font-italiana"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             More Than Just Coding
//           </motion.h1>

//           {/* Main Heading */}
//           <motion.h2
//             className="
//               text-4xl
//               sm:text-5xl
//               md:text-6xl
//               lg:text-7xl
//               text-white
//               text-center
//               font-raleway
//               font-semibold
//               leading-tight
//               px-3
//             "
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.15 }}
//           >
//             We Build
//             <br className="hidden sm:block" />

//             {/* Highlighted Word */}
//             <span className="relative inline-block px-5 py-2 mt-2">

//               <svg
//                 className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
//                 viewBox="0 0 100 40"
//                 preserveAspectRatio="none"
//                 fill="none"
//               >
//                 <rect
//                   x="1"
//                   y="1"
//                   width="98"
//                   height="38"
//                   rx="1"
//                   fill="#2eb0a8"
//                   fillOpacity="0.25"
//                 />

//                 <motion.rect
//                   x="1"
//                   y="1"
//                   width="98"
//                   height="38"
//                   rx="1"
//                   stroke="#2eb0a8"
//                   strokeWidth="0.7"
//                   opacity="0.7"
//                   initial={{ pathLength: 0, opacity: 0 }}
//                   animate={{ pathLength: 1, opacity: 0.7 }}
//                   transition={{
//                     duration: 1.2,
//                     delay: 0.6,
//                     ease: "easeInOut",
//                   }}
//                 />

//                 {/* Corner Dots */}
//                 <circle
//                   cx="1"
//                   cy="1"
//                   r="1.3"
//                   fill="#2eb0a8"
//                 />

//                 <circle
//                   cx="99"
//                   cy="1"
//                   r="1.3"
//                   fill="#2eb0a8"
//                 />

//                 <circle
//                   cx="1"
//                   cy="39"
//                   r="1.3"
//                   fill="#2eb0a8"
//                 />

//                 <circle
//                   cx="99"
//                   cy="39"
//                   r="1.3"
//                   fill="#2eb0a8"
//                 />
//               </svg>

//               <span className="relative z-10">
//                 Developers
//               </span>

//             </span>

//             <br />

//             For The Real World.
//           </motion.h2>

//           {/* Hero Description */}
//           <motion.p
//             className="
//               text-lg
//               sm:text-xl
//               md:text-2xl
//               text-white/70
//               text-center
//               font-syne
//               leading-relaxed
//               mt-7
//               sm:mt-9
//               px-5
//               max-w-3xl
//               mx-auto
//             "
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.35 }}
//           >
//             TFP Coding Classes is a learning community focused on
//             <span className="text-secondary font-semibold">
//               {" "}practical skills, real projects,
//             </span>
//             {" "}and career-ready developers.
//           </motion.p>

//           {/* Bottom Tag */}
//           <motion.div
//             className="flex justify-center mt-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.55 }}
//           >
//             <div
//               className="
//                 flex
//                 items-center
//                 gap-3
//                 px-5
//                 py-2.5
//                 rounded-full
//                 border
//                 border-secondary/30
//                 bg-secondary/5
//                 backdrop-blur-sm
//                 text-secondary
//                 font-syne
//                 text-sm
//                 sm:text-base
//               "
//             >
//               <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
//               Learn • Build • Grow
//             </div>
//           </motion.div>

//         </div>
//       </section>

//       {/* =========================================================
//           02. WHY WE EXIST SECTION
//       ========================================================= */}

//       <section className="relative py-24 sm:py-28 lg:py-32 px-5 sm:px-8 overflow-hidden">

//         {/* Background Glow */}
//         <div className="absolute inset-0 pointer-events-none">

//           <div
//             className="
//               absolute
//               top-1/3
//               -left-32
//               w-72
//               h-72
//               bg-secondary/10
//               rounded-full
//               blur-[120px]
//             "
//           />

//           <div
//             className="
//               absolute
//               bottom-1/3
//               -right-32
//               w-72
//               h-72
//               bg-secondary/10
//               rounded-full
//               blur-[120px]
//             "
//           />

//         </div>

//         {/* Background Grid */}
//         <div
//           className="
//             absolute
//             inset-0
//             pointer-events-none
//             opacity-[0.035]
//             bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
//             bg-[size:70px_70px]
//           "
//         />

//         <div className="relative z-10 max-w-6xl mx-auto">

//           {/* Section Heading */}
//           <motion.div
//             className="text-center max-w-3xl mx-auto"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >

//             <p className="text-secondary text-xl sm:text-2xl font-italiana mb-4">
//               Why We Exist
//             </p>

//             <h2
//               className="
//                 text-3xl
//                 sm:text-4xl
//                 md:text-5xl
//                 lg:text-6xl
//                 text-white
//                 font-raleway
//                 font-semibold
//                 leading-tight
//               "
//             >
//               Learning to Code Should
//               <span className="text-secondary">
//                 {" "}Lead Somewhere.
//               </span>
//             </h2>

//             <p
//               className="
//                 mt-6
//                 text-base
//                 sm:text-lg
//                 md:text-xl
//                 text-white/65
//                 font-syne
//                 leading-relaxed
//               "
//             >
//               We believe coding education should go beyond watching
//               tutorials and writing code. It should help students
//               understand, build, solve problems, and prepare for
//               the real world.
//             </p>

//           </motion.div>

//           {/* Main Content */}
//           <div
//             className="
//               mt-16
//               sm:mt-20
//               grid
//               lg:grid-cols-2
//               gap-10
//               lg:gap-16
//               items-center
//             "
//           >

//             {/* Left Content Card */}
//             <motion.div
//               className="
//                 relative
//                 rounded-2xl
//                 border
//                 border-white/10
//                 bg-white/[0.025]
//                 backdrop-blur-xl
//                 p-7
//                 sm:p-9
//                 lg:p-10
//                 overflow-hidden
//               "
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >

//               {/* Decorative Line */}
//               <div className="absolute top-0 left-0 w-24 h-[2px] bg-secondary" />

//               <span
//                 className="
//                   text-secondary
//                   font-syne
//                   text-sm
//                   tracking-[0.2em]
//                   uppercase
//                 "
//               >
//                 The Gap
//               </span>

//               <h3
//                 className="
//                   mt-5
//                   text-2xl
//                   sm:text-3xl
//                   md:text-4xl
//                   text-white
//                   font-raleway
//                   font-semibold
//                   leading-tight
//                 "
//               >
//                 From Learning
//                 <br />
//                 <span className="text-white/50">
//                   to Actually Building.
//                 </span>
//               </h3>

//               <p
//                 className="
//                   mt-6
//                   text-base
//                   sm:text-lg
//                   text-white/60
//                   font-syne
//                   leading-relaxed
//                 "
//               >
//                 Many students learn programming concepts but struggle
//                 when it comes to building real projects, solving
//                 problems, and applying their knowledge outside the
//                 classroom.
//               </p>

//               <p
//                 className="
//                   mt-4
//                   text-base
//                   sm:text-lg
//                   text-white/60
//                   font-syne
//                   leading-relaxed
//                 "
//               >
//                 TFP Coding Classes exists to bridge that gap through
//                 practical learning, project-based development, and
//                 continuous guidance.
//               </p>

//             </motion.div>

//             {/* Right Side Cards */}
//             <div className="grid sm:grid-cols-2 gap-5">

//               {/* Card 01 */}
//               <motion.div
//                 className="
//                   group
//                   rounded-2xl
//                   border
//                   border-secondary/20
//                   bg-secondary/[0.04]
//                   p-6
//                   sm:p-7
//                   transition-all
//                   duration-300
//                   hover:-translate-y-2
//                   hover:border-secondary/50
//                   hover:bg-secondary/[0.07]
//                 "
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >

//                 <div
//                   className="
//                     w-11
//                     h-11
//                     rounded-xl
//                     bg-secondary/10
//                     border
//                     border-secondary/20
//                     flex
//                     items-center
//                     justify-center
//                     text-secondary
//                     font-raleway
//                     font-semibold
//                   "
//                 >
//                   01
//                 </div>

//                 <h4
//                   className="
//                     mt-5
//                     text-xl
//                     text-white
//                     font-raleway
//                     font-semibold
//                   "
//                 >
//                   Learn Practically
//                 </h4>

//                 <p
//                   className="
//                     mt-3
//                     text-sm
//                     sm:text-base
//                     text-white/55
//                     font-syne
//                     leading-relaxed
//                   "
//                 >
//                   Understand concepts by applying them to practical
//                   coding tasks and real development scenarios.
//                 </p>

//               </motion.div>

//               {/* Card 02 */}
//               <motion.div
//                 className="
//                   group
//                   rounded-2xl
//                   border
//                   border-white/10
//                   bg-white/[0.025]
//                   p-6
//                   sm:p-7
//                   transition-all
//                   duration-300
//                   hover:-translate-y-2
//                   hover:border-secondary/40
//                 "
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//               >

//                 <div
//                   className="
//                     w-11
//                     h-11
//                     rounded-xl
//                     bg-secondary/10
//                     border
//                     border-secondary/20
//                     flex
//                     items-center
//                     justify-center
//                     text-secondary
//                     font-raleway
//                     font-semibold
//                   "
//                 >
//                   02
//                 </div>

//                 <h4
//                   className="
//                     mt-5
//                     text-xl
//                     text-white
//                     font-raleway
//                     font-semibold
//                   "
//                 >
//                   Build Real Projects
//                 </h4>

//                 <p
//                   className="
//                     mt-3
//                     text-sm
//                     sm:text-base
//                     text-white/55
//                     font-syne
//                     leading-relaxed
//                   "
//                 >
//                   Turn ideas into working projects that strengthen
//                   your skills and give you something meaningful to
//                   showcase.
//                 </p>

//               </motion.div>

//               {/* Card 03 */}
//               <motion.div
//                 className="
//                   group
//                   rounded-2xl
//                   border
//                   border-white/10
//                   bg-white/[0.025]
//                   p-6
//                   sm:p-7
//                   transition-all
//                   duration-300
//                   hover:-translate-y-2
//                   hover:border-secondary/40
//                 "
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >

//                 <div
//                   className="
//                     w-11
//                     h-11
//                     rounded-xl
//                     bg-secondary/10
//                     border
//                     border-secondary/20
//                     flex
//                     items-center
//                     justify-center
//                     text-secondary
//                     font-raleway
//                     font-semibold
//                   "
//                 >
//                   03
//                 </div>

//                 <h4
//                   className="
//                     mt-5
//                     text-xl
//                     text-white
//                     font-raleway
//                     font-semibold
//                   "
//                 >
//                   Solve Problems
//                 </h4>

//                 <p
//                   className="
//                     mt-3
//                     text-sm
//                     sm:text-base
//                     text-white/55
//                     font-syne
//                     leading-relaxed
//                   "
//                 >
//                   Develop the problem-solving mindset needed to
//                   approach coding challenges with clarity and
//                   confidence.
//                 </p>

//               </motion.div>

//               {/* Card 04 */}
//               <motion.div
//                 className="
//                   group
//                   rounded-2xl
//                   border
//                   border-white/10
//                   bg-white/[0.025]
//                   p-6
//                   sm:p-7
//                   transition-all
//                   duration-300
//                   hover:-translate-y-2
//                   hover:border-secondary/40
//                 "
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//               >

//                 <div
//                   className="
//                     w-11
//                     h-11
//                     rounded-xl
//                     bg-secondary/10
//                     border
//                     border-secondary/20
//                     flex
//                     items-center
//                     justify-center
//                     text-secondary
//                     font-raleway
//                     font-semibold
//                   "
//                 >
//                   04
//                 </div>

//                 <h4
//                   className="
//                     mt-5
//                     text-xl
//                     text-white
//                     font-raleway
//                     font-semibold
//                   "
//                 >
//                   Grow With Guidance
//                 </h4>

//                 <p
//                   className="
//                     mt-3
//                     text-sm
//                     sm:text-base
//                     text-white/55
//                     font-syne
//                     leading-relaxed
//                   "
//                 >
//                   Learn with continuous guidance, feedback, and a
//                   community that keeps you moving forward.
//                 </p>

//               </motion.div>

//             </div>
//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }

const WhyWeExist = () => {
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
            <span
              className="
                w-10
                h-[1px]
                bg-secondary
              "
            />

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
};

export default WhyWeExist;
