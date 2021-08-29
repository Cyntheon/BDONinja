/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/",
      destination: "/cooking/cookTime",
      permanent: true
    }
  ]
};
