import Image from "next/image";
import Link from "next/link";
interface ContributorData {
  id: number;
  html_url: string;
  avatar_url: string;
}
const fromApi = async () => {
  const res = await fetch(
    "https://api.github.com/repos/nomandhoni-cs/Showwand/contributors", { next: { revalidate: 3600 }, }
  );
  const data: ContributorData[] = await res.json();
  return data;
};
import BMC from "../assets/images/bmc.webp"
const Contributors = async () => {
  const data = await fromApi();
  return (
    <>
      <section id="contributors" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Contributors
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            These are the people who have contributed to the development of
            Showwand Browser Extension.
          </p>
          <div
            id="contributors-list"
            className="flex flex-wrap justify-center gap-4"
          >
            {data.map((contributor: ContributorData) => {
              return (
                <div key={contributor.id}>
                  <Link href={contributor.html_url} target={`_blank`}>
                    <Image
                      src={contributor.avatar_url + "&s=50"}
                      className="rounded-full"
                      alt="Contributors Image"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Support Our Development
          </h2>
          <a href="https://www.buymeacoffee.com/nomandhoni" target="_blank">
            <Image src={BMC} alt="Buy me coffee for Noman Dhoni" width={200} height={50} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Contributors;
