"use client";

import Link from "next/link";
import TabBar from "../../components/TabBar";
import { HorizontalCarousel } from "../../components/HorizontalCarousel";

const categories = ["全部", "非遗项目", "传承人", "云展馆", "动态资讯"];

// 今日推荐 Banner（横向滑动轮播）
const todayBanners = [
  {
    id: "maritime-silk",
    title: "海上丝绸之路专题",
    image: "/images/banner/explore/maritime-silk-road-topic.svg",
  },
  {
    id: "tulou",
    title: "福建土楼文化专题",
    image: "/images/banner/explore/fujian-tulou-culture-topic.svg",
  },
  {
    id: "wuyi-tea",
    title: "武夷岩茶",
    image: "/images/banner/explore/wuyi-rock-tea.svg",
  },
  {
    id: "puppet",
    title: "泉州木偶戏",
    image: "/images/banner/explore/quanzhou-puppet-show.svg",
  },
  {
    id: "shell-carving",
    title: "福建东山贝雕",
    image: "/images/banner/explore/fujian-dongshan-shell-carving.svg",
  },
  {
    id: "bamboo-weave",
    title: "武夷山竹编",
    image: "/images/banner/explore/wuyi-bamboo-weaving.svg",
  },
];

// 非遗瑰宝项目
const heritageProjects = [
  {
    id: "wuyi-rock-tea",
    name: "武夷岩茶",
    desc: "大红袍制作技艺，乌龙茶之极品，蕴含山骨风华。",
    image: "/images/banner/explore/wuyi-rock-tea.svg",
    isLarge: true,
  },
  {
    id: "quanzhou-puppet",
    name: "泉州木偶戏",
    desc: "悬丝傀儡，指尖乾坤。古老剧种，入选联合国教科文组织人类非物质文化遗产。",
    image: "/images/banner/explore/quanzhou-puppet-show.svg",
    isLarge: false,
  },
  {
    id: "dehua-white-porcelain",
    name: "德华白瓷",
    desc: "中国白，温润如玉。如世界陶瓷之都，千年窑火不灭。",
    image: "/images/banner/explore/dehua-porcelain.svg",
    isLarge: false,
  },
];

/** 轮播顺序：大图项在前，其余在后 */
const heritageCarouselProjects = [
  ...heritageProjects.filter((p) => p.isLarge),
  ...heritageProjects.filter((p) => !p.isLarge),
];

// 非遗名家
const masterArtisans = [
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

// 海丝遗韵文章
const maritimeArticles = [
  {
    tag: "海上丝绸之路",
    title: "泉州港：东方海洋文明的交汇之地",
    desc: "从宋元时期的万国商港，到海丝航路的重要节点，泉州以开放包容的海洋文化，见证了东西方文明交汇的繁盛岁月。",
    image: "/images/banner/explore/maritime-silk-road.svg",
  },
];

export default function ExplorePage() {
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
        {/* 顶部导航 */}
        <div style={{ padding: "12px 20px 0" }}>
          {/* 搜索栏 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <Link href="/coming-soon" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/images/market/more.svg"
                alt="菜单"
                style={{ width: "20px", height: "20px", display: "block" }}
              />
            </Link>

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
                搜索福建非遗瑰宝...
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

          {/* 分类标签 */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              overflowX: "auto",
              paddingBottom: "8px",
            }}
          >
            {categories.map((item, i) => (
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

        {/* 今日推荐 - 白色卡片 */}
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
                  今日推荐
                </h2>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#8B8B8B",
                    letterSpacing: "2px",
                    margin: 0,
                  }}
                >
                  {"TODAY'S LEARNING"}
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
                立即了解
                <span>→</span>
              </Link>
            </div>

            <HorizontalCarousel
              className="explore-h-carousel"
              slides={todayBanners.map((item) => ({
                key: item.id,
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
                        color: "#fff",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          marginBottom: "4px",
                          textShadow: "0 2px 4px rgba(0,0,0,.3)",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ),
              }))}
            />
          </div>
        </section>

        {/* 非遗瑰宝 - 白色卡片 */}
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
                  非遗瑰宝
                </h2>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#8B8B8B",
                    letterSpacing: "2px",
                    margin: 0,
                  }}
                >
                  HERITAGE PROJECTS
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
              slides={heritageCarouselProjects.map((project) => ({
                key: project.id,
                node: (
                  <Link
                    href="/coming-soon"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "16/10",
                        borderRadius: "16px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.name}
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
                            "linear-gradient(to top, rgba(0,0,0,.6) 0%, transparent 50%)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: "16px",
                          bottom: "16px",
                          right: "16px",
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
                          {project.name}
                        </h3>
                        <p
                          style={{
                            fontSize: "13px",
                            opacity: 0.9,
                            lineHeight: 1.5,
                            margin: 0,
                            textShadow: "0 1px 3px rgba(0,0,0,.35)",
                          }}
                        >
                          {project.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                ),
              }))}
            />
          </div>
        </section>

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
              slides={masterArtisans.map((master) => ({
                key: master.id,
                node:
                  master.name === "郑益坤" ? (
                    <Link
                      href={`/master?name=${encodeURIComponent(master.name)}`}
                      style={{ textDecoration: "none", display: "block" }}
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
                  ) : (
                    <Link href="/coming-soon" style={{ textDecoration: "none", display: "block" }}>
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

        {/* 海丝遗韵 - 白色卡片 */}
        <Link 
          href="/explore/maritime-silk-road" 
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
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
                    海丝遗韵
                  </h2>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#8B8B8B",
                      letterSpacing: "2px",
                      margin: 0,
                    }}
                  >
                    MARITIME HERITAGE
                  </p>
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#666",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  阅读全文
                  <span>→</span>
                </div>
              </div>

              {maritimeArticles.map((article) => (
                <div
                  key={article.title}
                  style={{
                    background: "#F5F3EE",
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16/9",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                  <div style={{ padding: "16px" }}>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#8B8B8B",
                        marginBottom: "8px",
                      }}
                    >
                      {article.tag}
                    </p>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#1F1F1F",
                        lineHeight: 1.4,
                        marginBottom: "10px",
                      }}
                    >
                      {article.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {article.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Link>

        <div style={{ height: "100px" }} />
      </main>

      <TabBar />
    </>
  );
}
