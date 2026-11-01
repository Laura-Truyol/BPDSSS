/** @type {import('next').NextConfig} */
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || undefined;

const nextConfig = {
  output: 'export',               // genera el sitio estático en out/
  assetPrefix,                    // /_next/* se pide al bucket S3
  images: { unoptimized: true },  // necesario con output: 'export'
};

export default nextConfig;
