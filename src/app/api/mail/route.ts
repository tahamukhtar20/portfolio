import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();
  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });
    const mailData = {
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: `Message from ${req.name} [${req.email}] - Portfolio`,
      text: req.message + " | Sent from: " + req.email,
      html: `<div>${req.message}</div><p>Sent from:
        ${req.email}</p>`,
    };
    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) throw new Error(err);
    });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse(JSON.stringify({ error: "An error occurred" }), {
      headers: { "content-type": "application/json" },
      status: 500,
    });
  }
  return new NextResponse(JSON.stringify({ message: "Email sent" }), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}
