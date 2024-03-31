const nextConfig = {
  images: {
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "scontent.fnbe1-2.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "th.bing.com",
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Link',
            value: '/favicon.ico; rel="icon"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
