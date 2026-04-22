import { Container } from "@/components/layout/Container"

export default function AboutPage() {
  return (
    <main className="py-24">
      <Container>

        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight">
            About Me
          </h1>
                <p className="mt-6 text-muted-foreground">
                I’m currently a Computer Science student at Cebu Institute of Technology building
                real-world web applications and freelance projects.
                </p>

                <p className="mt-4 text-muted-foreground">
                I focus on developing modern web systems using Next.js, TypeScript, and
                Tailwind CSS, with an emphasis on performance, usability, and scalable
                architecture.
                </p>

                <p className="mt-4 text-muted-foreground">
                I enjoy building SaaS applications and business systems such as dashboards,
                CMS platforms, and automation tools that solve real operational problems.
                </p>

                <p className="mt-4 text-muted-foreground">
                I’ve worked on a SaaS AI resume builder, focusing on modern UI design
                and user experience for generating and managing resumes.
                </p>

                <p className="mt-4 text-muted-foreground">
                My goal is to help businesses turn ideas into fast, reliable, and practical
                web systems.
                </p>
        </div>

      </Container>
    </main>
  )
}