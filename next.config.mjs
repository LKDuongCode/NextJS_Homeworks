/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/free-vector/**",
      },
      {
        protocol: "https",
        hostname: "images.stockcake.com",
        port: "",
        pathname: "/public/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/150/**",
      },
    ],
  },
};

export default nextConfig;
