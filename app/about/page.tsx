export const metadata = {
  title: "About - Showwand",
  description:
    "About Showwand, a browser extension that helps you manage your Showwcase threads and posts and many more.",
  keywords:
    "Showwand, Showwcase, Showwand Browser Extension, Showwand Extension, Showwand Chrome Extension, Showwand Firefox Extension, Showwand Edge Extension, Showwand Safari Extension, Showwand Opera Extension, Showwand Extension Download, Showwand Extension Installation, Showwand Extension Guide, Showwand Extension Documentation, Showwand Extension Features, Showwand Extension",
};
const AboutPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl text-center font-bold mb-4">About Showwand</h1>
        <h2 className="text-3xl font-bold mb-4">
          Showwand: Unleash Your Thread Wizardry - Your Companion for Effortless
          Posting and Thread Management
        </h2>

        <h2 className="text-2xl font-bold mb-4">What is Showwand?</h2>
        <p className="mb-4">
          Introducing Showwand: Save Time and Enhance Your Showwcase Experience!
          <br />
          We are thrilled to unveil Showwand, the revolutionary browser
          extension designed to streamline your Showwcase interactions and
          maximize your productivity. With Showwand, you can take control of
          your online presence, effortlessly post threads, discover your recent
          posts, and unlock a wealth of exciting features that will transform
          the way you engage with Showwcase platforms.
        </p>

        <h2 className="text-2xl font-bold mb-4">Features:</h2>
        <h3 className="text-xl font-bold mb-2">
          Seamlessly Post Threads from Anywhere:
        </h3>
        <p className="mb-4">
          Say goodbye to the limitations of composing lengthy threads within the
          confines of a single tweet. Showwand empowers you to effortlessly post
          threads in Showwcase from anywhere, allowing you to express your
          thoughts and ideas without compromising on clarity or depth.
        </p>

        <h3 className="text-xl font-bold mb-2">
          Quick Access to Recent Posts:
        </h3>
        <p className="mb-4">
          With Showwand, you can effortlessly track and revisit your recent
          posts across any tab in your browser. Say goodbye to endlessly
          scrolling through your timeline or searching for past updates.
          Showwand provides a convenient dashboard to help you stay organized
          and easily locate your previously shared content.
        </p>

        <h3 className="text-xl font-bold mb-2">
          Securely Save Your Showwcase Info:
        </h3>
        <p className="mb-4">
          Rest assured that your Showwcase API key and username are securely
          stored within your local environment with Showwand. We prioritize your
          privacy and security, which is why we do not collect any of the
          information you enter. By securely storing your credentials in your
          local environment, you can enjoy the seamless integration of your
          Showwcase profile without any concerns about data collection or
          privacy breaches. Your information remains within your control, giving
          you peace of mind while accessing the full potential of Showwand.
        </p>

        <h3 className="text-xl font-bold mb-2">
          Discover Showwcase IDs from Twitter Profiles:
        </h3>
        <p className="mb-4">
          Searching for a users Showwcase ID on Twitter? Showwand simplifies
          the process by displaying the Showwcase icon directly on a users
          Twitter profile if they have a corresponding profile on Showwcase.com.
          Effortlessly explore new connections and discover exciting content on
          Showwand.
        </p>

        <h3 className="text-xl font-bold mb-2">
          Worth Sharing? Select it, Post it:
        </h3>
        <p className="mb-4">
          Found something valuable to share with the developer community? With
          Showwand, simply select the content you want to share and post it
          instantly. No more copy-pasting or switching between platforms.
          Showwand streamlines the process, allowing you to quickly and
          conveniently share your insights, tips, or resources with fellow
          developers, fostering collaboration and knowledge exchange.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
