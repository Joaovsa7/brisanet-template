/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/telefone',
				destination: '/numero-da-brisanet',
				permanent: true
			}
		]
	}
}

module.exports = nextConfig
