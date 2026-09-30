"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, TextAlignEnd } from "lucide-react";
import { useEffect, useState } from "react";
import CustomCursor from "./animation/CustomCursor";

export default function Navbar(){
     
        const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  

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

      <main>
        <CustomCursor/>
        <nav className="fixed top-5 left-0 w-full z-50 px-6">
          {/* Transparent positioning boundary: full width, fixed height, position:relative,
              no background/border/shadow. Logo is anchored left-0, hamburger right-0 (both
              absolute), so they can never overlap on mobile. Shared with desktop so the
              logo (and its scroll animation) isn't duplicated. */}
          <div className="max-w-7xl mx-auto relative w-full h-16">
            {/* LEFT/CENTER — Logo + Brand (animates between left and true center) */}
            <motion.div
              initial={false}
              animate={{
                left: isLogoCentered ? "50%" : "0px",
                x: isLogoCentered ? "-50%" : "0px",
                y: "-50%",
              }}
              transition={{
                duration: 0,
              }}
              className={`absolute top-1/2 flex items-center gap-4 transition-all duration-300 ${
                isLogoCentered
                  ? "bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-2 py-2"
                  : "bg-transparent px-0 py-0"
              }`}
            >
              <img
                src="/tfp_logo.png"
                alt="TFP Coding Classes"
                className="w-15 h-15 object-contain"
              />

              {/* Stylish Divider */}
              <div
                className={`h-7 w-px transition-all duration-500 ${
                  isLogoCentered
                    ? "w-0 opacity-0"
                    : "w-px bg-white/25 opacity-100"
                }`}
              />

              <span
                className={`font-raleway font-bold tracking-wide leading-tight transition-all duration-300 ${
                  isLogoCentered ? "hidden" : "text-white"
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
                href="/about"
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

            {/* MOBILE HAMBURGER — positioned within the same invisible nav container as the logo, right-aligned and vertically centered */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
    lg:hidden
    absolute
    cursor-pointer
    right-0
    top-1/2
    -translate-y-1/2
    z-50
    text-white
    p-2
  "
            >
              {isMenuOpen ? (
                <span className="text-2xl">×</span>
              ) : (
                <TextAlignEnd size={24} strokeWidth={1.5} />
              )}{" "}
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="
        lg:hidden
        absolute
        top-0
        right-0
        w-full
        min-h-[85vh]
        rounded-3xl
        bg-[#090843]/95
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        p-8
        pt-24
        z-40
      "
                >
                  <div className="flex flex-col gap-2">
                    {["Home", "About", "Courses", "Mentors", "Contact"].map(
                      (item, index) => (
                        <motion.a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.07,
                            duration: 0.3,
                          }}
                          onClick={() => setIsMenuOpen(false)}
                          className="
                py-4
                text-3xl
                font-raleway
                font-medium
                text-white
                border-b
                border-white/10
              "
                        >
                          {item}
                        </motion.a>
                      ),
                    )}

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="
            mt-8
            w-full
            rounded-full
            bg-secondary
            px-6
            py-4
            text-lg
            font-semibold
            text-primary
          "
                    >
                      Start Your Journey →
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
</main>
    
    )
}
