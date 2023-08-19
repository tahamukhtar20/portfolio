import Link from "next/link";
import Image from "next/image";
import { Card } from "@/app/components/card";
import Layout from "@/app/components/layout";
import { LinkedInLink } from "@/app/components/Links";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Muhammad Taha",
  description: "Here are some of my projects.",
};

export default function Projects() {
  const cardsData = [
    {
      title: "Creadhesif-SAS",
      content:
        "A professional freelance project made with NextJS, Firebase and Tailwind CSS. It's a website for a company that sells iron curtains in France.",
      image: "/images/creadhesif-sas.png",
      link: "https://www.creadhesif-sas.fr",
    },
    {
      title: "Portfolio",
      content:
        "This website, made with NextJS, NextAuth, PlanetScale, Prisma, SWR and TailwindCSS. It's a website that showcases my projects and my resume.",
      link: "https://tahamukhtar20.vercel.app",
      image: "/images/portfolio.png",
    },

    {
      title: "Diljo",
      content:
        "A personal project made in collaboration with a few other developers, made with NextJS, Tailwind CSS and PocketBase. The website isn't live anymore unfortunately.",
      image: "/images/diljo.png",
      link: "https://github.com/Dil-jo/diljo",
    },
    {
      title: "Jacokin",
      content:
        "Another Freelance Project, made with NextJS, Redux, JWT, NestJS and SCSS. It was a website for a company that exports cars, unfortunately I am not allowed to share the details of the website, as its not live yet.",
    },
    {
      title: "React Application",
      content:
        "A professional project made for the company I work for, I was responsible for the front end for the application, made with React, Redux and Tailwind CSS, unfortunately I am not allowed to share the details of the website, forbidden by the company.",
    },
    {
      title: "88xiwfTl9kAcPccoELmUUQ-",
      link: "https://github.com/C-no-Sekai/88xiwfTl9kAcPccoELmUUQ-",
      content:
        "A personal project made in collaboration with another developer, it was a Banking Management System made with QT Framework, C++ and SQLite. It was a complete banking management solution utilizing a client-server architecture, a full fledged loaning system, encryption etc, even though now the project doesn't seem very significant, we made it in the 2nd Semester and I am still really proud of it.",
    },
    {
      title: "NUST Student Support Website",
      content:
        "Wasn't made from scratch, but I and the original creator of the project collaborated to revamp the website. It was made with HTML, CSS, JS and Bootstrap for the frontend, and in the backend used FAST API SQLite and Machine Learning Models for making Grade Predictions. Website is live but doesn't work anymore, as the backend is not hosted anymore.",
      link: "https://c-no-sekai.github.io/",
      image: "/images/nustsupport.png",
    },
    {
      title: "Hotel Management System",
      content:
        "Made with Flask, HTML, CSS, JS and Bootstrap, it was a project for my Database Systems Course, it was a complete Hotel Management System.",
    },
  ];
  return (
    <Layout title={"Projects"}>
      <div className="pb-6">
        <article className="flex flex-col justify-center items-center ">
          <div className="w-full h-full bg-gray-800 rounded">
            <h2 className="text-sm text-gray-100 p-4 leading-loose w-full">
              These are some of the projects I&apos;ve worked on, both personal
              and professional. I&apos;m always looking for new projects to work
              on, so if you wanna collaborate, feel free to contact me through
              my &nbsp;
              <LinkedInLink />
              &nbsp; profile.
            </h2>
          </div>
        </article>
      </div>
      <div className="sm:grid-cols-2 grid gap-6 grid-cols-1">
        {cardsData.map((cardData) => (
          <CardComponent
            key={cardData.title}
            title={cardData.title}
            content={cardData.content}
            image={cardData.image}
            link={cardData.link}
          />
        ))}
      </div>
      <div className="mt-6">
        <CardComponent
          title={
            "And many more, you can check out my Github profile if you're interested."
          }
          link={"https://github.com/tahamukhtar20"}
        />
      </div>
    </Layout>
  );
}

function CardComponent({
  title,
  link,
  content,
  image,
}: {
  title: string;
  link?: string;
  content?: string;
  image?: string;
}) {
  return (
    <Card>
      <div className="w-full p-6 h-auto">
        <h2 className="text-md prose text-gray-100 leading-loose w-full justify-between flex">
          <span className="font-light tracking-tighter">{title}</span>
          {link && (
            <span className="self-center">
              <Link href={link} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </span>
          )}
        </h2>
        {image && (
          <div className="flex justify-center items-center py-3">
            <Image
              alt={title}
              src={image}
              width={500}
              height={300}
              className="bg-blend-darken"
            />
          </div>
        )}
        <article className="text-sm font-light text-gray-500">
          {content}
        </article>
      </div>
    </Card>
  );
}
