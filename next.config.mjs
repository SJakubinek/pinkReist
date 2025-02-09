/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    taint: true,
  },
  async redirects() {
    return [
      {
        source: '/blogs/erster',
        destination: '/blogs/1',
        permanent: true,
      },
      {
        source: '/blogs/weitere-kanaele-und-kommentarfunktion',
        destination: '/blogs/2',
        permanent: true,
      },
      {
        source: '/blogs/teilintegrierter-vs-kastenwagen',
        destination: '/blogs/3',
        permanent: true,
      },
      {
        source: '/blogs/sachen-packen',
        destination: '/blogs/4',
        permanent: true,
      },
      {
        source: '/blogs/schwalmstadt',
        destination: '/blogs/5',
        permanent: true,
      },
      {
        source: '/blogs/point-alpha',
        destination: '/blogs/6',
        permanent: true,
      },
      {
        source: '/blogs/sachen-packen-teil-2',
        destination: '/blogs/7',
        permanent: true,
      },
      {
        source: '/blogs/sachen-packen-teil-3',
        destination: '/blogs/8',
        permanent: true,
      },
      {
        source: '/blogs/tag-1-wie-fing-es-an-darmstadt',
        destination: '/blogs/9',
        permanent: true,
      },
      {
        source: '/blogs/tag-2-fahrt-nach-rendsburg',
        destination: '/blogs/10',
        permanent: true,
      },
      {
        source: '/blogs/tag-3-fahrt-nach-kopenhagen',
        destination: '/blogs/11',
        permanent: true,
      },
      {
        source: '/blogs/tag-4-fahrt-nach-uppsala',
        destination: '/blogs/12',
        permanent: true,
      },
      {
        source: '/blogs/tag-5-fahrt-nach-rosvik',
        destination: '/blogs/13',
        permanent: true,
      },
      {
        source: '/blogs/tag-6-fahrt-nach-rovaniemi',
        destination: '/blogs/14',
        permanent: true,
      },
      {
        source: '/blogs/tag-7-fahrt-ohne-ziel',
        destination: '/blogs/15',
        permanent: true,
      },
      {
        source: '/blogs/tag-8-fahrt-zum-nordkapp',
        destination: '/blogs/16',
        permanent: true,
      },
      {
        source: '/blogs/tag-9-fahrt-nach-hammerfest',
        destination: '/blogs/17',
        permanent: true,
      },
      {
        source: '/blogs/tag-10-fahrt-nach-alta-frieren-in-der-nacht',
        destination: '/blogs/18',
        permanent: true,
      },
      {
        source: '/blogs/tag-11-fahrt-nach-tromso-tag-12-tromso',
        destination: '/blogs/19',
        permanent: true,
      },
    ];
  },
};

export default config;
