/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true
	},
	async redirects() {
		return [
			{
				source: '/telefone',
				destination: '/numero-da-brisanet',
				permanent: true
			},
			{
				source: '/cobertura/fortaleza',
				destination: '/cobertura/ceara/fortaleza',
				permanent: true
			}
		]
	}
}

module.exports = nextConfig
