const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  output: "export",
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
};

export default nextConfig;

