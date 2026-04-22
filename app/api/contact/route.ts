import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "your-email@example.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}