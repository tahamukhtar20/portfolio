import Link from "next/link";

export default function Layout(x: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex p-4 justify-center min-h-screen w-full z-10">
      <section className=" h-full max-w-[48rem] flex">
        <div className="w-full h-full border-gray-500 border rounded-xl ">
          <Header title={x.title} />
          <div className="p-6">{x.children}</div>
        </div>
      </section>
    </main>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div className="flex justify-between flex-row">
      <div className="w-14 h-14 border-gray-500 border-r border-b rounded-br flex justify-center items-center">
        <Link href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48px"
            height="48px"
            fill="none"
          >
            <path
              d="M6 12H18M6 12L11 7M6 12L11 17"
              className={"stroke-gray-500"}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      <div className="w-full flex justify-end items-center p-3 pr-8">
        <h1 className="uppercase font-semibold tracking-tighter text-gray-500">
          {title}
        </h1>
      </div>
    </div>
  );
}
