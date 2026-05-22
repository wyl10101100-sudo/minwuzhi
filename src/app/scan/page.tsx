"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ScanPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  // 模拟加载进度
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setReady(true);
          return 100;
        }
        return p + 5;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  // 自动跳转主页
  useEffect(() => {
    if (ready) {
      const auto = setTimeout(() => {
        router.push("/");
      }, 800); // 0.8秒后自动跳转
      return () => clearTimeout(auto);
    }
  }, [ready, router]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 20,
        backgroundColor: "#0b1220",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* 极简视觉占位 */}
      <div style={{ fontSize: 50, marginBottom: 20 }}>🏮</div>

      <h1 style={{ fontSize: 20, marginBottom: 10 }}>福建非遗数字体验</h1>
      <p style={{ opacity: 0.7 }}>加载文化世界 {progress}%</p>

      {/* 进度条 */}
      <div
        style={{
          width: "80%",
          height: 6,
          background: "#1f2937",
          borderRadius: 999,
          marginTop: 20,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#22c55e",
            transition: "width 0.2s",
          }}
        />
      </div>

      {/* 加载完成手动进入按钮 */}
      {ready && (
        <button
          onClick={() => router.push("/")}
          style={{
            marginTop: 30,
            padding: "10px 18px",
            borderRadius: 8,
            backgroundColor: "#22c55e",
            color: "white",
            border: "none",
            fontSize: 14,
          }}
        >
          进入体验
        </button>
      )}
    </div>
  );
}