import Link from "next/link";
import { HiDownload } from "react-icons/hi";
export default function HeroSection() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Showwand - Unleash Your Thread Wizardry
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your Companion for Effortless Posting and Thread Management
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="https://github.com/nomandhoni-cs/Showwand/releases"
                className="rounded-md bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black hover:border-solid border-2 border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                target="_blank"
              >
                  Download
                  <span aria-hidden="true" className="inline-block ms-2">
                    <HiDownload />
                  </span>
              </Link>
              <Link
                href="/docs"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-slate-950 hover:text-white hover:border-solid border-2 border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Documentation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
