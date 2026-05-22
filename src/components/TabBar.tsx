"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TabKey = "home" | "explore" | "learn" | "market" | "profile";
interface TabBarProps {
  /**
   * 可选：强制指定当前选中的 Tab（用于非 tab 主路由页面也需要高亮某个 Tab 的场景）
   */
  activeTab?: TabKey;
}
export default function TabBar({ activeTab }: TabBarProps) {
  const pathname = usePathname();

  const tabs = [
    {
      key: "home" as const,
      name: "首页",
      href: "/",
      // 使用新文件名以避免 PWA/浏览器缓存导致旧 icon 仍显示填充
      icon: "/images/tabbar/home-outline.svg",
    },
    {
      key: "explore" as const,
      name: "博览",
      href: "/explore",
      icon: "/images/tabbar/explore.svg",
    },
    {
      key: "learn" as const,
      name: "传习",
      href: "/learn",
      icon: "/images/tabbar/learn.svg",
    },
    {
      key: "market" as const,
      name: "市集",
      href: "/market",
      icon: "/images/tabbar/market.svg",
    },
    {
      key: "profile" as const,
      name: "我的",
      href: "/profile",
      icon: "/images/tabbar/profile.svg",
    },
  ];

  // 由路径推导当前 tab。注意：首页只能在 pathname === "/" 时才算选中，
  // 否则如果用 startsWith("/") 会导致首页在所有页面都被判定为选中（即你遇到的“第一个 icon 填充始终在”的问题）。
  const inferredTab: TabKey = (() => {
    if (pathname === "/") return "home";
    if (pathname === "/explore" || pathname.startsWith("/explore/"))
      return "explore";
    // /master 和 /master/[id] 属于“博览”体系页面
    if (pathname === "/master" || pathname.startsWith("/master/"))
      return "explore";
    if (pathname === "/learn" || pathname.startsWith("/learn/"))
      return "learn";
    if (pathname === "/market" || pathname.startsWith("/market/"))
      return "market";
    if (pathname === "/profile" || pathname.startsWith("/profile/"))
      return "profile";
    return "home";
  })();

  // activeTab 优先级更高：外部传入则强制选中该 tab（确保同一时刻只会有一个 tab 处于选中态）
  const currentTab: TabKey = activeTab ?? inferredTab;

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
        const active = currentTab === item.key;

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
