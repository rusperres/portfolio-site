export type Project = {
  slug: string
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
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
  },
]