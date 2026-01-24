/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Disabled for dynamic API routes with @cloudflare/next-on-pages
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
