/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Hjelper hvis du har bildeproblemer på Vercel
  },
};

export default nextConfig;
