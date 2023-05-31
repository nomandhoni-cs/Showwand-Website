import {
  FaCode,
  FaCss3,
  FaFile,
  FaFolder,
  FaHtml5,
  FaJsSquare,
} from "react-icons/fa";
async function getData() {
  const res = await fetch(
    "https://api.codetabs.com/v1/loc?github=nomandhoni-cs/Showwand&branch=production",
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const CodeLanguageStats = async () => {
  const data = await getData();
  const filteredData = data.filter((item) =>
    ["HTML", "CSS", "JavaScript", "Total"].includes(item.language)
  );
  console.log(data);
  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
          How Showwand Made?
        </h1>
      </div>
      <div className="flex items-center justify-around space-x-4">
        {filteredData.map((item, index) => {
          let IconComponent;
          switch (item.language) {
            case "JavaScript":
              IconComponent = FaJsSquare;
              break;
            case "CSS":
              IconComponent = FaCss3;
              break;
            case "HTML":
              IconComponent = FaHtml5;
              break;
            default:
              IconComponent = FaFile;
              break;
          }

          return (
            <div key={index} className="grid grid-cols-1 grid-rows-2">
              <div className="">
                <IconComponent size={58} />
                <p className="text-3xl text-black">{item.language}</p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <p className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 group hover:text-black hover:bg-gray-200">
                  <span className="mr-1">
                    <FaFolder />
                  </span>
                  {item.files}
                </p>
                <p className="text-base text-black">
                  <span className="mr-1">
                    <FaCode />
                  </span>
                  {item.linesOfCode}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CodeLanguageStats;
