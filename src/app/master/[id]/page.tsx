"use client";

import Link from "next/link";
import TabBar from "../../../components/TabBar";

const masterInfo = {
  name: "郑益坤",
  enName: "Master Zheng",
  location: "脱胎漆器 · 福州 · 从艺60余年",
  tags: [
    { label: "国家级非遗传承人", type: "primary" },
    { label: "福建省工艺美术大师", type: "secondary" },
  ],
  quote: "「漆是有生命的，每一层都在呼吸。」",
  bio: "福州脱胎漆器技艺国家级代表性传承人。郑大师从漆艺创作六十余载，其作品将金鱼的灵动与大漆的温润完美结合，不仅守护着传统的「重明」与「变涂」技艺，更在现代语境下重新诠释了东方美学之魂。",
  stats: [
    { value: "60+", label: "从艺年限" },
    { value: "120", label: "代表作品" },
    { value: "15", label: "传习课程" },
  ],
};

const timeline = [
  {
    year: "1962",
    title: "拜师入门",
    desc: "步入福州漆器厂，师从国家二级工艺师",
  },
  {
    year: "1985",
    title: "独创「金鱼大漆」技法",
    desc: "获全国工艺美术百花奖金奖",
  },
  {
    year: "2008",
    title: "认定国家级传承人",
    desc: "脱胎漆器列入国家级非遗名录",
  },
  {
    year: "今",
    title: "重译东方美学",
    desc: "融合「重明」与「变涂」，在现代语境下传承",
  },
];

const crafts = [
  {
    title: "脱胎漆器 · 轻如纸的百层生漆",
    desc: "以泥土为胎，裱麻布百多层，干后脱去原胎，仅剩漆灰，轻若无物，敲之铿然有声。",
  },
];

const works = [
  {
    id: "goldfish-plate",
    name: "金鱼漆盘",
    price: "¥4,800",
    image: "/images/master-detail/representative-works.svg",
    color: "#003C3A",
  },
  {
    id: "bodhisattva",
    name: "脱胎观音",
    price: "¥18,000",
    image: "/images/master-detail/core-craft.svg",
    color: "#8B6914",
  },
  {
    id: "vase",
    name: "变涂花瓶",
    price: "¥6,500",
    image: "/images/master-detail/artisan-journey.svg",
    color: "#C45C48",
  },
];

const videos = [
  {
    id: "life-story",
    title: "六十年漆艺人生",
    desc: "纪录片 · 师徒非遗记录片",
    duration: "12分钟",
    image: "/images/zheng-yikun-watermark-free.svg",
    color: "#1a1a1a",
  },
  {
    id: "process",
    title: "脱胎工艺全流程",
    desc: "6分钟 · 工艺演示",
    duration: "6分钟",
    image: "/images/zheng-yikun-watermark-free.svg",
    color: "#2d2d2d",
  },
];

const course = {
  title: "脱胎漆器入门体验",
  location: "福州工坊 · 周末班",
  spots: 3,
};

const reviews = [
  {
    id: "review-1",
    user: "林同学",
    rating: 5,
    content: "郑老师讲解非常耐心，第一次接触大漆就做出了自己的小作品，真正理解了什么是慢工出细活。",
  },
];

// 图片错误处理 - 显示占位符
function ImageWithFallback({ src, alt, style, placeholderStyle }: { 
  src: string; 
  alt: string; 
  style?: React.CSSProperties;
  placeholderStyle?: React.CSSProperties;
}) {
  const [error, setError] = React.useState(false);
  
  if (error) {
    return (
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: placeholderStyle?.background || "#E8E0D4",
        color: "#666",
        fontSize: "12px",
        ...placeholderStyle,
      }}>
        {alt}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "100%", objectFit: "cover", ...style }}
      onError={() => setError(true)}
    />
  );
}

// 需要添加 React import
import React from "react";

export default function MasterDetailPage() {
  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          background: "#F5F3EE",
          paddingBottom: "120px",
          fontFamily: "'Noto Serif SC', serif",
        }}
      >
        {/* 顶部返回 + 分享 */}
        <div
          style={{
            padding: "12px 20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/master"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              textDecoration: "none",
              color: "#1F1F1F",
              fontSize: "14px",
            }}
          >
            <span style={{ fontSize: "18px" }}>←</span>
            <span>返回</span>
          </Link>
          <div style={{ display: "flex", gap: "16px" }}>
            <Link href="/coming-soon" style={{ fontSize: "20px", textDecoration: "none", color: "inherit" }}>
              ↗
            </Link>
            <Link href="/coming-soon" style={{ fontSize: "20px", textDecoration: "none", color: "inherit" }}>
              ⋮
            </Link>
          </div>
        </div>

        {/* 大师头部信息 */}
        <section style={{ padding: "24px 20px 20px" }}>
          {/* 头像与名称 */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "20px" }}>
            {/* 头像 */}
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                background: "#E8E0D4",
                border: "2px solid #003C3A",
              }}
            >
              <ImageWithFallback
                src="/images/zheng-yikun-watermark-free.svg"
                alt="郑益坤"
                placeholderStyle={{ background: "#E8E0D4", color: "#003C3A", fontSize: "32px", fontWeight: "bold" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#1F1F1F",
                  marginBottom: "4px",
                  letterSpacing: "2px",
                }}
              >
                {masterInfo.name}
              </h1>
              <p
                style={{
                  fontSize: "13px",
                  color: "#8B8B8B",
                  marginBottom: "8px",
                }}
              >
                {masterInfo.enName}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#666",
                  lineHeight: 1.5,
                }}
              >
                {masterInfo.location}
              </p>
            </div>
          </div>

          {/* 标签 */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
            {masterInfo.tags.map((tag) => (
              <span
                key={tag.label}
                style={{
                  padding: "4px 12px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: 500,
                  background: tag.type === "primary" ? "#003C3A" : "transparent",
                  color: tag.type === "primary" ? "#fff" : "#003C3A",
                  border: tag.type === "primary" ? "none" : "1px solid #003C3A",
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>

          {/* 简介 */}
          <p
            style={{
              fontSize: "14px",
              color: "#666",
              lineHeight: 1.8,
              marginBottom: "16px",
            }}
          >
            {masterInfo.bio}
          </p>

          {/* 引言 */}
          <p
            style={{
              fontSize: "15px",
              color: "#003C3A",
              fontWeight: 500,
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            {masterInfo.quote}
          </p>
        </section>

        {/* 数据统计 */}
        <section
          style={{
            padding: "20px",
            margin: "0 20px",
            background: "#fff",
            borderRadius: "16px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {masterInfo.stats.map((stat, index) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                flex: 1,
                borderRight: index < masterInfo.stats.length - 1 ? "1px solid #ECE5D8" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#1F1F1F",
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "12px", color: "#8B8B8B" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        {/* 匠人历程 */}
        <section style={{ padding: "32px 20px 0" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1F1F1F",
              marginBottom: "20px",
            }}
          >
            匠人历程
          </h2>

          <div style={{ position: "relative", paddingLeft: "24px" }}>
            {/* 时间线竖线 */}
            <div
              style={{
                position: "absolute",
                left: "6px",
                top: "8px",
                bottom: "8px",
                width: "2px",
                background: "#ECE5D8",
              }}
            />

            {timeline.map((item, index) => (
              <div
                key={item.year}
                style={{
                  position: "relative",
                  marginBottom: index < timeline.length - 1 ? "24px" : "0",
                }}
              >
                {/* 时间点 */}
                <div
                  style={{
                    position: "absolute",
                    left: "-22px",
                    top: "6px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: index === 0 ? "#003C3A" : "#fff",
                    border: `2px solid ${index === 0 ? "#003C3A" : "#ECE5D8"}`,
                    zIndex: 1,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "12px",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#003C3A",
                      minWidth: "36px",
                    }}
                  >
                    {item.year}
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#1F1F1F",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#8B8B8B",
                    lineHeight: 1.6,
                    paddingLeft: "48px",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 核心工艺 */}
        <section style={{ padding: "32px 20px 0" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1F1F1F",
              marginBottom: "20px",
            }}
          >
            核心工艺
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {/* 工艺图片 */}
            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                background: "#1a1a1a",
                position: "relative",
              }}
            >
              <ImageWithFallback
                src="/images/zheng-yikun-watermark-free.svg"
                alt="脱胎漆器工艺图解"
                placeholderStyle={{ background: "#1a1a1a", color: "#fff" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                脱胎漆器工艺图解
              </div>
            </div>

            {/* 工艺描述 */}
            <div style={{ padding: "16px" }}>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1F1F1F",
                  marginBottom: "8px",
                }}
              >
                {crafts[0].title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: 1.7,
                }}
              >
                {crafts[0].desc}
              </p>
            </div>
          </div>
        </section>

        {/* 代表作品 */}
        <section style={{ padding: "32px 20px 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1F1F1F",
              }}
            >
              代表作品
            </h2>
            <Link
              href="/market"
              style={{
                fontSize: "13px",
                color: "#666",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              全部
              <span>→</span>
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "12px",
            }}
          >
            {works.map((work) => (
              <Link
                key={work.id}
                href={`/product/${work.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  {/* 作品图片 */}
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      background: work.color,
                      overflow: "hidden",
                    }}
                  >
                    <ImageWithFallback
                      src={work.image}
                      alt={work.name}
                      placeholderStyle={{ background: work.color, color: "#fff", fontSize: "14px" }}
                    />
                  </div>
                  <div style={{ padding: "10px" }}>
                    <h3
                      style={{
                        fontSize: "13px",
                        color: "#1F1F1F",
                        marginBottom: "6px",
                        fontWeight: 500,
                      }}
                    >
                      {work.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#003C3A",
                        fontWeight: "bold",
                      }}
                    >
                      {work.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 匠人记录 */}
        <section style={{ padding: "32px 20px 0" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1F1F1F",
              marginBottom: "20px",
            }}
          >
            匠人记录
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {videos.map((video) => (
              <div
                key={video.id}
                style={{
                  display: "flex",
                  gap: "16px",
                  background: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  padding: "12px",
                }}
              >
                {/* 视频封面 */}
                <div
                  style={{
                    width: "120px",
                    height: "80px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    position: "relative",
                    flexShrink: 0,
                    background: video.color,
                  }}
                >
                  <ImageWithFallback
                    src={video.image}
                    alt={video.title}
                    placeholderStyle={{ background: video.color, color: "#fff", fontSize: "12px" }}
                  />
                  {/* 播放按钮 */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: "6px solid transparent",
                          borderBottom: "6px solid transparent",
                          borderLeft: "10px solid #1F1F1F",
                          marginLeft: "2px",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* 视频信息 */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      color: "#1F1F1F",
                      marginBottom: "6px",
                    }}
                  >
                    {video.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#8B8B8B",
                      lineHeight: 1.5,
                    }}
                  >
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 向匠人学习 */}
        <section style={{ padding: "32px 20px 0" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1F1F1F",
              marginBottom: "20px",
            }}
          >
            向匠人学习
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1F1F1F",
                  marginBottom: "8px",
                }}
              >
                {course.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#8B8B8B",
                  marginBottom: "4px",
                }}
              >
                {course.location}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#003C3A",
                  fontWeight: 500,
                }}
              >
                剩余{course.spots}席
              </p>
            </div>
            <button
              style={{
                padding: "10px 24px",
                background: "#003C3A",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontFamily: "'Noto Serif SC', serif",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              立即报名
            </button>
          </div>
        </section>

        {/* 学员评价 */}
        <section style={{ padding: "32px 20px 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1F1F1F",
              }}
            >
              学员评价
            </h2>
            <Link
              href="/coming-soon"
              style={{
                fontSize: "13px",
                color: "#666",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              全部
              <span>→</span>
            </Link>
          </div>

          {reviews.map((review) => (
            <div
              key={review.id}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#1F1F1F",
                  }}
                >
                  {review.user}
                </span>
                <div style={{ display: "flex", gap: "2px" }}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} style={{ color: "#C45C48", fontSize: "14px" }}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: 1.7,
                }}
              >
                {review.content}
              </p>
            </div>
          ))}
        </section>

        <div style={{ height: "100px" }} />
      </main>

      {/* 底部悬浮操作栏 */}
      <div
        style={{
          position: "fixed",
          bottom: "60px",
          left: "0",
          right: "0",
          padding: "12px 20px",
          background: "#fff",
          borderTop: "1px solid #ECE5D8",
          display: "flex",
          gap: "12px",
          zIndex: 100,
        }}
      >
        <Link
          href="/coming-soon"
          style={{
            flex: 1,
            padding: "14px 0",
            background: "#F5F3EE",
            color: "#1F1F1F",
            border: "1px solid #ECE5D8",
            borderRadius: "12px",
            fontSize: "15px",
            fontFamily: "'Noto Serif SC', serif",
            cursor: "pointer",
            fontWeight: 500,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          + 关注匠人
        </Link>
        <Link
          href="/coming-soon"
          style={{
            flex: 2,
            padding: "14px 0",
            background: "#003C3A",
            color: "#fff",
            borderRadius: "12px",
            fontSize: "15px",
            fontFamily: "'Noto Serif SC', serif",
            cursor: "pointer",
            fontWeight: 500,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          报名传习课程
        </Link>
      </div>

      <TabBar />
    </>
  );
}
