import { contactFormSchema } from "@/app/utils/zodSchemas";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    // 1. HONEYPOT CHECK
    // Use .trim() to catch bots sending whitespace
    if (body.fax_number && body.fax_number.trim().length > 0) {
      // Return the EXACT same message as a real success
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    }

    // 2. ZOD VALIDATION
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Validation Failed",
          details: validation.error.issues.map((issue) => ({
            field: issue.path[0],
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    // 3. SEND EMAIL
    const { full_name, email, message, company, country, phone } =
      validation.data;

    const { data, error } = await resend.emails.send({
      from: "Arecoid System <system@arecoid.in>",
      to: "sales@arecoid.in",
      reply_to: email,
      subject: `New Inquiry: ${full_name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #4A7c44;">New Website Inquiry</h2>
          <hr />
          <p><strong>Name:</strong> ${full_name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #4A7c44;">
            ${message}
          </blockquote>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    // Log the actual error for you, but send a clean message to the user
    console.error("API Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
