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
]