"use server";
import nodemailer from "nodemailer";

export async function email(req: any) {
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
    subject: `Message from ${req.get("name")} [${req.get(
      "email"
    )}] - Portfolio`,
    text: req.get("message") + " | Sent from: " + req.get("email"),
    html: `<div>${req.get("message")}</div><p>Sent from:
        ${req.get("email")}</p>`,
  };
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) return new Response(JSON.stringify({ error: err }));
    else
      return new Response(JSON.stringify({ message: "Email sent" }), {
        headers: { "content-type": "application/json" },
      });
  });
}
