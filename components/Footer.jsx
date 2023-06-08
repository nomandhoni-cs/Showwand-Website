import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../public/logo.png";
const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/nomandhoni.fan",
    icon: FaFacebook,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/nomandhoni",
    icon: FaTwitter,
  },
  {
    name: "Github",
    href: "https://github.com/nomandhoni-cs",
    icon: FaGithub,
  },
];
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
                <h2 className="mb-6 text-sm font-bold text-slate-950 uppercase">
                  Resources
                </h2>
                <ul className="text-gray-800 font-medium">
                  <li className="mb-4">
                    <Link href="/" target={`_blank`} className="hover:underline">
                      Showwand
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/nomandhoni-cs/Showwand"
                      target={`_blank`}
                      className="hover:underline"
                    >
                      Contribute
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-slate-950 uppercase">
                  Follow us
                </h2>
                <ul className="text-gray-800 font-medium">
                  <li className="mb-4">
                    <Link
                      href="https://github.com/nomandhoni-cs/Showwand"
                      target={`_blank`}
                      className="hover:underline "
                    >
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://discord.gg/4eeurUVvTy"
                      target={`_blank`}
                      className="hover:underline"
                    >
                      Discord
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-slate-950 uppercase">
                  Legal
                </h2>
                <ul className="text-gray-800 font-medium">
                  <li className="mb-4">
                    <Link href="/privacy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-900 sm:text-center">
              © 2023{" "}
              <Link href="/" className="hover:underline">
                Showwand™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              {socialLinks.map((socialLink) => (
                <Link
                  href={socialLink.href}
                  className=" text-gray-800 hover:text-slate-950"
                  target={"_blank"}
                  key={socialLink.name}
                >
                  <socialLink.icon />
                  <span className="sr-only">{socialLink.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
