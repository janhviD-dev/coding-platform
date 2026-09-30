// Data lives apart from the UI. Swap `image` for real paths (e.g. "/courses/web-3.jpg").
export type CourseVariant = "light" | "orange" | "dark";

export interface CourseStat {
  value: string;
  label: string;
}

export interface Course {
  id: string;
  variant: CourseVariant;
  title: string;
  description: string;
  image?: string; // optional: falls back to a gradient placeholder
  stats: CourseStat[];
  price: string;
  originalPrice?: string;
  ctaLabel: string;
  ctaHref: string;
}

const stats = (duration: string, durationLabel: string): CourseStat[] => [
  { value: duration, label: durationLabel },
  { value: "Yes", label: "Certified" },
  { value: "24/7", label: "Mentor Support" },
];

export const courses: Course[] = [
  {
    id: "web-3",
    variant: "light",
    title:
      "Complete Web Development + DSA + Gen-AI",
    description:
      "Build real scalable products used by thousands of users, learn AI engineering, full stack development and DevOps.",
    stats: stats("7", "Months"),
    price: "Rs.8999",
    originalPrice: "Rs.17999",
    ctaLabel: "Check Course",
    ctaHref: "#",
  },
  {
    id: "data-science",
    variant: "orange",
    title: "Data Science & Analytics with Gen AI",
    description:
      "Gain hands-on experience in data analysis, visualization and AI integration.",
    stats: stats("5+", "Months"),
    price: "Rs.6999",
    originalPrice: "Rs.13999",
    ctaLabel: "Check Course",
    ctaHref: "#",
  },
  {
    id: "web-2",
    variant: "dark",
    title:
      "Complete Web Development + DSA",
    description:
      "Master the fundamentals with live classes, real projects and placement guidance.",
    stats: stats("200+", "Hours"),
    price: "Rs.5999",
    originalPrice: "Rs.11998",
    ctaLabel: "Check Course",
    ctaHref: "#",
  },
  {
    id: "bootcamp",
    variant: "orange",
    title: "Full Stack: From Zero To First Developer Job",
    description:
      "A guided path with weekly reviews, portfolio projects and interview preparation.",
    stats: stats("4", "Months"),
    price: "Rs.4999",
    originalPrice: "Rs.9999",
    ctaLabel: "Check Course",
    ctaHref: "#",
  },
];
