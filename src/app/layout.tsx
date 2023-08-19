import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Particles from "@/app/components/particles";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Taha",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " min-h-screen w-full flex justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 bg-no-repeat bg-center bg-cover bg-fixed relative text-white scroll-smooth"
        }
      >
        <NextTopLoader />
        <Particles className="fixed h-screen w-full overflow-hidden z-0" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
