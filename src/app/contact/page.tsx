import Layout from "@/app/components/layout";
import { EmailLink, LinkedInLink } from "@/app/components/Links";
import nodemailer from "nodemailer";
import { Card } from "@/app/components/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Muhammad Taha",
  description: "Contact me through the links below or fill the form below.",
};

export default async function page() {
  async function email(req: any) {
    "use server";
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
      if (err) console.log(err);
      else console.log(info);
    });
  }

  return (
    <Layout title={"contact"}>
      <div className="pb-6">
        <article className="flex flex-col justify-center items-center ">
          <div className="w-full h-full bg-gray-800 rounded">
            <h2 className="text-sm text-gray-100 p-4 leading-loose w-full">
              You can contact me through the links below or you can fill the
              form below to send me a message directly.
            </h2>
          </div>
        </article>
        <div className="flex flex-row justify-start items-center gap-2 mt-4">
          <LinkedInLink />

          <EmailLink />
        </div>
        <form className="mt-5" action={email}>
          <div className="flex flex-col justify-center w-full gap-4 font-normal tracking-tighter">
            <div className="flex flex-col justify-center items-center gap-2">
              <label className="text-gray-100 text-sm text-start w-full">
                Name
              </label>
              <input
                className="bg-gray-800 rounded w-full p-2"
                type="text"
                name="name"
                required={true}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <label className="text-gray-100 text-sm text-start w-full">
                Email
              </label>
              <input
                className="bg-gray-800 rounded text-start w-full p-2"
                type="email"
                name="email"
                required={true}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <label className="text-gray-100 text-sm text-start w-full">
                Message
              </label>
              <textarea
                className="bg-gray-800 rounded text-start min-h-[12rem] w-full p-2"
                name="message"
                required={true}
              />
            </div>
            <div className="flex flex-col items-end">
              <Card>
                <button className="text-start p-2 px-5" type="submit">
                  Send
                </button>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
