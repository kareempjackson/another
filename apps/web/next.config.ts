import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            // Allow Ghyst to embed this app in an iframe
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://app.ghyst.io http://localhost:3000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
