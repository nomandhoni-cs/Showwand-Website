import Image from "next/image";

export const metadata = {
  title: "Features - Showwand",
  description: "Your Companion for Effortless Posting and Thread Management.",
  keywords: "Showwand, Showwcase, Twitter, Tweet, Thread, Post, Features",

};
interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Seamlessly Post Threads from Anywhere: ",
    description:
      "Say goodbye to the limitations of composing lengthy threads within the confines of a single tweet. Showwand empowers you to effortlessly post threads in Showwcase from anywhere, allowing you to express your thoughts and ideas without compromising on clarity or depth.",
    image:
      "https://project-assets.showwcase.com/57949/1685078296168-Create%2520Post.webp",
  },
  {
    id: 2,
    title: "Quick Access to Recent Posts:",
    description:
      "With Showwand, you can effortlessly track and revisit your recent posts across any tab in your browser. Say goodbye to endlessly scrolling through your timeline or searching for past updates. Showwand provides a convenient dashboard to help you stay organized and easily locate your previously shared content.",
    image:
      "https://project-assets.showwcase.com/57949/1685078419470-Create%2520Post%2520(1200%2520%25C3%2597%2520675%2520px)%2520(1).webp",
  },
  {
    id: 3,
    title: "Securely Save Your Showwcase Info:",
    description:
      "Rest assured that your Showwcase API key ( Get Your API key )  and username are securely stored within your local environment with Showwand. We prioritize your privacy and security, which is why we do not collect any of the information you enter. By securely storing your credentials in your local environment, you can enjoy the seamless integration of your Showwcase profile without any concerns about data collection or privacy breaches. Your information remains within your control, giving you peace of mind while accessing the full potential of Showwand.",
    image:
      "https://project-assets.showwcase.com/57949/1685078608110-Create%2520Post%2520(1).webp",
  },
  {
    id: 4,
    title: "Discover Showwcase IDs from Twitter Profiles",
    description:
      "Searching for a user's Showwcase ID on Twitter? Showwand simplifies the process by displaying the Showwcase icon directly on a user's Twitter profile if they have a corresponding profile on Showwcase.com. Effortlessly explore new connections and discover exciting content on Showwcase.",
    image:
      "https://project-assets.showwcase.com/57949/1685078711306-Create%2520Post%2520(1200%2520%25C3%2597%2520675%2520px)%2520(2).webp",
  },
  {
    id: 5,
    title: "Worth Sharing? Select it, Post it",
    description:
      "Found something valuable to share with the developer community? With Showwand, simply select the content you want to share and post it instantly. No more copy-pasting or switching between platforms. Showwand streamlines the process, allowing you to quickly and conveniently share your insights, tips, or resources with fellow developers, fostering collaboration and knowledge exchange.",
    image:
      "https://project-assets.showwcase.com/57949/1685089546461-Add%2520a%2520heading.webp",
  },
];
const FeaturesPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
        Features
      </h1>
      <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl mb-4 text-center">
        Showwand Extension User Interface
      </h2>
      <Image src="https://project-assets.showwcase.com/57949/1685078156676-Showwand%2520(6).webp" alt="" width={1200} height={300} className="w-full my-5" />
      <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl mb-10 text-center">
        Here is what Showwand brings to the table:
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div key={feature.id} className="single-feature">
            <div className="feature-photo">
              <Image src={feature.image} alt={"Image of " + feature.title} width={400} height={100} className="w-full" />
            </div>
            <div className="feature-info">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-4">
                {feature.title}
              </h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
