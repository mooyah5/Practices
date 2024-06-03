import localFont from "next/font/local";
import { Noto_Sans_KR, Waterfall } from "next/font/google";

export const NotoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-notosanskr",
});

export const waterfall = Waterfall({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-waterfall",
});

export const spoqa = localFont({
  src: [
    {
      path: "../assets/fonts/SpoqaHanSansNeo-Bold.woff2",
      weight: "900",
      style: "bold",
    },
    {
      path: "../assets/fonts/SpoqaHanSansNeo-Medium.woff2",
      weight: "700",
      style: "medium",
    },
    {
      path: "../assets/fonts/SpoqaHanSansNeo-Regular.woff2",
      weight: "500",
      style: "regular",
    },
    {
      path: "../assets/fonts/SpoqaHanSansNeo-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../assets/fonts/SpoqaHanSansNeo-Thin.woff2",
      weight: "100",
      style: "thin",
    },
  ],
  variable: "--font-spoqa",
});

export const nexon = localFont({
  src: [
    {
      path: "../assets/fonts/NEXONLv2GothicBold.woff",
      weight: "900",
      style: "bold",
    },
    {
      path: "../assets/fonts/NEXONLv2GothicLight.woff",
      weight: "100",
      style: "light",
    },
    {
      path: "../assets/fonts/NEXONLv2Gothic.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-nexon",
});

export const Pretendard = localFont({
  src: [
    {
      path: "../assets/fonts/PretendardVariable.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/PretendardVariable.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/PretendardVariable.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/PretendardVariable.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/PretendardVariable.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/PretendardVariable.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/PretendardVariable.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/PretendardVariable.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/PretendardVariable.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: [
    "Pretendard Variable",
    "Pretendard",
    "NotoSansKR",
    "spoqa",
    "nexon",
    "-apple-system",
    "BlinkMacSystemFont",
    "system-ui",
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "Malgun Gothic",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "sans-serif",
  ],
});
