import { IoCreate } from "react-icons/io5";
import { MdSpaceDashboard, MdOutlineKey, MdAssistant } from "react-icons/md";
import { LuTextCursorInput } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const features = [
  {
    name: "Create Threads",
    description:
      "Create threads with ease. Just click the button and you're good to go.",
    icon: IoCreate,
  },
  {
    name: "Posts List",
    description:
      "See your all recent posted threads in one place. You can also boost them from here.",
    icon: MdSpaceDashboard,
  },
  {
    name: "Store API keys securely",
    description:
      "Store your Showwcase API keys in your local environment. No need to remember them anymore.",
    icon: MdOutlineKey,
  },
  {
    name: "Select it, Post it",
    description:
      "Found anything worth sharing? Just select it and click the post button. It's that simple.",
    icon: LuTextCursorInput,
  },
  {
    name: "Showwcase ID Finder",
    description:
      "Find your Showwcase ID with ease. Just click the button and you're good to go.",
    icon: CgProfile,
  },
  {
    name: "Your Companion for Showwcase",
    description:
      "Showwand is your companion for effortless posting, thread management and so much more.",
    icon: MdAssistant,
  },
];

const KeyFeatures:React.FC = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32 mb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-slate-950">
              Key features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All the features you need for better management
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Here are some of the key features of Showwand Browser Extension.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
