import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../../public/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-white white:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">Showwand</span>
              <Image
                src={logo}
                className="h-8 w-auto rounded-md bg-slate-950 px-0.3 py-0.1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                alt="Logo - Of Showwand"
                width={100}
                height={100}
              />
              <span className="text-xl mx-2 font-bold tracking-tight text-gray-900 sm:text-3xl">
                Showwand
              </span>
            </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Showwand™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaFacebook />
                <span className="sr-only">Facebook page</span>
              </Link>

              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaTwitter />
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub />
                <span className="sr-only">GitHub account</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
