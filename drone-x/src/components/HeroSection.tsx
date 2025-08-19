import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import { Button } from "./ui/moving-border";

function HeroSection() {
  // Red-tinted spotlight gradients (override the blue defaults)
  const redSpotlight1 =
    "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 85%, 70%, .10) 0, hsla(0, 85%, 55%, .04) 50%, hsla(0, 85%, 45%, 0) 80%)";
  const redSpotlight2 =
    "radial-gradient(50% 50% at 50% 50%, hsla(0, 85%, 70%, .08) 0, hsla(0, 85%, 55%, .03) 80%, transparent 100%)";
  const redSpotlight3 =
    "radial-gradient(50% 50% at 50% 50%, hsla(0, 85%, 70%, .06) 0, hsla(0, 85%, 50%, .03) 80%, transparent 100%)";

  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-gradient-to-br from-rose-50 via-white to-rose-100">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          gradientFirst={redSpotlight1}
          gradientSecond={redSpotlight2}
          gradientThird={redSpotlight3}
        />

        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-rose-700 to-rose-500">
          Voice-first Digital Health Solutions for Chronic Care
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-slate-600 max-w-lg mx-auto">
          Empowering patients with secure, AI-powered mobile solutions that
          understand, guide, and support health — naturally.
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
  );
}

export default HeroSection;
