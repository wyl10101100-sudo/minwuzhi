import Link from "next/link";

const subCategories = ["全部", "莆田纸扎", "厦门纸扎", "福州花灯", "泉州花灯", "莆田油纸灯笼"];
const masters = [
  { name: "黄清泉", title: "莆田梧塘黄氏纸扎省级传承人", image: "/images/profile-icon/user-avatar.svg" },
  { name: "陈赐勇", title: "厦门传统纸扎技艺省级传承人", image: "/images/profile-icon/user-avatar.svg" },
];
const products = [
  {
    tag: "非遗认证",
    subTag: "莆田原产地",
    image: "/images/master-detail/representative-works.svg",
    title: "莆田梧塘黄氏纸扎·龙凤花篮",
    price: "¥ 1,680",
    desc: "手工竹篾扎架 · 彩绘贴糊",
  },
];
const articles = [
  {
    num: "01",
    icon: "/images/ceramic/kiln-study-01-copy.svg",
    title: "何为\"竹篾扎架\"？",
    desc: "揭秘莆田梧塘黄氏纸扎：一根毛竹如何劈成细篾，扎成骨架，再经糊纸、彩绘，化作栩栩如生的龙凤花篮...",
  },
  {
    num: "02",
    icon: "/images/ceramic/kiln-study-02-copy.svg",
    title: "福州南后街花灯的千年灯火",
    desc: "福州南后街花灯制作工艺：以竹条为骨、彩纸为衣，每年正月元宵节，千家万户悬挂各式花灯，以示吉祥...",
  },
  {
    num: "03",
    icon: "/images/ceramic/kiln-study-03.svg",
    title: "泉州花灯的刻纸透光之美",
    desc: "泉州李尧宝刻纸技艺与花灯结合：以刻纸为灯面，烛光透过镂空花纹，在夜色中投射出精美的图案...",
  },
];

export default function PaperCraftPage() {
  return (
    <>
      <main
        style={{
          background: "#f5f3ee",
          minHeight: "100vh",
          paddingBottom: "120px",
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
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: "20px", color: "#003c3a" }}>
              <img
                src="/images/back-icon.svg"
                alt="返回icon"
                style={{
                  width: "28px",
                  height: "28px",
                  objectFit: "contain",
                }}
              />
            </span>
          </Link>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#003331", margin: 0 }}>
            纸扎糊作
          </h1>
          <Link href="/coming-soon" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/images/profile-icon/profile-search-icon.svg"
              alt="搜索"
              style={{ width: "18px", height: "18px" }}
            />
          </Link>
        </div>

        {/* 子分类标签 */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            padding: "0 20px 16px",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {subCategories.map((cat, index) => (
            <Link
              key={cat}
              href="/coming-soon"
              style={{
                flexShrink: 0,
                width: "90px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 20px",
                borderRadius: "12px",
                fontSize: "14px",
                whiteSpace: "nowrap",
                background: index === 0 ? "#fff" : "transparent",
                color: index === 0 ? "#003c3a" : "#8b8b8b",
                border: index === 0 ? "1px solid #e8e0d4" : "1px solid transparent",
                textDecoration: "none",
              }}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* 主 Banner */}
        <section
          style={{
            margin: "0 20px",
            height: "480px",
            borderRadius: "24px",
            backgroundImage: "url('/images/master-detail/representative-works-banner.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
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
              top: "40px",
              left: "24px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "rgba(255,255,255,.8)",
              fontSize: "12px",
            }}
          >
            <span>非遗传承</span>
            <span>|</span>
            <span>INTANGIBLE HERITAGE</span>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "24px",
              right: "24px",
              color: "#fff",
            }}
          >
            <h2
              style={{
                fontSize: "48px",
                lineHeight: 1.2,
                marginBottom: "12px",
              }}
            >
              莆田
              <br />
              纸扎
            </h2>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                opacity: 0.85,
                marginBottom: "20px",
              }}
            >
              竹篾为骨，彩纸为衣。一扎一糊间，寄托着对先人的追思与对节日的欢庆。
            </p>
            <Link href="/coming-soon" style={{ textDecoration: "none", display: "inline-block" }}>
              <button
                type="button"
                style={{
                  padding: "12px 32px",
                  background: "#003c3a",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontFamily: "'Noto Serif SC', serif",
                  cursor: "pointer",
                }}
              >
                探索珍藏
              </button>
            </Link>
          </div>
        </section>

        {/* 指示条 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            padding: "16px 0",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "4px",
              background: "#1f1f1f",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              width: "32px",
              height: "4px",
              background: "#d9d9d9",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* 当世名匠 */}
        <section style={{ padding: "0 20px 24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "20px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  color: "#003c3a",
                  marginBottom: "4px",
                }}
              >
                当世名匠
              </h2>
              <div
                style={{
                  width: "40px",
                  height: "3px",
                  background: "#003c3a",
                  borderRadius: "2px",
                }}
              />
            </div>
            <Link href="/coming-soon" style={{ fontSize: "13px", color: "#8b8b8b", textDecoration: "none" }}>
              查看全部 ›
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {masters.map((master) =>
              master.name === "郑益坤" ? (
                <Link
                  key={master.name}
                  href={`/master?name=${encodeURIComponent(master.name)}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    borderRadius: "16px",
                    overflow: "hidden",
                    marginBottom: "12px",
                  }}
                >
                  <img
                    src={master.image}
                    alt={master.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    color: "#1f1f1f",
                    marginBottom: "4px",
                  }}
                >
                  {master.name}
                </h3>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#8b8b8b",
                    textAlign: "center",
                  }}
                >
                  {master.title}
                </p>
                </Link>
              ) : (
                <Link
                  key={master.name}
                  href="/coming-soon"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "3/4",
                      borderRadius: "16px",
                      overflow: "hidden",
                      marginBottom: "12px",
                    }}
                  >
                    <img
                      src={master.image}
                      alt={master.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: "16px",
                      color: "#1f1f1f",
                      marginBottom: "4px",
                    }}
                  >
                    {master.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#8b8b8b",
                      textAlign: "center",
                    }}
                  >
                    {master.title}
                  </p>
                </Link>
              )
            )}
          </div>
        </section>

        {/* 甄选雅器 */}
        <section style={{ padding: "0 20px 24px" }}>
          <h2
            style={{
              fontSize: "24px",
              color: "#003c3a",
              marginBottom: "20px",
            }}
          >
            甄选雅器
          </h2>

          {products.map((product) => (
            <div
              key={product.title}
              style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      padding: "4px 10px",
                      background: "#003c3a",
                      color: "#fff",
                      fontSize: "11px",
                      borderRadius: "4px",
                    }}
                  >
                    {product.tag}
                  </span>
                  <span
                    style={{
                      padding: "4px 10px",
                      background: "rgba(255,255,255,.9)",
                      color: "#1f1f1f",
                      fontSize: "11px",
                      borderRadius: "4px",
                    }}
                  >
                    {product.subTag}
                  </span>
                </div>
              </div>
              <div style={{ padding: "16px" }}>
                <h3
                  style={{
                    fontSize: "16px",
                    color: "#1f1f1f",
                    marginBottom: "8px",
                  }}
                >
                  {product.title}
                </h3>
                <p
                  style={{
                    fontSize: "20px",
                    color: "#1f1f1f",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {product.price}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#8b8b8b",
                  }}
                >
                  {product.desc}
                </p>
              </div>
            </div>
          ))}

          {/* 轮播指示点 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "6px",
              padding: "16px 0",
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: "6px",
                  height: "6px",
                  background: i === 0 ? "#003c3a" : "#d9d9d9",
                  borderRadius: "50%",
                }}
              />
            ))}
          </div>
        </section>

        {/* 纸扎研学 */}
        <section style={{ padding: "0 20px" }}>
          <h2
            style={{
              fontSize: "24px",
              color: "#003c3a",
              marginBottom: "4px",
            }}
          >
            纸扎研学
          </h2>
          <p
            style={{
              fontSize: "13px",
              color: "#8b8b8b",
              marginBottom: "20px",
            }}
          >
            探寻竹纸之间的东方匠心
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {articles.map((article) => (
              <div
                key={article.num}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "20px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#f5f3ee",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                    }}
                  >
                    {article.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "32px",
                      color: "#e8e0d4",
                      fontWeight: 600,
                      lineHeight: 1,
                    }}
                  >
                    {article.num}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "16px",
                    color: "#1f1f1f",
                    marginBottom: "8px",
                  }}
                >
                  {article.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#8b8b8b",
                    lineHeight: 1.6,
                    marginBottom: "12px",
                  }}
                >
                  {article.desc}
                </p>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#003c3a",
                  }}
                >
                  阅读全文 →
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
