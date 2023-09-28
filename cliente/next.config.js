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
          {
            protocol: 'https',
            hostname: 'portaleducacao.anapolis.go.gov.br',
            port: '',
            pathname: '/portal/wp-content/uploads/2023/09/**',
          },
        ],
      },
}

module.exports = nextConfig

