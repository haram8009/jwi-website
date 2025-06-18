// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // 1. Nodemailer로 SMTP 메일 전송 (Gmail, Office365 등 사용 가능)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"JW Worldwide" <${process.env.EMAIL_USER}>`,
    to: "it.system@jamesworldwide.com", // 실제 수신 이메일
    subject: `[Contact] ${name}`,
    html: `
      <h2>Contact Inquiry</h2>
      this is a contact form submission from your website.<br>
      <p>Here are the details:</p>
      <b>Name:</b> ${name}<br>
      <b>Email:</b> ${email}<br>
      <b>Message:</b><br>
      <pre>${message}</pre>
    `,
  });

  return NextResponse.json({ ok: true });
}
