import Layout from "@/app/components/layout";
import { Card } from "@/app/components/card";
import { GithubButton, LogOut } from "@/app/guestbook/clientButtons";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Metadata } from "next";
import { getMessages, submitSignature } from "@/app/guestbook/serverFunctions";

export const metadata: Metadata = {
  title: "Guestbook | Muhammad Taha",
  description: "Sign my guestbook and leave your mark.",
};

export default async function page() {
  let messages = [];
  messages = await getMessages();
  let session;
  const sessionRes = await getServerSession(authOptions);
  if (sessionRes) {
    session = sessionRes;
  }

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
      {session?.user ? (
        <form className="pb-4" action={submitSignature}>
          <input
            className="border-b-2 border-gray-500 p-2 bg-transparent focus:outline-none focus:border-gray-700"
            type={"text"}
            name={"message"}
            required={true}
          />
          <button className="ml-3" type={"submit"}>
            <Card>
              <div className="p-2 px-4">Sign</div>
            </Card>
          </button>
          <LogOut />
        </form>
      ) : (
        <GithubButton />
      )}
      <ul className="pb-6">
        {messages.map((message: any) => (
          <li key={message.id} className="font-normal tracking-tight pb-2">
            <span className="font-semibold">
              {message.user.name || "Anonymous"}
              {": "} &nbsp;
            </span>
            <span>{message.sign}</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
