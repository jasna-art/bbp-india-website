/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  experimental: {
    serverActions: {
      // Bumped from the 1MB default so resume PDFs/Word files attach cleanly
      // through the /work-with-us application form.
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
