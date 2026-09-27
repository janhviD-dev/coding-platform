"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Menu, TextAlignEnd } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingDown(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Logo center-scroll animation only applies from the tablet/desktop (lg) breakpoint up.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    setIsLargeScreen(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsLargeScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const isLogoCentered = isScrollingDown && isLargeScreen;

  return (
    <>
      <main>
        <nav className="fixed top-5 left-0 w-full z-50 px-6">
          <div className="max-w-7xl mx-auto relative h-16">
            {/* LEFT/CENTER — Logo + Brand (animates between left and true center) */}
            <motion.div
              initial={false}
              animate={{
                left: isLogoCentered ? "50%" : "0px",
                x: isLogoCentered ? "-50%" : "0px",
                y: "-50%",
              }}
              transition={{
                duration: 0.35,
                ease: [0.76, 0, 0.24, 1],
              }}
              className={`absolute top-1/2 flex items-center gap-4 transition-all duration-300 ${
                isLogoCentered
                  ? "bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-5 py-2"
                  : "bg-transparent px-0 py-0"
              }`}
            >
              <img
                src="/tfp_logo.png"
                alt="TFP Coding Classes"
                className="w-15 h-15 object-contain"
              />

              {/* Stylish Divider */}
              <div className="h-7 w-px bg-white/25" />

              <span
                className={`font-walter font-semibold tracking-wide leading-tight ${
                  isLogoCentered ? "text-primary" : "text-white"
                }`}
              >
                TFP Coding
                <br />
                Classes
              </span>
            </motion.div>

            {/* CENTER — Glass Navigation, centered relative to the viewport/container, not grid columns */}
            <motion.div
              initial={false}
              animate={{
                opacity: isScrollingDown ? 0 : 1,
                x: "-50%",
                y: isScrollingDown ? -15 : 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
    hidden lg:flex
    absolute inset-y-0 left-1/2
    items-center
    gap-2
    px-3 py-2
    rounded-xl
    bg-white/[0.025]
    backdrop-blur-xl
    border border-white/[0.06]
    shadow-[0_8px_35px_rgba(0,0,0,0.15)]
    overflow-hidden
  "
            >
              {/* Home */}
              <a
                href="#"
                className="px-4 py-2 rounded-full text-white/80 transition-all duration-300 group"
              >
                <span className="relative block h-[1.4em] overflow-hidden">
                  <span
                    className="
          block
          transition-transform
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          group-hover:-translate-y-full
        "
                  >
                    Home
                  </span>

                  <span
                    className="
          absolute
          left-0
          top-full
          block
          transition-transform
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          group-hover:-translate-y-full
        "
                  >
                    Home
                  </span>
                </span>
              </a>

              {/* About */}
              <a
                href="#"
                className="px-4 py-2 rounded-full text-white/80 transition-all duration-300 group"
              >
                <span className="relative block h-[1.4em] overflow-hidden">
                  <span
                    className="
          block
          transition-transform
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          group-hover:-translate-y-full
        "
                  >
                    About
                  </span>

                  <span
                    className="
          absolute
          left-0
          top-full
          block
          transition-transform
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          group-hover:-translate-y-full
        "
                  >
                    About
                  </span>
                </span>
              </a>

              {/* Courses */}
              <a
                href="#"
                className="px-4 py-2 rounded-full text-white/80 transition-all duration-300 group"
              >
                <span className="relative block h-[1.4em] overflow-hidden">
                  <span
                    className="
          block
          transition-transform
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          group-hover:-translate-y-full
        "
                  >
                    Courses
                  </span>

                  <span
                    className="
          absolute
          left-0
          top-full
          block
          transition-transform
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          group-hover:-translate-y-full
        "
                  >
                    Courses
                  </span>
                </span>
              </a>

              {/* Mentors */}
              <a
                href="#"
                className="px-4 py-2 rounded-full text-white/80 transition-all duration-300 group"
              >
                <span className="relative block h-[1.4em] overflow-hidden">
                  <span
                    className="
          block
          transition-transform
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          group-hover:-translate-y-full
        "
                  >
                    Mentors
                  </span>

                  <span
                    className="
          absolute
          left-0
          top-full
          block
          transition-transform
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          group-hover:-translate-y-full
        "
                  >
                    Mentors
                  </span>
                </span>
              </a>

              {/* Contact */}
              <a
                href="#"
                className="px-4 py-2 rounded-full text-white/80 transition-all duration-300 group"
              >
                <span className="relative block h-[1.4em] overflow-hidden">
                  <span
                    className="
          block
          transition-transform
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          group-hover:-translate-y-full
        "
                  >
                    Contact
                  </span>

                  <span
                    className="
          absolute
          left-0
          top-full
          block
          transition-transform
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          group-hover:-translate-y-full
        "
                  >
                    Contact
                  </span>
                </span>
              </a>
            </motion.div>

            {/* RIGHT — Sign In, always pinned to the right edge */}
            <motion.div
              initial={false}
              animate={{
                opacity: isScrollingDown ? 0 : 1,
                y: isScrollingDown ? -15 : 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="hidden lg:flex absolute inset-y-0 right-0 items-center gap-4"
            >
              {" "}
              {/* Request Call */}
              <button
                className="
              flex items-center gap-1.5
              px-4 py-1.5
              text-sm
              text-white
              rounded-full
              border border-secondary/30
              bg-transparent
              shadow-[inset_0_0_12px_rgba(46,176,168,0.18)]
              transition-all duration-300
              hover:border-secondary/60
              hover:shadow-[inset_0_0_18px_rgba(46,176,168,0.30)]
            "
              >
                <Phone size={14} strokeWidth={1.8} />
                Request Call
              </button>
              {/* Sign In */}
              <button
                className="
      text-sm
      text-white/75
      transition-all duration-300
      hover:text-secondary
    "
              >
                Sign In
              </button>
            </motion.div>
            <button
              className="
    lg:hidden
    fixed
    top-5
    right-5
    z-50
    text-white
    p-2
  "
            >
              <TextAlignEnd size={24} strokeWidth={1.5} />
            </button>
          </div>
        </nav>

        <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-5 sm:px-6 mt-20">
          {" "}
          {/* Animated background glow */}
          {/* Abstract Line Background */}
          {/* Digital Blueprint Background */}
          {/* Technical Orbit Blueprint */}
          {/* Particle → Line Transformation */}
          {/* Light Digital Flow */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left soft flows */}
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

            {/* Right soft flows */}
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

            {/* Tiny connecting particles */}
            <circle cx="150" cy="285" r="2" fill="#2eb0a8" opacity="0.45" />
            <circle cx="250" cy="320" r="1.5" fill="#2eb0a8" opacity="0.35" />
            <circle cx="350" cy="355" r="1" fill="#2eb0a8" opacity="0.3" />

            <circle cx="1290" cy="285" r="2" fill="#2eb0a8" opacity="0.45" />
            <circle cx="1190" cy="320" r="1.5" fill="#2eb0a8" opacity="0.35" />
            <circle cx="1090" cy="355" r="1" fill="#2eb0a8" opacity="0.3" />

            <circle cx="180" cy="650" r="1.5" fill="#2eb0a8" opacity="0.35" />
            <circle cx="290" cy="610" r="1" fill="#2eb0a8" opacity="0.28" />

            <circle cx="1260" cy="650" r="1.5" fill="#2eb0a8" opacity="0.35" />
            <circle cx="1150" cy="610" r="1" fill="#2eb0a8" opacity="0.28" />

            {/* Tiny floating points */}
            <circle cx="420" cy="220" r="1.5" fill="#2eb0a8" opacity="0.25" />
            <circle cx="1020" cy="220" r="1.5" fill="#2eb0a8" opacity="0.25" />

            <circle cx="330" cy="710" r="1.5" fill="#2eb0a8" opacity="0.22" />
            <circle cx="1110" cy="710" r="1.5" fill="#2eb0a8" opacity="0.22" />
          </svg>
          <div className="relative z-10">
            <h1 className=" text-secondary text-2xl mb-4 flex justify-center font-italiana">
              Learn. Build. Get Placed.
            </h1>
            <p
              className="
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    text-white
    text-center
    font-raleway
    leading-tight
    px-5
    sm:px-8
    md:px-10
    lg:px-0
    max-w-5xl
    mx-auto
  "
            >
              Become The Developer
              <br className="hidden sm:block" />
              <span className="relative inline-block px-5 py-2">
                {/* Rectangle */}
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

                  {/* Top-left dot */}
                  <circle cx="1" cy="1" r="1.3" fill="#2eb0a8" />

                  {/* Top-right dot */}
                  <circle cx="99" cy="1" r="1.3" fill="#2eb0a8" />

                  {/* Bottom-left dot */}
                  <circle cx="1" cy="39" r="1.3" fill="#2eb0a8" />

                  {/* Bottom-right dot */}
                  <circle cx="99" cy="39" r="1.3" fill="#2eb0a8" />
                </svg>

                <span className="relative z-10">Companies</span>
              </span>{" "}
              Want To Hire!
            </p>
            <p
              className="
    text-lg
    sm:text-xl
    md:text-2xl
    text-center
    font-walter
    leading-relaxed
    mt-6
    sm:mt-8
    md:mt-10
    px-5
    sm:px-8
    max-w-4xl
    mx-auto
  "
            >
              Join a growing community of students preparing for real-world tech
              careers at
              <br />
              <span
                className="
      inline-block
      text-secondary
      text-xl
      sm:text-2xl
      md:text-3xl
      font-semibold
      mt-2
    "
              >
                TFP Coding Classes
              </span>
            </p>
            <button
              className="
    group
    mx-auto
    mt-8
    sm:mt-7
    md:mt-9
    lg:mt-10
    flex
    items-center
    gap-3
    rounded-md
    bg-secondary
    px-7
    py-3
    sm:px-8
    sm:py-3.5
    text-base
    sm:text-lg
    font-semibold
    text-white

    transition-all
    duration-300

    hover:-translate-y-1
    hover:shadow-[0_0_25px_rgba(46,176,168,0.45),0_0_60px_rgba(46,176,168,0.18)]
  "
            >
              {/* Rolling Text */}
              <span className="relative block h-[1.4em] overflow-hidden">
                <span
                  className="
        block
        transition-transform
        duration-500
        ease-[cubic-bezier(0.76,0,0.24,1)]
        group-hover:-translate-y-full
      "
                >
                  Start Journey
                </span>

                <span
                  className="
        absolute
        left-0
        top-full
        block
        transition-transform
        duration-500
        ease-[cubic-bezier(0.76,0,0.24,1)]
        group-hover:-translate-y-full
      "
                >
                  Start Journey
                </span>
              </span>

              {/* Arrow */}
              <span
                className="
      text-xl
      leading-none
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
              >
                →
              </span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
