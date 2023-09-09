import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-gray-700 vsc-initialized dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Prove You're the Ultimate Dunder Mifflin Fan!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Welcome to "The Office Quiz," the ultimate destination for die-hard fans of the iconic TV show, "The Office." Are you a Scranton savant, a Dundie Award winner, and a master of all things Dunder Mifflin? Put your knowledge to the test and challenge your friends to see who knows the hilarious antics of Michael Scott, the pranks of Jim and Dwight, and the wisdom of Pam Beesly the best.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
               
              ></path>
            </svg>
          </a>
          <a
            href="/user/login"
            className="inline-flex items-center justify-center px-5 py-3 text-lg font-bold text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Take Quiz
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/pngegg.png" alt="image" />
        </div>
      </div>
    </section>
  );
}
