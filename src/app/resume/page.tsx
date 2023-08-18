import Layout from "@/app/components/layout";
import Link from "next/link";
import {
  DynamicNoLink,
  EmailLink,
  GitHubLink,
  LinkedInLink,
} from "@/app/components/Links";

export default function Resume() {
  const skillsFrontEndWeb = [
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Material UI",
    "Ant Design",
    "Daisy UI",
    "Bootstrap",
    "React Query",
    "Redux",
    "Redux Thunk",
    "Redux Saga",
    "React Router",
  ];
  const skillsBackEndWeb = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "MySQL",
    "PostgreSQL",
    "Prisma",
    "Nest.js",
    "Flask",
    "Django",
    "tRPC",
    "REST",
  ];
  const skillsProgramming = [
    "Python",
    "JavaScript",
    "TypeScript",
    "C++",
    "Go",
    "Bash",
    "Java",
    "Rust",
  ];
  const skillsMobile = ["React Native", "Kotlin"];
  const skillsDatabases = ["MongoDB", "MySQL", "PostgreSQL", "Redis", "SQLite"];
  const skillsSaas = [
    "Firebase",
    "AWS",
    "GCP",
    "Vercel",
    "Netlify",
    "PocketBase",
  ];
  const skillsDataScience = [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-Learn",
    "TensorFlow",
    "Keras",
    "Neural Networks",
    "Machine Learning",
  ];
  const skillsMisc = [
    "Git",
    "GitHub",
    "GitLab",
    "Docker",
    "Linux",
    "Regular Expressions",
    "CI/CD",
    "Github Actions",
    "Jest",
  ];

  return (
    <Layout title={"Resume"}>
      <div>
        <h1 className={"text-3xl uppercase font-bold text-gray-600 pb-4"}>
          Muhammad <span className={"text-white"}>Taha</span>
        </h1>
        <ul className={"text-gray-700 grid grid-cols-1 gap-2"}>
          <li className={"uppercase font-bold text-white"}>
            <LinkedInLink />
          </li>
          <li className={"uppercase font-bold text-white"}>
            <GitHubLink />
          </li>
          <li className={"uppercase font-bold text-white"}>
            <EmailLink />
          </li>
        </ul>
      </div>
      <h2 className="my-5 font-semibold tracking-tighter text-gray-200 text-2xl">
        Work Experience
      </h2>
      <ol className="relative border-l border-gray-600">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-200">
            June 2023 - Present
          </time>
          <h3 className="text-lg font-semibold text-gray-300">
            Software Engineering Intern{" "}
            <span className="text-sm text-gray-500">@OneScreen</span>
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500">
            Worked with the Research and Development team to develop new
            software applications/tools for the company.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-200">
            April 2022 - Present
          </time>
          <h3 className="text-lg font-semibold text-gray-300">
            Freelance Web Developer{" "}
            <span className="text-sm text-gray-500">@Fiverr</span>
          </h3>
          <p className="text-base font-normal text-gray-500">
            Worked with clients to develop websites and web applications. Worked
            on a variety of projects including e-commerce, blogs, and personal
            websites in Various technologies.
          </p>
        </li>
      </ol>
      <h2 className="my-5 font-semibold tracking-tighter text-gray-200 text-2xl">
        Education
      </h2>
      <ol className="relative border-l border-gray-600">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-200">
            November 2021 - Present
          </time>
          <h3 className="text-lg font-semibold text-gray-300">
            BS. Computer Science{" "}
            <span className="text-sm text-gray-500">
              @National University of Sciences and Technology, Islamabad
            </span>
          </h3>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-200">
            June 2019 - July 2021
          </time>
          <h3 className="text-lg font-semibold text-gray-300">
            FSc. Pre-Engineering{" "}
            <span className="text-sm text-gray-500">
              @Army Public College, Gujranwala Cantt
            </span>
          </h3>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-200">
            Before June 2019
          </time>
          <h3 className="text-lg font-semibold text-gray-300">
            Matriculation{" "}
            <span className="text-sm text-gray-500">
              @Garrison Academy, Gujranwala Cantt
            </span>
          </h3>
        </li>
      </ol>
      <h2 className="my-5 font-semibold tracking-tighter text-gray-200 text-2xl">
        Skills
      </h2>
      <ul className="list-disc ml-4">
        <li className="">
          <h4 className=" font-normal text-gray-400 tracking-tighter text-xl">
            Frontend Web Development
          </h4>
          <ul className="py-4 flex flex-wrap gap-0.5">
            {skillsFrontEndWeb.map((skill, index) => (
              <li className="text-gray-300 inline space-y-2" key={index}>
                <DynamicNoLink text={skill} />
              </li>
            ))}
          </ul>
        </li>
        <li className="">
          <h4 className=" font-normal text-gray-400 tracking-tighter text-xl">
            Mobile App Development
          </h4>
          <ul className="py-4 flex flex-wrap gap-0.5">
            {skillsMobile.map((skill, index) => (
              <li className="text-gray-300 inline space-y-2" key={index}>
                <DynamicNoLink text={skill} />
              </li>
            ))}
          </ul>
        </li>
        <li className="">
          <h4 className=" font-normal text-gray-400 tracking-tighter text-xl">
            Backend Development
          </h4>
          <ul className="py-4 flex flex-wrap gap-0.5">
            {skillsBackEndWeb.map((skill, index) => (
              <li className="text-gray-300 inline space-y-2" key={index}>
                <DynamicNoLink text={skill} />
              </li>
            ))}
          </ul>
        </li>

        <li className="">
          <h4 className=" font-normal text-gray-400 tracking-tighter text-xl">
            Databases
          </h4>
          <ul className="py-4 flex flex-wrap gap-0.5">
            {skillsDatabases.map((skill, index) => (
              <li className="text-gray-300 inline space-y-2" key={index}>
                <DynamicNoLink text={skill} />
              </li>
            ))}
          </ul>
        </li>
        <li className="">
          <h4 className=" font-normal text-gray-400 tracking-tighter text-xl">
            Saas
          </h4>
          <ul className="py-4 flex flex-wrap gap-0.5">
            {skillsSaas.map((skill, index) => (
              <li className="text-gray-300 inline space-y-2" key={index}>
                <DynamicNoLink text={skill} />
              </li>
            ))}
          </ul>
        </li>
        <li className="">
          <h4 className=" font-normal text-gray-400 tracking-tighter text-xl">
            Programming Languages
          </h4>
          <ul className="py-4 flex flex-wrap gap-0.5">
            {skillsProgramming.map((skill, index) => (
              <li className="text-gray-300 inline space-y-2" key={index}>
                <DynamicNoLink text={skill} />
              </li>
            ))}
          </ul>
        </li>
        <li className="">
          <h4 className=" font-normal text-gray-400 tracking-tighter text-xl">
            Data Science
          </h4>
          <ul className="py-4 flex flex-wrap gap-0.5">
            {skillsDataScience.map((skill, index) => (
              <li className="text-gray-300 inline space-y-2" key={index}>
                <DynamicNoLink text={skill} />
              </li>
            ))}
          </ul>
        </li>
        <li className="">
          <h4 className=" font-normal text-gray-400 tracking-tighter text-xl">
            Miscellaneous
          </h4>
          <ul className="py-4 flex flex-wrap gap-0.5">
            {skillsMisc.map((skill, index) => (
              <li className="text-gray-300 inline space-y-2" key={index}>
                <DynamicNoLink text={skill} />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </Layout>
  );
}