"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TabBar from "../../components/TabBar";
import { HorizontalCarousel } from "../../components/HorizontalCarousel";

const masterInfo = {
  name: "郑益坤",
  enName: "Master Zheng",
  tags: [
    { label: "国家级非遗传承人", type: "primary" },
  ],
  subtitle: "福建省工艺美术大师",
  experience: "从艺60余年",
  image: "/images/zheng-yikun-watermark-free.svg",
  bio: "福州脱胎漆器技艺国家级代表性传承人。郑大师从事漆艺创作六十余载，其作品将金鱼的灵动与大漆的温润完美结合。他不仅守护着传统的「罩明」与「变涂」技艺，更在现代语境下重新诠释了东方美学之魂",
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
    desc: "16岁入福州漆场，师从李芝卿",
  },
  {
    year: "1985",
    title: "独创「金胎大漆」技法",
    desc: "获全国工艺美术百花奖金奖",
  },
  {
    year: "2008",
    title: "认定国家级传承人",
    desc: "脱胎漆器技艺列入国家级非遗名录",
  },
  {
    year: "今",
    title: "重塑东方美学",
    desc: "在现代语境中发展脱胎漆器",
  },
];

const crafts = [
  {
    title: "脱胎漆器 · 艺如纸的百层坚漆",
    desc: "以泥土为胎，层层上漆百余层，于百般打磨抛光，轻薄如纸，坚若磐石。",
    image: "/images/master-detail/core-craft-banner.svg",
  },
];

const works = [
  {
    id: "goldfish",
    name: "金鱼",
    price: "¥12,800",
    image: "/images/master-detail/representative-works.svg",
    tags: ["非遗认证", "溯源"],
  },
  {
    id: "bodhisattva",
    name: "脱胎观音",
    price: "¥18,000",
    image: "/images/master-detail/representative-works.svg",
    tags: ["非遗认证"],
  },
  {
    id: "vase",
    name: "变涂花瓶",
    price: "¥6,500",
    image: "/images/master-detail/representative-works.svg",
    tags: ["大师监制"],
  },
];

const course = {
  type: "线下传习课",
  title: "脱胎漆器入门体验班",
  location: "福州工作室 · 周末班 · 小班授课",
};

// 图片错误处理组件
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
        color: "#C09D6A",
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

export default function MasterDetailPage() {
   const router = useRouter(); 
  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          background: "#F5F3EE",
          paddingBottom: "0px",
          fontFamily: "'Noto Serif SC', serif",
        }}
      >
        {/* 顶部导航栏 */}
        <div
          style={{
            padding: "12px 20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => router.back()}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <img src="/images/back-icon.svg" alt="返回" 
            style={{ width: "24px", height: "24px" }} />
          </button>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#003331", margin: 0 }}>
            郑益坤
          </h1>
          <div style={{ display: "flex",alignItems: "center", gap: "16px" }}>
            <Link href="/coming-soon" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/images/favorite.svg"
                alt="收藏"
                style={{ width: "16px", height: "16px", display: "block" }}
              />
            </Link>
            <Link href="/coming-soon" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/images/profile-icon/profile-search-icon.svg"
                alt="搜索"
                style={{ width: "16px", height: "16px", display: "block" }}
              />
            </Link>
          </div>
        </div>

        {/* （传承人banner）- 独立白色卡片 */}
        <section style={{ padding: "16px 20px 0" }}>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "16/10",
              }}
            >
              {/* 背景图 */}
              <ImageWithFallback
                src={masterInfo.image}
                alt="郑益坤大师"
                placeholderStyle={{ background: "#C4BFB7" }}
              />
              
              {/* 左侧信息叠加层 */}
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "20px",
                  bottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  maxWidth: "55%",
                  zIndex: 2,
                }}
              >
                <div>
                  {/* 标签 */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "2px",
                      padding: "4px 10px",
                      background: "linear-gradient(135deg, #DFCAA9 0%, #E5DFD6 100%)",
                      borderRadius: "4px",
                      marginBottom: "12px",
                      lineHeight: 1,
                    }}
                  >
                    <img
                      src="/images/master-detail/medals.svg"
                      alt="非遗认证"
                      style={{ width: "16px", height: "16px", display: "block" }}
                    />
                    <span style={{ fontSize: "12px", color: "#81653E", fontWeight: 500 }}>
                      国家级非遗传承人
                    </span>
                  </div>

                  {/* 姓名 */}
                  <h2
                    style={{
                      fontSize: "32px",
                      fontWeight: "bold",
                      color: "#003C3A",
                      margin: "0 0 4px 0",
                      letterSpacing: "4px",
                    }}
                  >
                    郑益坤
                  </h2>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#003C3A",
                      margin: "0 0 16px 0",
                    }}
                  >
                    Master Zheng
                  </p>

                  {/* 分割线 */}
                  <div
                    style={{
                      width: "40px",
                      height: "2px",
                      background: "#707978",
                      marginBottom: "12px",
                    }}
                  />

                  {/* 副标签 */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "12px", color: "#707978" }}>
                      {masterInfo.subtitle}
                    </span>
                    <span style={{ fontSize: "12px", color: "#707978" }}>
                      {masterInfo.experience}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* （传承人简介、数据统计）- 白色卡片 */}
        <section style={{ padding: "16px 20px 0" }}>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            {/* 传承人简介标题 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#003C3A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/images/master-detail/master-intro.svg"
                  alt="传承人简介"
                  style={{ width: "16px", height: "16px", display: "block" }}
                />
              </div>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1F1F1F",
                  margin: 0,
                }}
              >
                传承人简介
              </h2>
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "#666",
                lineHeight: 1.8,
                margin: "0 0 20px 0",
              }}
            >
              {masterInfo.bio}
            </p>

            {/* 数据统计 */}
            <div
              style={{
                background: "#F5F3EE",
                borderRadius: "12px",
                padding: "16px",
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
                      color: "#003C3A",
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
            </div>
          </div>
        </section>

        {/* （匠人历程）- 白色卡片 */}
        <section style={{ padding: "16px 20px 0" }}>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            {/* 标题行 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#003C3A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/images/master-detail/artisan-journey.svg"
                  alt="匠人历程"
                  style={{ width: "16px", height: "16px", display: "block" }}
                />
              </div>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1F1F1F",
                  margin: 0,
                }}
              >
                匠人历程
              </h2>
            </div>

            <div style={{ position: "relative", paddingLeft: "20px" }}>
              {/* 时间线竖线 */}
              <div
                style={{
                  position: "absolute",
                  left: "5px",
                  top: "10px",
                  bottom: "10px",
                  width: "1px",
                  background: "#ECE5D8",
                }}
              />

              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  style={{
                    position: "relative",
                    marginBottom: index < timeline.length - 1 ? "24px" : "0",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  {/* 时间点 */}
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: index === 0 ? "#003C3A" : "#fff",
                      border: "2px solid #003C3A",
                      flexShrink: 0,
                      marginLeft: "-21px",
                    }}
                  />
                  
                  {/* 年份 */}
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#003C3A",
                      width: "40px",
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    {item.year}
                  </span>

                  {/* 标题和描述 */}
                  <div style={{ flex: 1 }}>
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#1F1F1F",
                        lineHeight: 1,
                      }}
                    >
                      {item.title}
                    </span>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#8B8B8B",
                        lineHeight: 1.5,
                        margin: "4px 0 0 0",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* （核心工艺）- 白色卡片 */}
        <section style={{ padding: "16px 20px 0" }}>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            {/* 标题行 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#003C3A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/images/master-detail/core-craft.svg"
                  alt="核心工艺"
                  style={{ width: "16px", height: "16px", display: "block" }}
                />
              </div>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1F1F1F",
                  margin: 0,
                }}
              >
                核心工艺
              </h2>
            </div>

            <h3
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#1F1F1F",
                margin: "0 0 12px 0",
              }}
            >
              {crafts[0].title}
            </h3>

            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#1a1a1a",
                marginBottom: "12px",
              }}
            >
              <img
                src={crafts[0].image}
                alt="核心工艺"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "#666",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {crafts[0].desc}
            </p>
          </div>
        </section>

        {/* （代表作品区域）- 白色卡片 */}
        <section style={{ padding: "16px 20px 0" }}>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            {/* 标题行 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#003C3A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/images/master-detail/representative-works.svg"
                  alt="代表作品"
                  style={{ width: "16px", height: "16px", display: "block" }}
                />
              </div>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1F1F1F",
                  margin: 0,
                }}
              >
                代表作品
              </h2>
            </div>

            <HorizontalCarousel
              className="master-works-carousel"
              slides={works.map((work) => ({
                key: work.id,
                node: (
                  <Link
                    href={`/product/${work.id}`}
                    style={{ textDecoration: "none", color: "inherit", display: "block" }}
                  >
                    <div
                      style={{
                        background: "#F5F3EE",
                        borderRadius: "16px",
                        overflow: "hidden",
                      }}
                    >
                      {/* 作品图片 */}
                      <div
                        style={{
                          width: "100%",
                          aspectRatio: "4/3",
                          background: "#1a1a1a",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src="/images/master-detail/representative-works-banner.svg"
                          alt={work.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                      </div>
                      {/* 作品信息 */}
                      <div style={{ padding: "12px" }}>
                        <h3
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "#1F1F1F",
                            margin: "0 0 4px 0",
                          }}
                        >
                          {work.name}
                        </h3>
                        <p
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#1F1F1F",
                            margin: "0 0 8px 0",
                          }}
                        >
                          {work.price}
                        </p>
                        {/* 标签 */}
                        <div style={{ display: "flex", gap: "6px" }}>
                          {work.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                padding: "2px 8px",
                                background: "#fff",
                                color: "#8B8B8B",
                                fontSize: "11px",
                                borderRadius: "4px",
                                border: "1px solid #ECE5D8",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ),
              }))}
            />
          </div>
        </section>

        {/* （向他学习）- 白色卡片 */}
        <section style={{ padding: "16px 20px 12px" }}>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            {/* 标题行 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#003C3A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
              <img
                  src="/images/master-detail/learn-from-him.svg"
                  alt="向他学习"
                  style={{ width: "16px", height: "16px", display: "block" }}
                />
              </div>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1F1F1F",
                  margin: 0,
                }}
              >
                向他学习
              </h2>
            </div>

            {/* 内容卡片 */}
            <div
              style={{
                background: "#eeeee9",
                borderRadius: "16px",
                padding: "20px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#8B8B8B",
                    margin: "0 0 6px 0",
                    letterSpacing: "1px",
                  }}
                >
                  {course.type}
                </p>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#1F1F1F",
                    margin: "0 0 6px 0",
                    letterSpacing: "2px",
                  }}
                >
                  {course.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#8B8B8B",
                    margin: 0,
                    letterSpacing: "1px",
                  }}
                >
                  {course.location}
                </p>
              </div>
              <Link
                href="/coming-soon"
                style={{
                  padding: "12px 28px",
                  background: "#003C3A",
                  color: "#fff",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontFamily: "'Noto Serif SC', serif",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  letterSpacing: "2px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                立即报名
              </Link>
            </div>
          </div>
        </section>

        <div style={{ height: "100px" }} />
      </main>

      <TabBar />
    </>
  );
}
