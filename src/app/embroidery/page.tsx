import Link from "next/link";

const subCategories = ["全部", "畲族服饰", "惠安女服饰", "蟳埔女服饰", "金苍绣", "安溪蓝印花布"];
const masters = [
  { name: "林秀清", title: "泉州金苍绣技艺省级传承人", image: "/images/embroidery/lin-xiuqing.svg" },
  { name: "黄炯然", title: "安溪蓝印花布省级传承人", image: "/images/embroidery/huang-jiongran.svg" },
];
const products = [
  {
    tag: "非遗认证",
    subTag: "畲族传统服饰",
    image: "/images/embroidery/she-phoenix-crown.svg",
    title: "畲族凤凰装·凤冠霞帔",
    price: "¥ 3,600",
    desc: "手工苎布织染 · 凤凰图腾刺绣",
  },
];
const articles = [
  {
    num: "01",
    icon: "/images/ceramic/kiln-study-01-copy.svg",
    title: "何为\"苎布织染\"？",
    desc: "揭秘畲族千年苎布织染技艺：从田间苎麻到织机上的经纬交织，一针一线皆是传承...",
  },
  {
    num: "02",
     icon: "/images/ceramic/kiln-study-02-copy.svg",
    title: "金苍绣的鎏金之美",
    desc: "泉州金苍绣技艺：以金线盘绕、垫绣成形，在绸缎上织就出浮雕般的立体华彩...",
  },
  {
    num: "03",
    icon: "/images/ceramic/kiln-study-03.svg",
    title: "惠安女服饰的巾帼风采",
    desc: "黄斗笠、花头巾、短上衣、宽筒裤，惠安女服饰如何成为福建沿海最独特的文化符号...",
  },
];

export default function TextilePage() {
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
            织绣服饰
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
            backgroundImage: "url('/images/embroidery/she-phoenix-outfit.svg')",
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
    background: "linear-gradient(to top, rgba(0,0,0,.6) 0%, transparent 100%)",
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
              畲族
              <br />
              凤凰装
            </h2>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                opacity: 0.85,
                marginBottom: "20px",
              }}
            >
              凤凰装里藏乾坤，彩带织就千年情。一针一线绣出畲族女子的凤冠霞帔与民族记忆。
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

        {/* 织绣研学 */}
        <section style={{ padding: "0 20px" }}>
          <h2
            style={{
              fontSize: "24px",
              color: "#003c3a",
              marginBottom: "4px",
            }}
          >
            织绣研学
          </h2>
          <p
            style={{
              fontSize: "13px",
              color: "#8b8b8b",
              marginBottom: "20px",
            }}
          >
            探寻经纬之间的东方美学
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
                   <img src={article.icon} alt="" style={{ width: "24px", height: "24px" }} />
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
