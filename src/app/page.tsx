import Particles from "@/app/components/particles";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="h-screen w-full flex flex-col justify-center gap-y-10 items-center">
        <nav className="flex gap-x-10 z-10">
          <Link
            href={"/projects"}
            className="font-semibold tracking-tighter text-2xl"
          >
            projects
          </Link>
          <Link
            href={"/resume"}
            className="font-semibold tracking-tighter text-2xl"
          >
            resume
          </Link>
          <Link
            href={"/contact"}
            className="font-semibold tracking-tighter text-2xl"
          >
            contact
          </Link>
          <Link
            href={"/about"}
            className="font-semibold tracking-tighter text-2xl"
          >
            about
          </Link>
          <Link
            href={"/guestbook"}
            className="font-semibold tracking-tighter text-2xl"
          >
            guestbook
          </Link>
        </nav>
        <h1 className="font-bold tracking-tighter text-7xl py-8">
          :insertcoolnamehere:
        </h1>
        <p className="font-medium tracking-tighter text-gray-400 text-2xl">
          Hey, I&apos;m Taha 👋, I build software.
        </p>
      </main>
    </>
  );
}
