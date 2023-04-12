/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['rickandmortyapi.com'],
	},
	experimental: {
		appDir: true,
		typedRoutes: true,
	},
};
module.exports = nextConfig;
