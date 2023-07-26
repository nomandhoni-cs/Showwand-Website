import Image from "next/image";
import Link from "next/link";
import { BsBrowserChrome, BsBrowserEdge } from "react-icons/bs";
import { FaCheckCircle, FaChrome, FaEdge } from "react-icons/fa";

export const metadata = {
  title: "Documentation - Showwand",
  description:
    "Documentation for Showwand, a browser extension that helps you manage your Showwcase threads and posts and many more.",
  keywords: "Showwand, Showwand Documentation, Showwand Guide, Showwand Docs",
};
const stepsForEdge = [
  {
    title: "Download the Extension",
    description:
      "Visit the above link download officially from Microsoft Edge Addons.",
  },
  {
    title: "Enter the necessary credentials",
    description:
      "Enter your Showwcase API key and your Showwcase username to use full potential.",
  },
  {
    title: "Enjoy the Extension",
    description:
      "The Showwand extension is now installed in Edge. You can start using it to enhance your Showwcase experience.",
  },
];

const stepsForChrome = [
  {
    title: "Download the Extension",
    description:
      "Visit the GitHub repository and download the latest version of the Showwand extension ZIP file.",
  },
  {
    title: "Extract the ZIP file",
    description:
      "Extract the contents of the ZIP file to a convenient location on your computer.",
  },
  {
    title: "Open Google Chrome Extensions",
    description:
      "Open Google Chrome and navigate to the Extensions page by entering chrome://extensions in the address bar.",
  },
  {
    title: "Enable Developer Mode",
    description:
      "Enable Developer Mode by toggling the switch located in the top-right corner of the Extensions page.",
  },
  {
    title: "Load the Extension",
    description:
      "Click on the Load unpacked button and select the folder where you extracted the ZIP file contents.",
  },
  {
    title: "Enjoy the Extension",
    description:
      "The Showwand extension is now installed in Chrome. You can start using it to enhance your Showwcase experience.",
  },
];
const DocsPage = () => {
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Installation Guide</h1>
        <div className="mb-10">
          <h1 className="text-xl font-semibold">
            Chrome <FaChrome className="inline" />
          </h1>
          <div className="chrome-download-link my-10">
          <Link
              href="https://github.com/nomandhoni-cs/Showwand/releases"
              className="rounded-md bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black hover:border-solid border-2 border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              target={`_blank`}
              >
              Download Showwand for Chrome from Github
              <span aria-hidden="true" className="inline-block ms-2">
                <BsBrowserChrome />
              </span>
            </Link>
              </div>
          <ul className="space-y-4 list-none pl-0">
            {stepsForChrome.map((step, index) => (
              <li className="flex items-start space-x-4" key={index}>
                <div className="flex-shrink-0">
                  <FaCheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-2">
            Edge <FaEdge className="inline" />
          </h1>
          <Image
            className="rounded-lg mb-10"
            src="https://project-assets.showwcase.com/57949/1686156756381-Showwand%2520(7).webp"
            width={640}
            height={360}
            alt="Showwand Edge Installation"
          />
          <div className="edge-download-link mb-10">
            <Link
              href="https://microsoftedge.microsoft.com/addons/detail/showwand/kihfagbcdciegpafpalbhkfmedpefamb"
              className="rounded-md bg-slate-950 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black hover:border-solid border-2 border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              target={`_blank`}
            >
              Add Showwand to Edge
              <span aria-hidden="true" className="inline-block ms-2">
                <BsBrowserEdge />
              </span>
            </Link>
          </div>
          <ul className="space-y-4 list-none pl-0">
            {stepsForEdge.map((step, index) => (
              <li className="flex items-start space-x-4" key={index}>
                <div className="flex-shrink-0">
                  <FaCheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DocsPage;
