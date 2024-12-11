/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media2.dev.to",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
