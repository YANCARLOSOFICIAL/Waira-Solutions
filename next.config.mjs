/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // WebP only: fast, robust encoding. AVIF's marginal size win isn't worth
    // its encode cost / occasional optimizer stalls on photographic JPEGs.
    formats: ['image/webp'],
  },
}

export default nextConfig
