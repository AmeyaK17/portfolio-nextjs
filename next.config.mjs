/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        domains: [
          "api.microlink.io",
        ],
      },
};

export default nextConfig;
