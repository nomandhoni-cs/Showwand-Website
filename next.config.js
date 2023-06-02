/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "default",
    domains: [
      "avatars.githubusercontent.com",
      "project-assets.showwcase.com",
      // Add other domains if needed
    ],
  },
};

module.exports = nextConfig;
