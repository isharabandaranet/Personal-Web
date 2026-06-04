/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // We are working locally, this is useful so we don't run into issues with next/image optimizing images from third-party or local path without setup.
  },
};

export default nextConfig;
