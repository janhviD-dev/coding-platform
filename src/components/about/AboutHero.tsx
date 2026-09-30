"use client";
import { motion } from "framer-motion";
export default function AboutHero() {
  return (
    <main className="min-h-screen overflow-hidden lg:mb-20 bg-transparent">
      {" "}
      {/* ========================================================= 01. ABOUT HERO SECTION ========================================================= */}{" "}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-5 sm:px-6 pt-20">
        {" "}
        {/* ========================================================= BLACK + TEAL BACKGROUND EFFECT ========================================================= */}{" "}
        <div className="absolute inset-0 pointer-events-none">
          {" "}
          {/* Top Center Teal Glow */}{" "}
          <div className=" absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#2eb0a8]/[0.10] blur-[140px] " />{" "}
          {/* Left Dark Navy Glow */}{" "}
          <div className=" absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full bg-[#090843]/[0.65] blur-[140px] " />{" "}
          {/* Right Teal Glow */}{" "}
          <div className=" absolute bottom-0 -right-40 w-[550px] h-[550px] rounded-full bg-[#2eb0a8]/[0.07] blur-[140px] " />{" "}
          {/* Overall Dark Overlay */}{" "}
          <div className="absolute inset-0 bg-black/20" />{" "}
        </div>{" "}
        {/* Technical Background */}{" "}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          {/* Left Flow */}{" "}
          <path
            d="M-80 300 C180 250 270 330 470 400"
            stroke="#2eb0a8"
            strokeWidth="0.8"
            opacity="0.22"
          />{" "}
          <path
            d="M-100 620 C170 680 300 570 470 500"
            stroke="#2eb0a8"
            strokeWidth="0.6"
            opacity="0.14"
          />{" "}
          {/* Right Flow */}{" "}
          <path
            d="M1520 300 C1260 250 1170 330 970 400"
            stroke="#2eb0a8"
            strokeWidth="0.8"
            opacity="0.22"
          />{" "}
          <path
            d="M1540 620 C1270 680 1140 570 970 500"
            stroke="#2eb0a8"
            strokeWidth="0.6"
            opacity="0.14"
          />{" "}
          {/* Connecting Dots */}{" "}
          <circle cx="150" cy="285" r="2" fill="#2eb0a8" opacity="0.35" />{" "}
          <circle cx="250" cy="320" r="1.5" fill="#2eb0a8" opacity="0.25" />{" "}
          <circle cx="350" cy="355" r="1" fill="#2eb0a8" opacity="0.22" />{" "}
          <circle cx="1290" cy="285" r="2" fill="#2eb0a8" opacity="0.35" />{" "}
          <circle cx="1190" cy="320" r="1.5" fill="#2eb0a8" opacity="0.25" />{" "}
          <circle cx="1090" cy="355" r="1" fill="#2eb0a8" opacity="0.22" />{" "}
          {/* Floating Points */}{" "}
          <circle cx="420" cy="220" r="1.5" fill="#2eb0a8" opacity="0.18" />{" "}
          <circle cx="1020" cy="220" r="1.5" fill="#2eb0a8" opacity="0.18" />{" "}
          <circle cx="330" cy="710" r="1.5" fill="#2eb0a8" opacity="0.16" />{" "}
          <circle
            cx="1110"
            cy="710"
            r="1.5"
            fill="#2eb0a8"
            opacity="0.16"
          />{" "}
        </svg>{" "}
        {/* Hero Content */}{" "}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {" "}
          {/* Small Heading */}{" "}
          <motion.h1
            className=" text-secondary text-xl sm:text-2xl md:text-3xl mb-5 flex justify-center font-italiana "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {" "}
            More Than Just Coding{" "}
          </motion.h1>{" "}
          {/* Main Heading */}{" "}
          <motion.h2
            className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center font-raleway font-semibold leading-tight px-3 "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {" "}
            We Build <br className="hidden sm:block" /> {/* Highlighted Word */}{" "}
            <span className="relative inline-block px-5 py-2 mt-2">
              {" "}
              <svg
                className=" absolute inset-0 w-full h-full pointer-events-none overflow-visible "
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
                fill="none"
              >
                {" "}
                <rect
                  x="1"
                  y="1"
                  width="98"
                  height="38"
                  rx="1"
                  fill="#2eb0a8"
                  fillOpacity="0.08"
                />{" "}
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
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
                />{" "}
                {/* Corner Dots */}{" "}
                <circle cx="1" cy="1" r="1.3" fill="#2eb0a8" />{" "}
                <circle cx="99" cy="1" r="1.3" fill="#2eb0a8" />{" "}
                <circle cx="1" cy="39" r="1.3" fill="#2eb0a8" />{" "}
                <circle cx="99" cy="39" r="1.3" fill="#2eb0a8" />{" "}
              </svg>{" "}
              <span className="relative z-10"> Developers </span>{" "}
            </span>{" "}
            <br /> For The Real World.{" "}
          </motion.h2>{" "}
          {/* Hero Description */}{" "}
          <motion.p
            className=" text-lg sm:text-xl md:text-2xl text-white/45 text-center font-syne leading-relaxed mt-7 sm:mt-9 px-5 max-w-3xl mx-auto "
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {" "}
            TFP Coding Classes is a learning community focused on{" "}
            <span className="text-secondary font-semibold">
              {" "}
              practical skills, real projects,{" "}
            </span>{" "}
            and career-ready developers.{" "}
          </motion.p>{" "}
          {/* Let's Connect Button */}{" "}
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            {" "}
            <button className=" group mx-auto flex items-center gap-3 rounded-md bg-secondary px-7 py-3 sm:px-8 sm:py-3.5 text-base sm:text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(46,176,168,0.45),0_0_60px_rgba(46,176,168,0.18)] ">
              {" "}
              {/* Rolling Text */}{" "}
              <span className="relative block h-[1.4em] overflow-hidden">
                {" "}
                <span className=" block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full ">
                  {" "}
                  Let's Connect{" "}
                </span>{" "}
                <span className=" absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full ">
                  {" "}
                  Let's Connect{" "}
                </span>{" "}
              </span>{" "}
              {/* Arrow */}{" "}
              <span className=" text-xl leading-none transition-transform duration-300 group-hover:translate-x-1 ">
                {" "}
                →{" "}
              </span>{" "}
            </button>{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
}
