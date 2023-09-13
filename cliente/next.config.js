/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.anapolis.go.gov.br',
            port: '',
            pathname: '/apiupload/logo/**',
          },
        ],
      },
}

module.exports = nextConfig