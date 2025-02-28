/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true, // GitHub Pages støtter ikke Next.js Image Optimization
  },
};

export default nextConfig;
