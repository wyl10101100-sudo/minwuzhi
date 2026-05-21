"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ScanPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setReady(true);
          return 100;
        }
        return p + 3;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      height: "100vh",
      background: "#0b1220",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: 24
    }}>
      <div style={{ fontSize: 50 }}>🏮</div>

      <h1 style={{ marginTop: 20 }}>
        福建非遗数字体验
      </h1>

      <p style={{ opacity: 0.7 }}>
        正在进入文化世界
      </p>

      {/* progress */}
      <div style={{
        width: "80%",
        height: 6,
        background: "#1f2937",
        borderRadius: 999,
        marginTop: 20
      }}>
        <div style={{
          width: `${progress}%`,
          height: "100%",
          background: "#22c55e",
          transition: "width 0.2s"
        }} />
      </div>

      {ready && (
        <button
          onClick={() => router.push("/")}
          style={{
            marginTop: 30,
            padding: "10px 18px",
            borderRadius: 10,
            background: "#22c55e",
            border: "none",
            color: "white"
          }}
        >
          进入体验
        </button>
      )}
    </div>
  );
}