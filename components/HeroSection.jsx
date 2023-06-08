import Link from "next/link";
import { FaChrome, FaEdge } from "react-icons/fa";
import dynamic from "next/dynamic";
const BrowserDetection = dynamic(() => import("./BrowserDetection"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl py-8 sm:py-32 md:py-36 lg:py-44">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="text-4xl font-bold tracking-tight text-gray-900 sm:text-8xl">
                Showwand
              </span>{" "}
              <br />
              Unleash Your Thread Wizardry
            </h1>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl leading-8 text-gray-600">
              Your Companion for Effortless Posting and Thread Management
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* Detect the browser and Show the download button  */}
              <BrowserDetection />
              <Link
                href="/docs"
                className="rounded-md px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-black shadow-sm hover:bg-slate-950 hover:text-white hover:border-solid border-2 border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Instruction <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="mx-auto max-w-2xl py-5 sm:py-7 lg:py-10">
              <div className="sm:mb-5 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Available for all Chromium browsers{" "}
                  <Link
                    href="/docs"
                    aria-label="Download for Chrome"
                    alt="Chrome"
                  >
                    <FaChrome className="inline" />{" "}
                  </Link>
                  <Link href="/docs#edge" alt="Edge"
                  aria-label="Download for Edge"
                  >
                    <FaEdge className="inline" />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
