import Image from "next/image";
import type { Course, CourseVariant } from "./courses.data";

// Colours are isolated here so each variant is easy to restyle.
const THEME: Record<
  CourseVariant,
  { card: string; muted: string; price: string; cta: string; media: string }
> = {
  light: {
    card: "bg-white text-neutral-900",
    muted: "text-neutral-500",
    price: "text-[#d9502a]",
    cta: "bg-[#d9502a] text-white hover:bg-[#bf431f]",
    media: "bg-[radial-gradient(circle_at_30%_30%,#2f6b4a,#0c1a13)]",
  },
  orange: {
    card: "bg-[#090843] text-white",
    muted: "text-white/70",
    price: "text-white",
    cta: "bg-white text-neutral-900 hover:bg-neutral-100",
    media:
      "bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,.25),#141414)]",
  },
  dark: {
    card: "bg-black text-white",
    muted: "text-white/60",
    price: "text-[#d9502a]",
    cta: "bg-white text-neutral-900 hover:bg-neutral-100",
    media: "bg-[radial-gradient(circle_at_40%_30%,#555,#0a0a0a)]",
  },
};

export default function CourseCard({ course }: { course: Course }) {
  const t = THEME[course.variant];

  return (
    // data-stack-inner = the element GSAP scales/dims. Pinning happens on the parent.
    <article
      data-stack-inner
      className={`grid origin-top items-center gap-5 rounded-2xl p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.10)]
        will-change-transform sm:gap-6 sm:p-6 md:grid-cols-[1fr_1.15fr] md:gap-10 md:rounded-3xl md:p-8 ${t.card}`}
    >
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl ${t.media}`}
      >
        {course.image && (
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="min-w-0">
        <h3 className="text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
          {course.title}
        </h3>
        <p className={`mt-3 text-sm ${t.muted}`}>{course.description}</p>

        <dl className="mt-5 grid grid-cols-3 gap-3 text-xs md:grid-cols-2">
          {course.stats.map((s) => (
            <div key={s.label}>
              <dt className="text-sm font-semibold">{s.value}</dt>
              <dd className={t.muted}>{s.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-5 text-lg">
          Price <span className={`font-bold ${t.price}`}>{course.price}</span>
          {course.originalPrice && (
            <span className={`ml-2 text-[10px] line-through ${t.muted}`}>
              {course.originalPrice} (+GST)
            </span>
          )}
        </p>

        <a
          href={course.ctaHref}
          className={`mt-3 inline-block rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${t.cta}`}
        >
          {course.ctaLabel} →
        </a>
      </div>
    </article>
  );
}
