import Link from "next/link";

const navLinks = [
  { href: "/projects", text: "projects" },
  { href: "/resume", text: "resume" },
  { href: "/contact", text: "contact" },
  { href: "/guestbook", text: "guestbook" },
];

export default function Home() {
  return (
    <main className="container h-screen w-full flex flex-col justify-center gap-y-10 items-center">
      <nav className="grid sm:grid-cols-4 gap-4 grid-cols-2 md:gap-10 z-10 mx-auto">
        {navLinks.map((link, index) => (
          <Link href={link.href} key={index}>
            <p className="font-semibold tracking-tighter text-xl md:text-2xl">
              {link.text}
            </p>
          </Link>
        ))}
      </nav>
      <h1 className="font-serif tracking-tighter text-4xl md:text-5xl lg:text-6xl xl:text-8xl py-8 mx-auto">
        Muhammad Taha
      </h1>
      <p className="font-medium tracking-tighter text-gray-400 text-lg sm:text-xl md:text-2xl mx-auto">
        Hey, I&apos;m Taha 👋, I build software.
      </p>
    </main>
  );
}
