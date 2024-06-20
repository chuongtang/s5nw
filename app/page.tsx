import Image from "next/image";
import { FlippingWords } from "@/components/ui/FlipWords";
import Logo from "@/components/Logo";

export default function Home() {


  return (

    <section className="relative bg-white">
      <video autoPlay muted loop className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-55 sm:opacity-100">
        <source src={"https://chuongtang.github.io/sourceStore/GenSources/BG.webm"} type={"video/webm"} />
      </video>

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome you to
            <strong className="font-extrabold text-rose-700 sm:block">
              AceView.
            </strong>
          </h1>

          <div className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            An online platform to practice your virtual interview. Connect to a community of supportive
            <FlippingWords words={["Candidates", "Recruiters", "Trainers"]} duration={2500} className={"text-xl font-semibold text-rose-800"} />
          </div>

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <a className={`block px-6 py-3 rounded-full text-rose-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-gray-900`} href="/learnmore">
              Learn More
            </a>

            <a className={`block px-6 py-3 rounded-full text-rose-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-gray-900`} href="/signin">
              Get started
              <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" /><path d="m7.5 11.5 3-3-3.068-3" /></g></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
