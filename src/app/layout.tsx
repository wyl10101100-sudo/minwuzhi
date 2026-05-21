import type { Metadata, Viewport } from "next";

// 1. 新增 viewport 导出，把 themeColor 放这里
export const viewport: Viewport = {
  themeColor: "#003c3a",
  width: "device-width",
  initialScale: 1,
};

// 2. metadata 中删除 themeColor
export const metadata: Metadata = {
  title: "闽物志",
  manifest: "/manifest.json",
  // themeColor 已删除
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
