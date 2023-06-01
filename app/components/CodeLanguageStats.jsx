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
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
        How was Showwand created?
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-center">
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
            <div key={index} className="relative group bg-white shadow-lg hover:shadow-2xl mb-9 sm:mb-7 py-9 px-12 sm:px-14 mx-4 rounded-md">
              <div className="text-center mb-6">
                <IconComponent size={50} className="inline mb-3  group-hover:scale-125 transition duration-300 ease-out hover:ease-in" />
                <p className="text-3xl font-semibold text-black">{item.language}</p>
              </div>
              <div className="flex justify-around items-center">
                <div className="flex items-center after:content-[''] after:absolute after:w-[2px] after:h-6 after:bg-slate-300 after:right-[50%] after:bottom-[17%]">
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
