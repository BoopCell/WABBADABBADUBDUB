/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['rickandmortyapi.com'],
	},
	experimental: {
		appDir: true,
	},
};
module.exports = nextConfig;
