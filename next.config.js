/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,  // 빌드 시 폴더 구조 그대로 생성하도록
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  skipTrailingSlashRedirect: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig
