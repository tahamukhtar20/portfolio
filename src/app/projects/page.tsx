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
        "A professional freelance project made with Firebase and NextJS. It's a website for a company that sells iron curtains in France.",
      image: "/images/creadhesif-sas.png",
      link: "https://www.creadhesif-sas.fr",
    },
    {
      title: "Portfolio",
      content:
        "This website, made with NextJS and TailwindCSS. It's a website that showcases my projects and my resume.",
      image: "/images/portfolio.png",
    },
    {
      title: "Portfolio",
      content:
        "This website, made with NextJS and TailwindCSS. It's a website that showcases my projects and my resume.",
      image: "/images/portfolio.png",
    },
    {
      title: "Portfolio",
      content:
        "This website, made with NextJS and TailwindCSS. It's a website that showcases my projects and my resume.",
      image: "/images/portfolio.png",
    },
    {
      title: "Portfolio",
      content:
        "This website, made with NextJS and TailwindCSS. It's a website that showcases my projects and my resume.",
      image: "/images/portfolio.png",
    },
    {
      title: "Portfolio",
      content:
        "This website, made with NextJS and TailwindCSS. It's a website that showcases my projects and my resume.",
      image: "/images/portfolio.png",
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
  content: string;
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
