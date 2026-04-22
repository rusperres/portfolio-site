"use client"

import { useState } from "react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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

  return (
    <main className="py-24">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight">
            Contact
          </h1>

          <p className="mt-4 text-muted-foreground">
            Have a project in mind? Send a message and I’ll get back to you
            as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 max-w-xl space-y-4">

          {success && (
            <div className="rounded-md border border-green-500/30 bg-green-500/10 p-3 text-sm">
              Message sent successfully. I’ll get back to you soon.
            </div>
          )}

          <div>
            <label className="text-sm text-muted-foreground">
              Name
            </label>
            <Input name="name" placeholder="Your name" />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              Email
            </label>
            <Input
              name="email"
              type="email"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              className="w-full rounded-md border bg-background p-3 text-sm"
              rows={5}
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>

        </form>

        <div className="mt-10 text-sm text-muted-foreground">
          Or reach me directly via email:
          <span className="text-foreground">
            {" "}jairusjaspervc@gmail.com
          </span>
        </div>

      </Container>
    </main>
  )
}