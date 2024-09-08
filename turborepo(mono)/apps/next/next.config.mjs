/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@"],
        },
      },
    },
    externalDir: true,
  },
  webpack: (config, { isServer }) => {
    // 외부 모듈(@ui 패키지)의 CSS 파일을 처리하도록 설정
    config.module.rules.push({
      test: /\.css$/,
      include: path.resolve(process.cwd(), "../../packages/ui"), // Turborepo 패키지 경로 설정
      use: ["style-loader", "css-loader"],
    });

    return config;
  },
};

export default nextConfig;

// import path from 'path';

// export default {
//   webpack: (config, { isServer }) => {
//     // 외부 모듈(@ui 패키지)의 CSS 파일을 처리하도록 설정
//     config.module.rules.push({
//       test: /\.css$/,
//       include: path.resolve(process.cwd(), '../../packages/ui'), // Turborepo 패키지 경로 설정
//       use: ['style-loader', 'css-loader'],
//     });

//     return config;
//   },
//   experimental: {
//     externalDir: true, // 외부 디렉토리 허용
//   },
// };
