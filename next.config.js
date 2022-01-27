/**
* @type {import('next').NextConfig}
*/
 const nextConfig = {
	 images: {
		domains: ['raw.githubusercontent.com']
	 },
	experimental: {
		// Enables the styled-components SWC transform
		styledComponents: true
	}
}

module.exports = nextConfig;