import localFont from "next/font/local";

export const nanumGothic = localFont({
  src: [
    {
      path: "./NanumGothic.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NanumGothicLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./NanumGothicBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./NanumGothicExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-nanum-gothic",
  display: "swap",
});

export const nanumMyeongjo = localFont({
  src: [
    {
      path: "./NanumMyeongjo.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NanumMyeongjoBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./NanumMyeongjoExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-nanum-myeongjo",
  display: "swap",
});

export const nanumSquare = localFont({
  src: [
    {
      path: "./NanumSquareL.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./NanumSquareR.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NanumSquareB.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./NanumSquareEB.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-nanum-square",
  display: "swap",
});

export const nanumSquareNeo = localFont({
  src: [
    {
      path: "./NanumSquareNeo-aLt.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./NanumSquareNeo-bRg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NanumSquareNeo-cBd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./NanumSquareNeo-dEb.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./NanumSquareNeo-eHv.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-nanum-square-neo",
  display: "swap",
});

export const nanumBarunGothic = localFont({
  src: [
    {
      path: "./NanumBarunGothicUltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./NanumBarunGothicLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./NanumBarunGothicBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nanum-barun-gothic",
  display: "swap",
});

export const nanumBarunPen = localFont({
  src: [
    {
      path: "./NanumBarunpenR.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NanumBarunpenB.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nanum-barun-pen",
  display: "swap",
});

export const nanumBrush = localFont({
  src: [
    {
      path: "./NanumBrush.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nanum-brush",
  display: "swap",
});

export const nanumHuman = localFont({
  src: [
    {
      path: "./NanumHumanEL.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./NanumHumanLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./NanumHumanRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NanumHumanBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./NanumHumanEB.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-nanum-human",
  display: "swap",
});

export const nanumPen = localFont({
  src: [
    {
      path: "./NanumPen.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nanum-pen",
  display: "swap",
});

export const allNanumFonts = {
  nanumGothic,
  nanumMyeongjo,
  nanumSquare,
  nanumSquareNeo,
  nanumBarunGothic,
  nanumBarunPen,
  nanumBrush,
  nanumHuman,
  nanumPen,
} as const;