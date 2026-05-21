"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
interface TabBarProps {
  activeTab?: "home" | "museum" | "learn" | "market" | "profile";
}
export default function TabBar({ activeTab }: TabBarProps) {
  const pathname = usePathname();

  const tabs = [
    {
      name: "首页",
      href: "/",
      icon: "/images/tabbar/home.svg",
    },
    {
      name: "博览",
      href: "/explore",
      icon: "/images/tabbar/explore.svg",
    },
    {
      name: "传习",
      href: "/learn",
      icon: "/images/tabbar/learn.svg",
    },
    {
      name: "市集",
      href: "/market",
      icon: "/images/tabbar/market.svg",
    },
    {
      name: "我的",
      href: "/profile",
      icon: "/images/tabbar/profile.svg",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        margin: "0 auto",
        height: "92px",
        background: "rgba(247,244,239,.92)",
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
        borderTop: "1px solid #e8dfd3",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
        zIndex: 999,
        boxShadow:
          "0 -4px 30px rgba(0,0,0,.06)",
      }}
    >
      {tabs.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "14px",
                  background: active
                    ? "#efe1b3"
                    : "transparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: ".25s",
                }}
              >
                <img
                  src={item.icon}
                  style={{
                    width: "22px",
                    height: "22px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <span
                style={{
                  fontSize: "11px",
                  color: active
                    ? "#003c3a"
                    : "#8d8d8d",
                  transition: ".25s",
                  fontFamily:
                    "'Noto Serif SC', serif",
                }}
              >
                {item.name}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
