import { FaCheckCircle, FaChrome, FaEdge } from "react-icons/fa";

export const metadata = {
  title: "Documentation - Showwand",
  description:
    "Documentation for Showwand, a browser extension that helps you manage your Showwcase threads and posts and many more.",
  keywords: "Showwand, Showwand Documentation, Showwand Guide, Showwand Docs"
};

const DocsPage = () => {
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Installation Guide</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Chrome {"  "} <FaChrome className="inline" /></h2>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold">Download the Extension</p>
                <p className="text-gray-500">
                  Visit the GitHub repository and download the latest version of
                  the Showwand extension ZIP file.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold">Extract the ZIP file</p>
                <p className="text-gray-500">
                  Extract the contents of the ZIP file to a convenient location
                  on your computer.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold">Open Google Chrome Extensions</p>
                <p className="text-gray-500">
                  Open Google Chrome and navigate to the Extensions page by
                  entering <code>chrome://extensions</code> in the address bar.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold">Enable Developer Mode</p>
                <p className="text-gray-500">
                  Enable Developer Mode by toggling the switch located in the
                  top-right corner of the Extensions page.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold">Load the Extension</p>
                <p className="text-gray-500">
                  Click on the Load unpacked button and select the folder
                  where you extracted the ZIP file contents.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold">Enjoy the Extension</p>
                <p className="text-gray-500">
                  The Showwand extension is now installed in Chrome. You can
                  start using it to enhance your Showwcase experience.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Edge{"  "} <FaEdge className="inline" /></h2>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold">Download the Extension</p>
                <p className="text-gray-500">
                  Visit the GitHub repository and download the latest version of
                  the Showwand extension ZIP file.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold">Open Microsoft Edge Extensions</p>
                <p className="text-gray-500">
                  Open Microsoft Edge and navigate to the Extensions page by
                  clicking on the menu icon (three dots) and selecting
                  Extensions.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold">Enable Developer Mode</p>
                <p className="text-gray-500">
                  Enable Developer Mode by toggling the switch located in the
                  bottom-left corner of the Extensions page.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold">Load the Extension</p>
                <p className="text-gray-500">
                  Click on the Load unpacked button and select the downloaded
                  Showwand extension ZIP file. No need to extract the ZIP file
                  for Edge.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FaCheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold">Enjoy the Extension</p>
                <p className="text-gray-500">
                  The Showwand extension is now installed in Edge. You can start
                  using it to enhance your Showwcase experience.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DocsPage;
