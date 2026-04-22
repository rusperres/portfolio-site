export type Service = {
  title: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    title: "Business Websites",
    description:
      "Modern, fast, and responsive websites for local businesses like clinics, cafes, and barbershops.",
    features: [
      "Mobile-first responsive design",
      "SEO optimization",
      "Contact & inquiry forms",
      "Fast performance (Lighthouse-ready)",
    ],
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to turn visitors into customers or leads.",
    features: [
      "Conversion-focused UI/UX",
      "Clean, modern design system",
      "Analytics integration",
      "A/B testing ready structure",
    ],
  },
  {
    title: "Custom Web Applications",
    description:
      "Full-stack systems for businesses with complex workflows like clinics, bookings, and internal dashboards.",
    features: [
      "Role-based access control (Admin, Staff, Users)",
      "Dashboards and data management systems",
      "Authentication and secure user systems",
      "Database-driven applications",
    ],
  },
  {
    title: "SaaS Frontend Interfaces",
    description:
      "Modern SaaS-style dashboards and UI systems built with scalable component architecture.",
    features: [
      "Dashboard UI design",
      "Authentication screens",
      "Reusable component systems",
      "Design system setup (shadcn + Tailwind)",
    ],
  },
]