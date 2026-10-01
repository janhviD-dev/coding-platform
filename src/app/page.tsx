"use client";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Courses from "@/components/courses/CourseStack";
import LearningJourney from "@/components/home/LearningJourney";


export default function Home() {
 

  return (
    <>
      <main>
        <Hero />
        {/* Section Divider */}
        <div className="relative flex items-center justify-center w-full py-12 sm:py-16">
          {/* Left Gradient Line */}
          <div
            className="
      h-px
      w-[25%]
      sm:w-[30%]
      bg-gradient-to-r
      from-transparent
      via-secondary/20
      to-secondary/60
    "
          />

          {/* Center Tech Element */}
          <div className="relative mx-4 flex items-center justify-center">
            <div className="absolute h-8 w-8 rounded-full bg-secondary/10 blur-xl" />

            <div
              className="
        relative
        h-2
        w-2
        rounded-full
        bg-secondary
        shadow-[0_0_12px_rgba(46,176,168,0.8)]
      "
            />
          </div>

          {/* Right Gradient Line */}
          <div
            className="
      h-px
      w-[25%]
      sm:w-[30%]
      bg-gradient-to-l
      from-transparent
      via-secondary/20
      to-secondary/60
    "
          />
        </div>

        {/*Why Choose Us*/}
        <WhyChooseUs />

        {/* Section Divider */}
        <div className="relative flex items-center justify-center w-full py-12 sm:py-16">
          {/* Left Gradient Line */}
          <div
            className="
      h-px
      w-[25%]
      sm:w-[30%]
      bg-gradient-to-r
      from-transparent
      via-secondary/20
      to-secondary/60
    "
          />

          {/* Center Tech Element */}
          <div className="relative mx-4 flex items-center justify-center">
            <div className="absolute h-8 w-8 rounded-full bg-secondary/10 blur-xl" />

            <div
              className="
        relative
        h-2
        w-2
        rounded-full
        bg-secondary
        shadow-[0_0_12px_rgba(46,176,168,0.8)]
      "
            />
          </div>

          {/* Right Gradient Line */}
          <div
            className="
      h-px
      w-[25%]
      sm:w-[30%]
      bg-gradient-to-l
      from-transparent
      via-secondary/20
      to-secondary/60
    "
          />
        </div>
        <Courses />
        {/* Section Divider */}
        <div className="relative flex items-center justify-center w-full py-12 sm:py-16">
          {/* Left Gradient Line */}
          <div
            className="
      h-px
      w-[25%]
      sm:w-[30%]
      bg-gradient-to-r
      from-transparent
      via-secondary/20
      to-secondary/60
    "
          />

          {/* Center Tech Element */}
          <div className="relative mx-4 flex items-center justify-center">
            <div className="absolute h-8 w-8 rounded-full bg-secondary/10 blur-xl" />

            <div
              className="
        relative
        h-2
        w-2
        rounded-full
        bg-secondary
        shadow-[0_0_12px_rgba(46,176,168,0.8)]
      "
            />
          </div>

          {/* Right Gradient Line */}
          <div
            className="
      h-px
      w-[25%]
      sm:w-[30%]
      bg-gradient-to-l
      from-transparent
      via-secondary/20
      to-secondary/60
    "
          />
        </div>
        <LearningJourney/>
      </main>
    </>
  );
}
