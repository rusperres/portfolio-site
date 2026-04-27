export type Project = {
  slug: string
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  details?: {
    features: string[]
    challenge: string
    solution: string
    solutionBullets?: string[]
    outcome: string[]
  }
}

export const projects: Project[] = [
  {
    slug: "velocitycv",
    title: "VelocityCV",
    description:
      "A SaaS-style resume builder with AI-powered content generation and modern UI.",
    image: "/projects/velocitycv.png",
    tech: ["Next.js", "Tailwind", "Gemini API", "Vercel"],
    liveUrl: "https://velocitycv.vercel.app/",
    githubUrl: "https://github.com/rusperres/velocitycv",
    featured: true,
    details: {
      features: [
        "AI-generated resume structuring from raw user data",
        "ATS-optimized formatting and keyword alignment",
        "Dynamic layout system that adapts to content length",
        "Automatic PDF export (A4, print-ready)",
        "One-page enforcement with adaptive density control",
      ],
      challenge:
        "The main challenge was ensuring resumes always fit exactly one A4 page without looking too empty for small inputs or overflowing for larger inputs.",
      solution: "Implemented a density-aware layout engine that:",
      solutionBullets: [
        "Analyzes content size (experience, bullets, skills)",
        "Dynamically adjusts font size, spacing, and section gaps",
        "Balances visual density to maintain a full-page layout",
      ],
      outcome: [
        "Consistent one-page resume generation",
        "Professional recruiter-ready formatting",
        "Works across varying user input sizes",
        "Stable PDF rendering in serverless environment",
      ],
    },
  },
  {
    slug: "cliniqora",
    title: "Cliniqora",
    description:
      "A full-stack clinic appointment management system with role-based access control and administrative analytics.",
    image: "/projects/cliniqora/homepage.png",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Supabase Auth", "Tailwind"],
    liveUrl: "https://cliniqora.vercel.app",
    githubUrl: "https://github.com/rusperres/cliniqora",
    featured: true,
    details: {
      features: [
        "Patient booking flow with doctor/service selection",
        "Staff schedule management and workload tracking",
        "Admin dashboard with operational analytics and KPIs",
        "Server-side role-based access control (RBAC)",
        "Service-layer architecture for isolated business logic",
      ],
      challenge:
        "Building a multi-role system where data consistency and security must be strictly enforced across distinct Patient, Staff, and Administrative workflows.",
      solution:
        "Implemented a scalable service-layer pattern to centralize business logic, coupled with robust server-side guards and role-based route segmentation.",
      solutionBullets: [
        "Hybrid auth system syncing Supabase identities with Prisma domain data",
        "Thin API route handlers delegating complex logic to dedicated services",
        "Strict backend filtering ensuring users only access authorized data",
      ],
      outcome: [
        "Production-grade clinic management simulation",
        "Secure and scalable full-stack architecture",
        "Seamless multi-role user experience",
        "Real-world data conflict prevention for bookings",
      ],
    },
  },
]