"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const recommendations = [
  {
   image: "/images/coming-soon/ExploringCraftsmanship.svg",
    title: "探索匠心",
    desc: "发现德化白瓷的温润如玉",
    href: "/explore",
  },
  {
    image: "/images/coming-soon/OrientalCharm ofTea.svg",
    title: "茶韵东方",
    desc: "寻访武夷山的每一缕茶香",
    href: "/explore",
  },
];

function ToolBagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 7V5.8C9 4.25 10.34 3 12 3s3 1.25 3 2.8V7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.2 7H17.8C18.46 7 19 7.51 19 8.14V19.36C19 20.26 18.23 21 17.29 21H6.71C5.77 21 5 20.26 5 19.36V8.14C5 7.51 5.54 7 6.2 7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export default function ComingSoonPage() {
  const router = useRouter();

  return (
    <>
      <main
        style={{
          background: "#f6f5ef",
          minHeight: "100vh",
          paddingBottom: "140px",
          fontFamily: "'Noto Serif SC', serif",
        }}
      >
        <div
          style={{
            padding: "18px 24px 8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            onClick={() => router.back()}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <img src="/images/back-icon.svg" alt="返回" style={{ width: "28px", height: "28px" }} />
          </button>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#003331", margin: 0, letterSpacing: "1px" }}>
            404
          </h1>
          <Link href="/coming-soon" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/images/profile-icon/profile-search-icon.svg"
              alt="搜索"
              style={{ width: "20px", height: "20px" }}
            />
          </Link>
        </div>

        <div style={{ padding: "10px 12px 0", textAlign: "center" }}>
          <div style={{ padding: "56px", width: "100%", maxWidth: "330px", margin: "0 auto" }}>
            <img src="/images/coming-soon/tea-ip.svg" alt="Coming Soon" style={{ width: "100%", height: "auto" }} />
          </div>
          <p style={{  margin: "0 0 10px", fontSize: "14px", color: "#224d48", lineHeight: 1.4 }}>
            茗萃正在布置工坊
          </p>
          <p style={{ margin: 0, fontSize: "22px", fontWeight: 700, color: "#103d37", lineHeight: 1.45 }}>
            此功能暂未上线，敬请期待
          </p>
        </div>

        <div style={{ padding: "18px 0 0" }}>
          {recommendations.map((item, index) => (
            <Link key={item.title} href={item.href} style={{ textDecoration: "none", display: "block" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "20px 24px",
                  background: index === 0 ? "#f0efe9" : "#f6f5ef",
                  borderTop: index === 0 ? "1px solid #ebe8df" : "1px solid #ebe8df",
                  borderBottom: "1px solid #ebe8df",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "2px",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontSize: "18px", color: "#335858", margin: "0 0 6px", lineHeight: 1.2 }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: "14px", color: "#556f6f", margin: 0, lineHeight: 1.45 }}>{item.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <div
        style={{
          position: "fixed",
          bottom: "34px",
          left: "8px",
          right: "8px",
          zIndex: 100,
        }}
      >
        <Link href="/market" style={{ textDecoration: "none" }}>
          <button
            type="button"
            style={{
              width: "100%",
              padding: "15px 16px",
              background: "#004742",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: 700,
              fontFamily: "'Noto Serif SC', serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <ToolBagIcon />
            去市集逛逛
          </button>
        </Link>
      </div>
    </>
  );
}
