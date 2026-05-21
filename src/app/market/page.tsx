import Link from "next/link";
import TabBar from "../../components/TabBar";

const categories = ["全部", "陶瓷", "漆器", "石雕", "织染", "竹木"];

const products = [
  {
    id: "dehua-guanyin",
    tag: "大师作品",
    tagColor: "#003c3a",
    image: "/images/market/dehua-porcelain.svg",
    title: "德化白瓷·渡江观音",
    price: "¥12,800",
  },
  {
    id: "jian-kiln-tenmoku",
    tag: "正在直播",
    tagColor: "#c45c48",
    image: "/images/market/jianyao-black-glaze-hare-fur.svg",
    title: "建盏·兔毫束口",
    price: "¥3,600",
  },
];

export default function MarketPage() {
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
        {/* 顶部搜索栏 */}
        <div
          style={{
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* 网格图标 */}
          <Link href="/coming-soon" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/images/market/more.svg"
              alt="更多"
              style={{
                width: "20px",
                height: "20px",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* 搜索框 */}
          <Link
            href="/coming-soon"
            style={{
              flex: 1,
              height: "40px",
              background: "#fff",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              gap: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,.04)",
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: "14px", color: "#8b8b8b" }}>
               <img
              src="/images/market/search-icon.svg"
              alt="搜索"
              style={{
                width: "10px",
                height: "10px",
                objectFit: "contain",
              }}
            />
            <div style={{ flex: 1 }}></div>

            </span>
            <span
              style={{
                fontSize: "14px",
                color: "#8b8b8b",
              }}
            >
              搜索福建非遗瑰宝...
            </span>
          </Link>

          {/* 右侧图标 */}
          <div style={{ display: "flex", gap: "16px", fontSize: "20px" }}>
            <Link href="/coming-soon" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/images/market/scan.svg"
                alt="扫码"
                style={{
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                }}
              />
            </Link>
            <Link href="/coming-soon" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/images/market/message.svg"
                alt="消息"
                style={{
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                }}
              />
            </Link>
          </div>
        </div>

        {/* 分类标签 */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            padding: "16px 20px",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {categories.map((cat, index) => (
            <Link
              key={cat}
              href="/coming-soon"
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: "14px",
                color: index === 0 ? "#003c3a" : "#8b8b8b",
                fontWeight: index === 0 ? 600 : 400,
                position: "relative",
                whiteSpace: "nowrap",
                paddingBottom: "4px",
                textDecoration: "none",
              }}
            >
              {cat}
              {index === 0 && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "20px",
                    height: "2px",
                    background: "#003c3a",
                    borderRadius: "1px",
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Banner */}
        <section
          style={{
            margin: "0 20px",
            height: "380px",
            borderRadius: "24px",
            backgroundImage: "url('/images/market/market-banner.svg')",
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
              background:
                "linear-gradient(to top, rgba(0,0,0,.5) 0%, transparent 60%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "28px",
              left: "28px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "white",
            }}
          >
            <span style={{ fontSize: "12px", opacity: 0.9 }}>名匠杰作</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span
              style={{
                fontSize: "12px",
                letterSpacing: "0.15em",
                opacity: 0.9,
              }}
            >
              FEATURED
            </span>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "32px",
              left: "28px",
              right: "28px",
              color: "white",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                lineHeight: 1.3,
                marginBottom: "12px",
              }}
            >
              建盏·曜变天目
            </h2>

            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.8,
                opacity: 0.85,
                marginBottom: "20px",
              }}
            >
              入窑一色，出窑万彩。福建建阳水吉镇，千年流传的土与火之歌，茶席上的璀璨星辰。
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <Link
                href="/coming-soon"
                style={{
                  padding: "10px 24px",
                  background: "#e8e0d4",
                  color: "#1f1f1f",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontFamily: "'Noto Serif SC', serif",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                探索系列
              </Link>

              <span
                style={{
                  fontSize: "12px",
                  opacity: 0.7,
                }}
              >
                非遗传承人：林晓华 监制
              </span>
            </div>
          </div>
        </section>

        {/* 匠心甄选 */}
        <section style={{ padding: "32px 20px 0" }}>
          {/* 标题行 */}
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
                  marginBottom: "6px",
                }}
              >
                匠心甄选
              </h2>
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  color: "#8b8b8b",
                }}
              >
                CURATED COLLECTIONS
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "13px",
                color: "#1f1f1f",
              }}
            >
              <span>筛选</span>
              <span>☰</span>
            </div>
          </div>

          {/* 商品网格 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(0,0,0,.06)",
                  }}
                >
                  {/* 图片区域 */}
                  <div
                    style={{
                      position: "relative",
                      height: "200px",
                      background: "#1a1a1a",
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    {/* 标签 */}
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        padding: "4px 10px",
                        background: product.tagColor,
                        color: "#fff",
                        fontSize: "11px",
                        borderRadius: "4px",
                      }}
                    >
                      {product.tag}
                    </span>
                  </div>

                  {/* 信息 */}
                  <div style={{ padding: "14px" }}>
                    <h3
                      style={{
                        fontSize: "14px",
                        color: "#1f1f1f",
                        marginBottom: "8px",
                        lineHeight: 1.4,
                      }}
                    >
                      {product.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#1f1f1f",
                        fontWeight: 600,
                      }}
                    >
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* TabBar — 市集高亮 */}
      <TabBar activeTab="market" />
    </>
  );
}
