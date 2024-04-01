/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.sastaghar.in",
        port: "",
        pathname: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "",
      },
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
        port: "",
        pathname: "",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "",
      },
    ],
  },
};

module.exports = nextConfig;
