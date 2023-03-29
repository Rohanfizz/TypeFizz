/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};
module.exports = {
    env: {
        ENVIRONMENT: process.env.NODE_ENV === "production" ? "prod" : "dev",
        BACKEND_URL:
            process.env.NODE_ENV === "production"
                ? "https://nameless-mountain-00644.herokuapp.com/sentences/"
                : "http://localhost:8000/sentences/",
    },
};

module.exports = nextConfig;
module.exports = {
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                    },
                ],
            },
        ];
    },
};
// module.exports = {
//   async rewrites() {
//       return [
//         {
//           source: '/*',
//           destination: '/*',
//         },
//       ]
//     },
// };
