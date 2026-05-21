"use client";

import Link from "next/link";
import TabBar from "../../components/TabBar";
import { HorizontalCarousel } from "../../components/HorizontalCarousel";

const learnCategories = [
  "全部",
  "窑火陶瓷",
  "织绣服饰",
  "编作枋木",
  "纸扎制作",
  "雕錾髹饰",
];

const courseSections = [
  {
    id: "online",
    title: "线上课程",
    en: "CURATED LEARNING",
    image: "/images/learn/jianyao-tenmoku.svg",
    main: "了解建盏：",
    sub: "建盏基础课-何为建盏？",
  },
  {
    id: "offline",
    title: "线下课程",
    en: "FEATURED WORKSHOPS",
    image: "/images/learn/she-heritage-apparel.svg",
    main: "衣承畲韵：",
    sub: "畲东畲族服饰制作体验",
  },
];

const activityItems = [
  {
    id: "puppet",
    image: "/images/learn/quanzhou-puppet-head-carving.svg",
    title1: "泉州木偶头",
    title2: "雕刻公开课",
    sub: "非遗传承人手把手教你勾勒木偶头的神韵",
    action: "立即预约",
  },
  {
    id: "jade",
    image: "/images/learn/jade-tone-ware.svg",
    title1: "玉色入器",
    title2: "",
    sub: "粉玉镶嵌技艺体验工坊",
    action: "立即预约",
  },
];

function courseSlideNode(
  image: string,
  imageAlt: string,
  main: string,
  sub: string,
  href: string,
) {
  return (
    <Link href={href} style={{ textDecoration: "none", display: "block", color: "inherit" }}>
      <div
        style={{
          width: "100%",
          aspectRatio: "16/10",
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={image}
          alt={imageAlt}
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
            background: "linear-gradient(to top, rgba(0,0,0,.6) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "16px",
            right: "16px",
            bottom: "16px",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "6px",
                lineHeight: 1.2,
                textShadow: "0 2px 4px rgba(0,0,0,.3)",
              }}
            >
              {main}
            </h3>
            <p
              style={{
                fontSize: "13px",
                opacity: 0.9,
                lineHeight: 1.5,
                marginBottom: 0,
                textShadow: "0 1px 3px rgba(0,0,0,.35)",
              }}
            >
              {sub}
            </p>
          </div>
          <div
            style={{
              height: "32px",
              padding: "0 14px",
              borderRadius: "16px",
              background: "#003C3A",
              color: "#fff",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              flexShrink: 0,
              cursor: "pointer",
              fontFamily: "'Noto Serif SC', serif",
            }}
          >
            立即学习
            <span
              style={{
                display: "inline-flex",
                width: "16px",
                height: "16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,.16)",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
                fontSize: "11px",
              }}
            >
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function LearnPage() {
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
        <div style={{ padding: "12px 20px 0" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <img
              src="/images/market/more.svg"
              alt="菜单"
              style={{ width: "20px", height: "20px", display: "block" }}
            />

            <Link
              href="/coming-soon"
              style={{
                flex: 1,
                margin: "0 14px",
                height: "40px",
                borderRadius: "20px",
                background: "#F9F7F2",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                border: "1px solid #ECE5D8",
                textDecoration: "none",
              }}
            >
              <img
                src="/images/market/search-icon.svg"
                alt="搜索"
                style={{ width: "16px", height: "16px", marginRight: "8px", display: "block" }}
              />
              <span style={{ fontSize: "13px", color: "#9B9B9B" }}>
                搜索福建非遗课程...
              </span>
            </Link>

            <div style={{ display: "flex", gap: "14px" }}>
              <Link href="/coming-soon" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/images/market/scan.svg"
                  alt="扫描"
                  style={{ width: "20px", height: "20px", display: "block" }}
                />
              </Link>
              <Link href="/coming-soon" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/images/market/message.svg"
                  alt="消息"
                  style={{ width: "20px", height: "20px", display: "block" }}
                />
              </Link>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "24px",
              overflowX: "auto",
              paddingBottom: "8px",
            }}
          >
            {learnCategories.map((item, i) => (
              <Link
                key={item}
                href="/coming-soon"
                style={{
                  fontSize: "14px",
                  color: i === 0 ? "#003C3A" : "#666",
                  position: "relative",
                  whiteSpace: "nowrap",
                  paddingBottom: "8px",
                  flexShrink: 0,
                  textDecoration: "none",
                }}
              >
                {item}
                {i === 0 && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      background: "#003C3A",
                      borderRadius: "10px",
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* 今日课程推荐 - 白色卡片 */}
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
                  今日课程推荐
                </h2>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#8B8B8B",
                    letterSpacing: "2px",
                    margin: 0,
                  }}
                >
                  TODAY'S CURATION
                </p>
              </div>
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
                查看全部
                <span>→</span>
              </Link>
            </div>

            <HorizontalCarousel
              className="explore-h-carousel"
              slides={[
                {
                  key: "wood",
                  node: (
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "16/9",
                        borderRadius: "16px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src="/images/learn/wood-traces.svg"
                        alt="木间刻痕"
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
                            "linear-gradient(to top, rgba(0,0,0,.55), transparent)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: "16px",
                          right: "16px",
                          bottom: "16px",
                          color: "#fff",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                        }}
                      >
                        <div>
                          <h3
                            style={{
                              fontSize: "22px",
                              fontWeight: "bold",
                              lineHeight: 1.2,
                              marginBottom: "6px",
                              textShadow: "0 2px 4px rgba(0,0,0,.3)",
                            }}
                          >
                            木间刻痕：
                          </h3>
                          <p
                            style={{
                              fontSize: "13px",
                              marginBottom: 0,
                              opacity: 0.95,
                              textShadow: "0 1px 3px rgba(0,0,0,.35)",
                            }}
                          >
                            林建军老师木雕体验工坊
                          </p>
                        </div>
                        <Link
                          href="/coming-soon"
                          style={{
                            height: "32px",
                            padding: "0 14px",
                            borderRadius: "16px",
                            background: "#003C3A",
                            color: "#fff",
                            fontSize: "12px",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            flexShrink: 0,
                            cursor: "pointer",
                            fontFamily: "'Noto Serif SC', serif",
                            textDecoration: "none",
                          }}
                        >
                          立即学习
                          <span
                            style={{
                              display: "inline-flex",
                              width: "16px",
                              height: "16px",
                              borderRadius: "999px",
                              background: "rgba(255,255,255,.16)",
                              alignItems: "center",
                              justifyContent: "center",
                              lineHeight: 1,
                              fontSize: "11px",
                            }}
                          >
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </section>

        {/* 线上课程 & 线下课程 - 白色卡片 */}
        {courseSections.map((section) => (
          <section key={section.id} style={{ padding: "16px 20px 0" }}>
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
                    {section.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#8B8B8B",
                      letterSpacing: "2px",
                      margin: 0,
                    }}
                  >
                    {section.en}
                  </p>
                </div>
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
                  查看全部
                  <span>→</span>
                </Link>
              </div>

              <HorizontalCarousel
                className="explore-h-carousel"
                slides={[
                  {
                    key: section.id,
                    node: courseSlideNode(
                      section.image,
                      section.title,
                      section.main,
                      section.sub,
                      section.id === "online" ? "/learn/online" : "/learn/c1",
                    ),
                  },
                ]}
              />
            </div>
          </section>
        ))}

        {/* 非遗名家 - 白色卡片 */}
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
                  非遗名家
                </h2>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#8B8B8B",
                    letterSpacing: "2px",
                    margin: 0,
                  }}
                >
                  MASTER ARTISANS
                </p>
              </div>
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
                跟着传承人学
                <span>→</span>
              </Link>
            </div>

            <HorizontalCarousel
              className="explore-h-carousel"
              slides={[
                {
                  key: "zhengyikun",
                  node: (
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
                          src="/images/zheng-yikun-watermark-free.svg"
                          alt="郑益坤"
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
                        郑益坤
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
                        福建省级非物质文化遗产传承人
                        <br />
                        福州脱胎漆器髹饰技艺代表性传承人
                      </p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </section>

        {/* 活动预约 - 白色卡片 */}
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
                  活动预约
                </h2>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#8B8B8B",
                    letterSpacing: "2px",
                    margin: 0,
                  }}
                >
                  EVENT RESERVATION
                </p>
              </div>
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
                查看全部
                <span>→</span>
              </Link>
            </div>

            <HorizontalCarousel
              className="explore-h-carousel"
              slides={activityItems.map((item) => ({
                key: item.id,
                node: (
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16/10",
                      borderRadius: "16px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title1}
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
                          "linear-gradient(to top, rgba(0,0,0,.55), transparent)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "16px",
                        right: "16px",
                        bottom: "16px",
                        color: "#fff",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            lineHeight: 1.15,
                            marginBottom: "6px",
                            textShadow: "0 2px 4px rgba(0,0,0,.3)",
                          }}
                        >
                          <span style={{ display: "block" }}>{item.title1}</span>
                          {item.title2 ? (
                            <span style={{ display: "block" }}>{item.title2}</span>
                          ) : null}
                        </h3>
                        <p
                          style={{
                            fontSize: "13px",
                            marginBottom: 0,
                            opacity: 0.95,
                            textShadow: "0 1px 3px rgba(0,0,0,.35)",
                          }}
                        >
                          {item.sub}
                        </p>
                      </div>
                      <Link
                        href="/coming-soon"
                        style={{
                          height: "32px",
                          padding: "0 14px",
                          borderRadius: "16px",
                          background: "#003C3A",
                          color: "#fff",
                          fontSize: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          flexShrink: 0,
                          cursor: "pointer",
                          fontFamily: "'Noto Serif SC', serif",
                          textDecoration: "none",
                        }}
                      >
                        {item.action}
                        <span
                          style={{
                            display: "inline-flex",
                            width: "16px",
                            height: "16px",
                            borderRadius: "999px",
                            background: "rgba(255,255,255,.16)",
                            alignItems: "center",
                            justifyContent: "center",
                            lineHeight: 1,
                            fontSize: "11px",
                          }}
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
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
