import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const ComingSoon:React.FC = () => {
  return (
    <>
      <section id="comming-soon" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Coming Soon
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Currently this page is under construction. <br />{" "}
            Star us on <Link href={`https://github.com/nomandhoni-cs/Showwand`}> <FaGithub className="inline" /> GitHub </Link>to help us out!
          </p>
        </div>
      </section>
    </>
  )
}

export default ComingSoon