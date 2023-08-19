import Layout from "@/app/components/layout";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Metadata } from "next";
import { GuestbookForm } from "@/app/components/guestbookForm";
import { GithubButton } from "@/app/components/clientButtons";
import { Messages } from "@/app/components/messages";

export const metadata: Metadata = {
  title: "Guestbook | Muhammad Taha",
  description: "Sign my guestbook and leave your mark.",
};

export default async function page() {
  const session = await getServerSession(authOptions);
  return (
    <Layout title={"Guestbook"}>
      <div className="pb-6">
        <article className="flex flex-col justify-center items-center ">
          <div className="w-full h-full bg-gray-800 rounded">
            <h2 className="text-sm text-gray-100 p-4 leading-loose w-full">
              This is a guestbook, you can leave your mark here, letting others
              know you were here. Sign in with Github to leave a comment.
            </h2>
          </div>
        </article>
      </div>
      {session?.user ? <GuestbookForm /> : <GithubButton />}
      <Messages />
    </Layout>
  );
}
