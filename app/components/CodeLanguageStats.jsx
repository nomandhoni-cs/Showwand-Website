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
      <div className="overflow-hidden text-center">
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
            <div key={index} className="block sm:inline-block sm:float-none bg-slate-100 mb-9 sm:mb-7 py-9 px-10 sm:px-12 mx-4 rounded-md">
              <div className="text-center">
                <IconComponent size={50} className="inline mb-3" />
                <p className="text-3xl font-semibold text-black">{item.language}</p>
              </div>
              <div className="flex justify-center items-center px-3">
                <div className="flex items-center py-5 px-8">
                  <span className="mr-1">
                    <FaFolder />
                  </span>
                  {item.files}
                </div>
                <div className="flex items-center text-base text-black">
                  <span className="mr-1">
                    <FaCode />
                  </span>
                  {item.linesOfCode}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CodeLanguageStats;