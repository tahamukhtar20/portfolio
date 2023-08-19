import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const req = await request.json();
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL!,
        pass: process.env.NEXT_PUBLIC_PASSWORD!,
      },
    });

    const mailData = {
      from: process.env.NEXT_PUBLIC_EMAIL!,
      to: process.env.NEXT_PUBLIC_EMAIL!,
      subject: `Message from ${req.name} [${req.email}] - Portfolio`,
      text: `${req.message} | Sent from: ${req.email}`,
      html: `
        <div>${req.message}</div>
        <p>Sent from: ${req.email}</p>
      `,
    };
    try {
      const info = await transporter.sendMail(mailData);
      console.log("Email sent:", info.response);
      return new Response(JSON.stringify({ message: "Email sent" }), {
        headers: { "content-type": "application/json" },
        status: 200,
      });
    } catch (err) {
      console.error("Error sending email:", err);
      return new Response(
        JSON.stringify({ error: `An error occurred ${err}` }),
        {
          headers: { "content-type": "application/json" },
          status: 500,
        }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "An error occurred" }), {
      headers: { "content-type": "application/json" },
      status: 500,
    });
  }
}
