"use client"

import { useState } from "react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"
import { InlineWidget } from "react-calendly"


type Errors = {
  name?: string
  email?: string
  message?: string
}

const SimpleGithubIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const SimpleLinkedinIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [success, setSuccess] = useState(false)

  function validate(data: {
    name: string
    email: string
    message: string
  }) {
    const newErrors: Errors = {}

    if (!data.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Invalid email address"
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required"
    }

    return newErrors
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSuccess(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    }

    const validationErrors = validate(data)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      setLoading(false)

      if (res.ok) {
        setSuccess(true)
        form.reset()
      } else {
        setErrors({
          message: "Failed to send message. Please try again.",
        })
      }
    } catch {
      setLoading(false)
      setErrors({
        message: "Something went wrong. Please try again.",
      })
    }
  }

  const [showCalendly, setShowCalendly] = useState(false)

  return (
    <main className="min-h-[85vh] flex items-center py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-5">
            
            {/* Contact Info (Left Side) */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Get in touch
              </h1>
              <p className="mt-4 text-muted-foreground">
                I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted border border-border">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground"> Email </p>
                    <a href="mailto:jairusjaspervc@gmail.com" className="text-sm font-medium hover:text-blue-500 transition-colors">
                      jairusjaspervc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted border border-border">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground"> Meeting </p>
                    <button 
                      onClick={() => setShowCalendly(!showCalendly)}
                      className="text-sm font-medium hover:text-blue-500 transition-colors text-left"
                    >
                      {showCalendly ? "Close scheduler" : "Book a 30-min call"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                {[
                  { icon: SimpleGithubIcon, href: "https://github.com/rusperres", name: "GitHub" },
                  { icon: SimpleLinkedinIcon, href: "https://www.linkedin.com/in/jairus-jasper-colindres-0a1a4024a/", name: "LinkedIn" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form (Right Side) */}
            <Card className="lg:col-span-3 border-border bg-card/50 backdrop-blur-sm shadow-xl">
              <CardHeader className="pb-2">
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {success && (
                    <div className="rounded-md border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-600 dark:text-green-400">
                      Message sent successfully! I'll be in touch soon.
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Name
                      </label>
                      <Input name="name" placeholder="John Doe" className="bg-muted/30" />
                      {errors.name && (
                        <p className="text-xs text-red-500 font-medium">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-muted/30"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      name="message"
                      className="flex min-h-[120px] w-full rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                      placeholder="How can I help you?"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 font-medium">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 text-sm font-semibold"
                    disabled={loading}
                  >
                    {loading ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>

          {/* Calendly Inline Widget (Conditional) */}
          {showCalendly && (
            <div className="mt-12 animate-in fade-in slide-in-from-top-4 duration-500">
              <Card>
                <CardHeader>
                  <CardTitle>Schedule a Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <InlineWidget
                    url="https://calendly.com/jairusjaspervc/30min"
                    styles={{ height: "600px" }}
                  />
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </Container>
    </main>
  )
}