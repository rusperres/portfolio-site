"use client"

import { useState } from "react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, Phone, MapPin, Calendar, Globe } from "lucide-react"
import { InlineWidget } from "react-calendly"


type Errors = {
  name?: string
  email?: string
  message?: string
}

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
                  { icon: Globe, href: "#", name: "GitHub" },
                  { icon: Globe, href: "#", name: "Twitter" },
                  { icon: Globe, href: "#", name: "LinkedIn" },
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