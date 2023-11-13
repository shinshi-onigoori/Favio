/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*", // すべての API ルートに適用
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // 許可するオリジン
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, PATCH, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, Authorization, Content-Type" },
        ],
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
