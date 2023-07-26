import {
    FaCode,
    FaCss3Alt,
    FaFileCode,
    FaHtml5,
    FaJsSquare,
} from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
interface LanguageData {
    language: string;
    files: number;
    lines: number;
    blanks: number;
    comments: number;
    linesOfCode: number;
}

const getData = async () => {
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
    const data: LanguageData[] = await getData();
    const filteredData = data.filter((item) =>
        ["HTML", "CSS", "JavaScript", "Total"].includes(item.language)
    );
    return (
        <>
            <div className="text-center py-6 md:py-8 lg:py-20">
                <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
                    How was Showwand created?
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Languages and tools used to create Showwand.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-center">
                {filteredData.map((item, index) => {
                    let IconComponent;
                    switch (item.language) {
                        case "JavaScript":
                            IconComponent = FaJsSquare;
                            break;
                        case "CSS":
                            IconComponent = FaCss3Alt;
                            break;
                        case "HTML":
                            IconComponent = FaHtml5;
                            break;
                        default:
                            IconComponent = HiCollection;
                            break;
                    }

                    return (
                        <div
                            key={index}
                            className="relative group bg-white shadow-lg hover:shadow-2xl mb-9 sm:mb-7 py-9 px-12 sm:px-14 mx-4 rounded-md"
                        >
                            <div className="text-center mb-6">
                                <IconComponent
                                    size={50}
                                    className="inline mb-3  group-hover:scale-125 transition duration-300 ease-out hover:ease-in"
                                />
                                <p className="text-3xl font-semibold text-black">
                                    {item.language}
                                </p>
                            </div>
                            <div className="flex justify-around items-center">
                                <div className="flex items-center after:content-[''] after:absolute after:w-[2px] after:h-6 after:bg-slate-300 after:right-[50%] after:bottom-[17%]">
                                    <span className="mr-1">
                                        <FaFileCode />
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
