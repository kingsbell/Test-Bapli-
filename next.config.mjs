/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      { hostname: "www.cossa.ru" },
    ],
  },
};

export default nextConfig;
