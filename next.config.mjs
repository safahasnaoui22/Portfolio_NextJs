// next.config.mjs

const nextConfig = {
    images: {
      domains: ['images.pexels.com', 'scontent.fnbe1-2.fna.fbcdn.net' , 'th.bing.com'],
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
  