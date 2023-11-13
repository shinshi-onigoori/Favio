/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // 対象APIのパスパターン
        // 今回は src/app/api/ 配下にAPIを作っているので下記のようにする
        source: "/api/:path*",
        headers: [
          {
            // CORSを許可するオリジン
            key: "Access-Control-Allow-Origin",
            // すべてのオリジンを許可するなら * (アスタリスク)
            // ただセキュリティ的にはよろしくないので注意
            value: "*",
          },
          {
            // 許可するメソッド
            key: "Access-Control-Allow-Methods",
            value: "*",
          },
          {
            // 許可するリクエストヘッダ
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
