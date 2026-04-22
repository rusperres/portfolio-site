import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    console.log("Incoming:", { name, email, message })

    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "jairusjaspervc@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    })

    console.log("Resend result:", result)

    return Response.json({ success: true, result })
  } catch (error) {
    console.error("EMAIL ERROR:", error)

    return Response.json(
      { success: false, error: String(error) },
      { status: 500 }
    )
  }
}