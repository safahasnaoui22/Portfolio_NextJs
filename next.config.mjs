const nextConfig = {
  output: 'export',
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
    // Specify remote patterns using objects with 'protocol' and 'hostname' properties
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com", // Use 'hostname' instead of 'host'
      },
      // Add additional domains here if needed
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
