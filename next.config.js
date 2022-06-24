/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/formation',
				destination: '/Formation/Formation',
			},
			{
				source: '/import',
				destination: '/Import/Import',
			},
		]
	},
}

module.exports = nextConfig
