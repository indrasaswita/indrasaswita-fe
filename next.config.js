/* eslint-disable @typescript-eslint/typedef */

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
    ignoreDuringBuilds: true,
  },
	compiler: {
    styledComponents: {
      ssr: true,
    },
  },
}

module.exports = nextConfig
