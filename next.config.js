/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "default",
    domains: [
      "avatars.githubusercontent.com",
      "project-assets.showwcase.com",
    ],
  },
};

module.exports = nextConfig;