"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ScanPage() {
  const router = useRouter();

  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  // 优化后的加载进度
  useEffect(() => {
    let current = 0;

    const timer = setInterval(() => {
      current += 5;

      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setReady(true);
      }

      setProgress(current);
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 20,
        backgroundColor: "#0b1220",
        color: "white",
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    >
      {/* LOGO 图片 */}
      <div
        style={{
          width: 180,
          height: 180,
          position: "relative",
          marginBottom: 24,
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/open.png"
          alt="Open"
          width={180}
          height={180}
          priority
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      {/* 标题 */}
      <h1
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 10,
        }}
      >
        福建非遗数字体验
      </h1>

      {/* 描述 */}
      <p
        style={{
          opacity: 0.7,
          fontSize: 14,
          marginBottom: 24,
        }}
      >
        加载文化世界 {progress}%
      </p>

      {/* 进度条 */}
      <div
        style={{
          width: "80%",
          maxWidth: 260,
          height: 6,
          background: "#1f2937",
          borderRadius: 999,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#22c55e",
            transition: "width 0.2s ease",
          }}
        />
      </div>

      {/* 加载完成按钮 */}
      {ready && (
        <button
          onClick={() => router.push("/")}
          style={{
            marginTop: 32,
            padding: "12px 22px",
            borderRadius: 12,
            backgroundColor: "#22c55e",
            color: "white",
            border: "none",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          进入体验
        </button>
      )}
    </div>
  );
}