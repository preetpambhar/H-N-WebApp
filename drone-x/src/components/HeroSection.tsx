import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-gradient-to-br from-black via-white to-blue-500 dark:from-black dark:via-slate-800 dark:to-blue-600">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Voice-first Digital Health Solutions for Chronic Care
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Empowering patients with secure, AI-powered mobile solutions that
          understand, guide, and support health — naturally.{" "}
        </p>
        <div className="mt-4">
          <Link href={"/blogs"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Get the App
            </Button>
          </Link>
        </div>
      </div>
    </div>

    // <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-gradient-to-br from-black via-white to-blue-500 dark:from-black dark:via-slate-800 dark:to-blue-600">
    //   <div className="p-4 relative z-10 w-full text-center">
    //     <Spotlight />
    //     <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
    //       Voice-first Digital Health Solutions for Chronic Care
    //     </h1>
    //     <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
    //       Empowering patients with secure, AI-powered mobile solutions that
    //       understand, guide, and support health — naturally.
    //     </p>
    //     <div className="mt-4">
    //       <Link href={"/blogs"}>
    //         <Button
    //           borderRadius="1.75rem"
    //           className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
    //         >
    //           Get the App
    //         </Button>
    //       </Link>
    //     </div>
    //   </div>

    //   {/* 👇 Fade to black at bottom */}
    //   <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10" />
    // </div>
  );
}

export default HeroSection;
