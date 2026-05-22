"use client";

import Link from "next/link";
import { useState } from "react";

export default function ArticleDetailPage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const article = {
    title: "海上丝绸之路",
    subtitle: "海丝遗韵：探寻福建非遗的远洋足迹",
    intro:
      "作为古代海上丝绸之路的起点，福建的手工艺品曾随大船远销重洋，成为连接东西方文明的纽带。",
    bannerImage: "/images/banner/fujian-banner.png",
    author: {
      name: "闽物志编辑部",
      title: "非遗文化研究者",
      avatar: "/images/zheng-yikun-watermark-free.svg",
    },
    sections: [
      {
        id: 1,
        title: "一.泉州港的离港",
        content:
          "宋元时期，泉州是世界最大的贸易港口之一。德化白瓷、建窑建盏、丝绸漆器从这里装船，驶向波斯、印度与非洲东海岸。",
        image: "/images/article-detail-images/quanzhou-maritime-silk-road-route.png",
        caption: "宋元时期泉州港的主要航线分布",
      },
      {
        id: 2,
        title: "二.器物作为文化使者",
        content:
          "不同于文字记录，器物是无声的外交官。一件建盏抵达异国之手，携带的不只是釉色，更是宋人的审美与日常。",
        image: "/images/article-detail-images/song-dynasty-jian-zhan-fragment.png",
        caption: "海外出土的宋代建盏碎片",
      },
      {
        id: 3,
        title: "三.当代非遗的远洋续篇",
        shortContent: `七百年后，建阳的窑火重燃。许家贵在废弃的水吉窑址旁建起新窑，用宋代配方复烧出第一件兔毫盏。釉色在1300度的烈焰中流转，铁晶如兔毫般细密析出，那一刻，他仿佛听见七百年前工匠的呼吸与窑火的低语。`,
        fullContent: `七百年后，建阳的窑火重燃。许家贵在废弃的水吉窑址旁建起新窑，用宋代配方复烧出第一件兔毫盏。釉色在1300度的烈焰中流转，铁晶如兔毫般细密析出，那一刻，他仿佛听见七百年前工匠的呼吸与窑火的低语。

——这不是复刻，是血脉的延续。

许家贵，建窑建盏烧制技艺第十三代传人。自幼随父识土辨釉，少年时便能在龙窑前静坐整日，只看火焰颜色判断窑温。其父临终前将一本手抄《窑谱》交予他，纸页泛黄，上面记着宋代建盏的七十二道工序，以及一句家训："火里求财，不可欺心。"

他守着水吉镇后井村的老龙窑，一守就是四十年。从选矿、淘洗、陈腐，到拉坯、修坯、素烧，再到施釉、装窑、控火，每一步都循古法。最难是烧窑——需连续投柴三天三夜，不能合眼，凭经验调节进氧量，让窑内形成恰到好处的还原气氛。稍有差池，满窑器物尽毁。

"一窑生，一窑死，一窑生不如死。" 这是建盏匠人间的老话。

2016年，他烧出一只曜变天目盏，釉面上浮现出蓝紫相间的虹彩光晕，如宇宙星云流转。日本藏家出价千万求购，他摇头："这是中国的火，中国的土，该留在中国。" 那只盏如今藏于福建省非遗博览苑，成为镇馆之宝。

许家贵的儿子许铭，大学毕业后回到窑口。父子俩在古法基础上改良釉料配比，使兔毫纹理更加清晰立体，同时降低烧成难度，让这门技艺得以传承推广。他们开设"建盏烧制体验课"，教都市青年拉坯施釉；与设计师合作，将建盏元素融入现代茶器、首饰、空间装饰。

"老手艺不是博物馆里的标本，要活在当下的生活里。" 许铭说。

如今，建阳水吉镇已有三百余家建盏作坊，年产值逾十亿。但许家贵的窑口始终保持着最传统的龙柴烧，每年只开三窑，每窑不过百件。那些带着火痕与窑变的建盏，被茶人称为"有温度的器物"——握在手中，仿佛能触到七百年前那团不曾熄灭的窑火。

入窑一色，出窑万彩。
火未灭，匠心在。`,
      },
    ],
    recommended: [
      {
        id: "r1",
        title: "化白瓷",
        subtitle: "凝脂如玉：德化白瓷的千年美学",
        image: "/images/banner/explore/dehua-porcelain.svg",
        href: "/article/dehua-porcelain",
      },
      {
        id: "r2",
        title: "传承人故事",
        subtitle: "郑益坤：漆器里的东方美学",
        image: "/images/zheng-yikun-watermark-free.svg",
        href: "/article/zheng-yikun",
      },
    ],
    itemsInText: [
      {
        id: "i1",
        name: "德化白瓷",
        subtitle: "凝脂如玉：德化白瓷的千年美学",
        image: "/images/banner/explore/dehua-porcelain.svg",
        price: "¥12,800",
        href: "/product/dehua-guanyin",
      },
    ],
  };

  return (
    <main
      style={{
        background: "#F5F3EE",
        minHeight: "100vh",
        paddingBottom: "24px",
        fontFamily: "'Noto Serif SC', serif",
      }}
    >
      {/* 顶部导航 */}
      <div
        style={{
          padding: "12px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          background: "#F5F3EE",
          zIndex: 10,
        }}
      >
        <Link href="/">
          <img src="/images/back-icon.svg" alt="返回" style={{ width: "24px", height: "24px" }} />
        </Link>
        <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#003331", margin: 0 }}>
          {article.title}
        </h1>
        <Link href="/coming-soon" style={{ display: "flex", alignItems: "center" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#003c3a" strokeWidth="1.5">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </Link>
      </div>

      {/* Banner */}
      <section style={{ padding: "0 20px 20px" }}>
        <div
          style={{
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={article.bannerImage}
            alt={article.title}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              textAlign: "right",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#fff",
                textShadow: "0 2px 4px rgba(0,0,0,.3)",
                marginBottom: "4px",
              }}
            >
              福建非遗
            </p>
            <p
              style={{
                fontSize: "10px",
                color: "#fff",
                opacity: 0.9,
                letterSpacing: "1px",
              }}
            >
              FUJIAN INTANGIBLE HERITAGE
            </p>
          </div>
        </div>
      </section>

      {/* 文章标题 */}
      <section style={{ padding: "0 20px 20px" }}>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#1f1f1f",
            marginBottom: "12px",
            lineHeight: 1.4,
          }}
        >
          {article.subtitle}
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#666",
            lineHeight: 1.8,
          }}
        >
          {article.intro}
        </p>
      </section>

      {/* 分隔线 */}
      <div
        style={{
          height: "1px",
          background: "#e8e0d4",
          margin: "0 20px 20px",
        }}
      />

      {/* 文章章节 */}
      {article.sections.map((section) => (
        <section key={section.id} style={{ padding: "0 20px 24px" }}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1f1f1f",
              marginBottom: "12px",
            }}
          >
            {section.title}
          </h3>

          {/* 第三章特殊处理：渐变折叠效果 */}
          {section.id === 3 ? (
            <div style={{ position: "relative" }}>
              <div
                style={{
                  maxHeight: isExpanded ? "none" : "120px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    color: "#4a4a4a",
                    lineHeight: 1.8,
                    marginBottom: "16px",
                  }}
                >
                  {isExpanded ? section.fullContent : section.shortContent}
                </p>
                {/* 渐变遮罩 */}
                {!isExpanded && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "80px",
                      background: "linear-gradient(to bottom, transparent, #F5F3EE)",
                    }}
                  />
                )}
              </div>
              
              {/* 查看全文按钮 */}
              {!isExpanded && (
                <div style={{ textAlign: "center", marginTop: "-20px", position: "relative", zIndex: 1 }}>
                  <button
                    onClick={() => setIsExpanded(true)}
                    style={{
                      padding: "10px 24px",
                      background: "#003c3a",
                      color: "#fff",
                      border: "none",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontFamily: "'Noto Serif SC', serif",
                      cursor: "pointer",
                    }}
                  >
                    查看全文
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p
              style={{
                fontSize: "15px",
                color: "#4a4a4a",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              {section.content}
            </p>
          )}

          {section.image && (
            <>
              <div
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "8px",
                }}
              >
                <img
                  src={section.image}
                  alt={section.caption}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "#999",
                  textAlign: "center",
                  marginBottom: "16px",
                }}
              >
                {section.caption}
              </p>
            </>
          )}
        </section>
      ))}

      {/* 作者信息 */}
      <section
        style={{
          padding: "20px",
          margin: "0 20px 24px",
          background: "#fff",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={article.author.avatar}
              alt={article.author.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#1f1f1f",
                marginBottom: "2px",
              }}
            >
              {article.author.name}
            </p>
            <p style={{ fontSize: "12px", color: "#999" }}>
              {article.author.title}
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsFollowing(!isFollowing)}
          style={{
            padding: "6px 16px",
            background: isFollowing ? "#e8e0d4" : "#003c3a",
            color: isFollowing ? "#666" : "#fff",
            border: "none",
            borderRadius: "16px",
            fontSize: "13px",
            fontFamily: "'Noto Serif SC', serif",
            cursor: "pointer",
          }}
        >
          {isFollowing ? "已关注" : "关注"}
        </button>
      </section>

      {/* 推荐阅读 */}
      <section style={{ padding: "0 20px 24px" }}>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#1f1f1f",
            marginBottom: "4px",
          }}
        >
          推荐阅读
        </h2>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "2px",
            color: "#8b8b8b",
            marginBottom: "16px",
          }}
        >
          RECOMMENDED READING
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {article.recommended.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              style={{
                display: "flex",
                gap: "12px",
                textDecoration: "none",
                color: "inherit",
                background: "#fff",
                borderRadius: "12px",
                padding: "12px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#1f1f1f",
                    marginBottom: "6px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.5 }}>
                  {item.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 文中器物 */}
      <section style={{ padding: "0 20px 24px" }}>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#1f1f1f",
            marginBottom: "4px",
          }}
        >
          文中器物
        </h2>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "2px",
            color: "#8b8b8b",
            marginBottom: "16px",
          }}
        >
          ITEMS IN THE TEXT
        </p>

        {article.itemsInText.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "#fff",
              borderRadius: "12px",
              padding: "12px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1f1f1f",
                  marginBottom: "4px",
                }}
              >
                {item.name}
              </h3>
              <p style={{ fontSize: "13px", color: "#666", marginBottom: "4px" }}>
                {item.subtitle}
              </p>
            </div>
            <Link
              href={item.href}
              style={{
                padding: "6px 16px",
                background: "#003c3a",
                color: "#fff",
                borderRadius: "16px",
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              购买
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
