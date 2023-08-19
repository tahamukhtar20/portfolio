import Layout from "@/app/components/layout";
import { EmailLink, LinkedInLink } from "@/app/components/Links";
import { Card } from "@/app/components/card";
import { Metadata } from "next";
import { ContactForm } from "@/app/components/contactForm";

export const metadata: Metadata = {
  title: "Contact | Muhammad Taha",
  description: "Contact me through the links below or fill the form below.",
};

export default async function page() {
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
        <ContactForm />
      </div>
    </Layout>
  );
}
