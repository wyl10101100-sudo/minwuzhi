"use client";

import Link from "next/link";
import TabBar from "../components/TabBar";
import KingKongGrid from "../components/KingKongGrid";
import { HorizontalCarousel } from "../components/HorizontalCarousel";

/** 与博览「非遗名家」一致，供首页「今日匠人」复用 */
const todayArtisans = [
  {
    id: "zhengyikun",
    name: "郑益坤",
    title: "福建省级非物质文化遗产传承人",
    subTitle: "福州脱胎漆器髹饰技艺代表性传承人",
    image: "/images/zheng-yikun-watermark-free.svg",
  },
  {
    id: "xujiayou",
    name: "许家有",
    title: "国家级非物质文化遗产传承人",
    subTitle: "建窑建盏烧制技艺代表性传承人",
    image: "/images/ceramic/xu-jiayou.svg",
  },
  {
    id: "puppet-head",
    name: "黄清辉",
    title: "福建省级非物质文化遗产传承人",
    subTitle: "泉州木偶头雕刻技艺代表性传承人",
    image: "/images/learn/quanzhou-puppet-head-carving.svg",
  },
];

/** 与传习页课程/活动素材一致，供「热门研学」复用 */
const hotStudySlides = [
  {
    id: "wood",
    image: "/images/banner/explore/quanzhou-puppet-show.svg",
    title: "木间刻痕：",
    sub: "林建军老师木雕体验工坊",
  },
  {
    id: "online",
    image: "/images/learn/jianyao-tenmoku.svg",
    title: "了解建盏：",
    sub: "建盏基础课-何为建盏？",
  },
  {
    id: "offline",
    image: "/images/learn/she-heritage-apparel.svg",
    title: "衣承畲韵：",
    sub: "畲东畲族服饰制作体验",
  },
  {
    id: "puppet",
    image: "/images/learn/quanzhou-puppet-head-carving.svg",
    title: "泉州木偶头雕刻公开课",
    sub: "非遗传承人手把手教你勾勒木偶头",
  },
];

export default function Home() {
  const zhengDetailHref = "/master/zhengyikun";
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
          <Link
            href="/coming-soon"
            style={{
              fontSize: "20px",
              color: "#003C3A",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <img
              src="/images/profile-icon/c:\Users\Lenovo\Desktop\code demo\profile-menu-icon.svg.svg"
              alt="菜单"
              style={{ width: "18px", height: "18px", display: "block" }}
            />
          </Link>

          <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#003331", margin: 0 }}>
            闽物志
          </h1>

          <Link
            href="/coming-soon"
            style={{
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/images/profile-icon/profile-search-icon.svg"
              alt="搜索"
              style={{ width: "18px", height: "18px", display: "block" }}
            />
          </Link>
        </div>

        {/* Banner - 独立白色卡片 */}
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
                aspectRatio: "4/5",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/banner/home-banner-photo.svg"
                alt="德化白瓷"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,.55) 0%, rgba(0,0,0,.15) 50%, transparent 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "28px",
                  left: "24px",
                  right: "24px",
                  color: "white",
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.35em",
                    marginBottom: "12px",
                    opacity: 0.85,
                  }}
                >
                  HERITAGE SPOTLIGHT
                </p>
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    lineHeight: 1.3,
                    marginBottom: "12px",
                  }}
                >
                  德化白瓷：
                  <br />
                  凝脂如玉
                </h2>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.8,
                    opacity: 0.9,
                    margin: 0,
                  }}
                >
                  World-renowned Blanc de Chine, capturing the ethereal beauty of
                  Fujian craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 分类 */}
        <KingKongGrid />

        {/* 文化志 - 白色卡片 */}
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
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#1F1F1F",
                    margin: "0 0 2px 0",
                  }}
                >
                  文化志
                </h2>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#8B8B8B",
                    letterSpacing: "2px",
                    margin: 0,
                  }}
                >
                  CULTURAL INSIGHTS
                </p>
              </div>
              <Link
                href="/explore/maritime-silk-road"
                style={{
                  fontSize: "13px",
                  color: "#666",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                立即了解
                <span>→</span>
              </Link>
            </div>

            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#1a1a1a",
              }}
            >
              <img
                src="/images/banner/fujian-banner.png"
                alt="福建非遗"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </section>

        {/* 今日匠人 - 白色卡片 */}
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
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#1F1F1F",
                    margin: "0 0 2px 0",
                  }}
                >
                  今日匠人
                </h2>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#8B8B8B",
                    letterSpacing: "2px",
                    margin: 0,
                  }}
                >
                  ARTISANS TODAY
                </p>
              </div>
              <Link
                href={zhengDetailHref}
                style={{
                  fontSize: "13px",
                  color: "#666",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                }}
              >
                跟着传承人学
                <span>→</span>
              </Link>
            </div>

            <HorizontalCarousel
              className="explore-h-carousel"
              slides={todayArtisans.map((master) => ({
                // 目前仅郑益坤有传承人详情页，其余跳转 coming-soon
                // 说明：用 id 判断，避免中文名变更导致逻辑失效
                key: master.id,
                node: (
                  <Link
                    href={master.id === "zhengyikun" ? zhengDetailHref : "/coming-soon"}
                    style={{ textDecoration: "none", display: "block", cursor: "pointer" }}
                  >
                    <div
                      style={{
                        background: "#F5F3EE",
                        borderRadius: "16px",
                        overflow: "hidden",
                        textAlign: "center",
                        paddingBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          aspectRatio: "4/3",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <img
                          src={master.image}
                          alt={master.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                          }}
                        />
                      </div>
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "#003C3A",
                          marginTop: "14px",
                          marginBottom: "6px",
                        }}
                      >
                        {master.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#666",
                          lineHeight: 1.6,
                          margin: 0,
                          padding: "0 12px",
                        }}
                      >
                        {master.title}
                        <br />
                        {master.subTitle}
                      </p>
                    </div>
                  </Link>
                ),
              }))}
            />
          </div>
        </section>

        {/* 热门研学 - 白色卡片 */}
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
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#1F1F1F",
                    margin: "0 0 2px 0",
                  }}
                >
                  热门研学
                </h2>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#8B8B8B",
                    letterSpacing: "2px",
                    margin: 0,
                  }}
                >
                  POPULAR STUDY
                </p>
              </div>
              <Link
                href="/learn"
                style={{
                  fontSize: "13px",
                  color: "#666",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                查看全部
                <span>→</span>
              </Link>
            </div>

            <HorizontalCarousel
              className="explore-h-carousel"
              slides={hotStudySlides.map((item) => ({
                key: item.id,
                node: (
                  <Link
                    href={item.id === "online" ? "/learn/online" : "/learn"}
                    style={{
                      textDecoration: "none",
                      display: "block",
                      color: "inherit",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "16/9",
                        borderRadius: "16px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to right, rgba(0,0,0,.4) 0%, transparent 60%)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: "20px",
                          bottom: "20px",
                          right: "20px",
                          color: "#fff",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            marginBottom: "6px",
                            textShadow: "0 2px 4px rgba(0,0,0,.3)",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "13px",
                            lineHeight: 1.5,
                            margin: 0,
                            opacity: 0.95,
                            textShadow: "0 1px 3px rgba(0,0,0,.35)",
                          }}
                        >
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  </Link>
                ),
              }))}
            />
          </div>
        </section>

        <div style={{ height: "100px" }} />
      </main>

      <TabBar />
    </>
  );
}
