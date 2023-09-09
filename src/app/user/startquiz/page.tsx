import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-gray-700 vsc-initialized dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Welcome to 
          <br/>The Office Quiz
          </h1>
          <a
            href="/user/quiz"
            className="inline-flex items-center  px-5 py-3 text-lg font-bold text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Take Quiz
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/startquiz.png" alt="image" />
        </div>
      </div>
    </section>
  );
}
