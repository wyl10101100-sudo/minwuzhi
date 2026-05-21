"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProductDetailPage() {
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    id: "jian-kiln-tenmoku",
    name: "建窑黑釉兔毫盏",
    series: "HERITAGE SERIES",
    price: 2800,
    originalPrice: 3600,
    refNo: "0914-JK",
    quote: "入窑一色，出窑万彩。",
    image: "/images/learn/jianyao-tenmoku.svg",
    params: {
      material: "高含铁量红土",
      glaze: "天然矿物黑釉",
      height: "5.8厘米",
      diameter: "口径 12.5厘米",
      origin: "福建南平水吉",
    },
    pattern: {
      title: "兔毫纹",
      titleEn: "HARE'S FUR PATTERN",
      description:
        "兔毫盏是建窑最负盛名的品种。于龙窑高温还原气氛下，胎土中的铁质析出，随着釉液流动形成如细密兔毛般的结晶，每一只都是火与土的孤品。",
      image: "/images/chanpinDetail/hare-fur-banner.svg",
    },
    craftsman: {
      name: "许家有",
      title: "福建省级非物质文化遗产传承人",
      avatar: "/images/chanpinDetail/xu-jiayou.svg",
      quote:
        "入窑一色，出窑万彩。一盏兔毫，不仅是茶器，更是1300度火光中淬炼出的灵魂。",
    },
    reviews: [
      {
        id: "r1",
        name: "Li Wei",
        avatar: "/images/profile-icon/user-avatar.svg",
        rating: 5,
        content:
          "釉面深邃，兔毫纹理清晰可见，在阳光下有流动的金属光泽，非常漂亮。",
        image: "/images/chanpinDetail/review-image.svg",
      },
    ],
    related: [
      {
        id: "w1",
        name: "油滴天目盏",
        price: "¥3,200",
        image: "/images/chanpinDetail/oil-spot-tenmoku.svg",
      },
      {
        id: "w2",
        name: "鹧鸪斑建盏",
        price: "¥2,400",
        image: "/images/chanpinDetail/partridge-feather-jian-zhan.svg",
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
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          position: "sticky",
          top: 0,
          background: "#F5F3EE",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <img src="/images/back-icon.svg" alt="返回" style={{ width: "24px", height: "24px" }} />
          </Link>
        </div>

        <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#003331", margin: 0 }}>
          建窑黑釉兔毫盏
        </h1>

        <div style={{ display: "flex", gap: "16px", alignItems: "center", justifyContent: "flex-end" }}>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
             <img
                src="/images/favorite.svg"
                alt="收藏"
                style={{ width: "22px", height: "22px", display: "block" }}
              />
          </button>
          <img src="/images/profile-icon/profile-search-icon.svg" alt="搜索" style={{ width: "22px", height: "22px" }} />
        </div>
      </div>

      {/* 产品大图 */}
      <section style={{ padding: " 0 20px 0px", textAlign: "center" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "100%",
            margin: "0 auto",
            position: "relative",         
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "2px",
            color: "#999",
            marginTop: "12px",
          }}
        >
          REF. NO. {product.refNo}
        </p>
      </section>

      {/* 产品名称 */}
      <section style={{ padding: "0px 0 20px 20px" }}>
        <h1
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            color: "#003c3a",
            marginBottom: "4px",
          }}
        >
          {product.name}
        </h1>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "2px",
            color: "#8b8b8b",
            marginBottom: "12px",
          }}
        >
          {product.series}
        </p>

        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "16px" }}>
          <span style={{ fontSize: "24px", fontWeight: "bold", color: "#003c3a" }}>
            ¥{product.price.toLocaleString()}
          </span>
          <span style={{ fontSize: "14px", color: "#999", textDecoration: "line-through" }}>
            ¥{product.originalPrice.toLocaleString()}
          </span>
        </div>

        <div
          style={{
            borderLeft: "2px solid #003c3a",
            paddingLeft: "12px",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              color: "#4a4a4a",
              fontStyle: "italic",
              lineHeight: 1.6,
            }}
          >
            "{product.quote}"
          </p>
        </div>
      </section>

     {/* 造物参数 */}
<section style={{ padding: "0 20px 24px" }}>
  <h2
    style={{
      fontSize: "20px",
      fontWeight: "bold",
      color: "#1f1f1f",
      marginBottom: "4px",
    }}
  >
    造物参数
  </h2>
  <p
    style={{
      fontSize: "11px",
      letterSpacing: "2px",
      color: "#8b8b8b",
      marginBottom: "20px",
    }}
  >
    SPECIFICATIONS
  </p>

  {/* 参数标签 - 改为带标题的卡片 */}
  <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
    <div
      style={{
        flex: 1,
        padding: "16px",
        background: "#fff",
        borderRadius: "12px",
      }}
    >
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "8px" }}>胎质</p>
      <p style={{ fontSize: "15px", color: "#003c3a", fontWeight: "500" }}>
        {product.params.material}
      </p>
    </div>
    <div
      style={{
        flex: 1,
        padding: "16px",
        background: "#fff",
        borderRadius: "12px",
      }}
    >
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "8px" }}>釉色</p>
      <p style={{ fontSize: "15px", color: "#003c3a", fontWeight: "500" }}>
        {product.params.glaze}
      </p>
    </div>
  </div>

  {/* 详细参数 - 改为带标题的卡片 */}
  <div style={{ display: "flex", gap: "12px" }}>
    <div
      style={{
        flex: 1,
        padding: "16px",
        background: "#fff",
        borderRadius: "12px",
      }}
    >
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "8px" }}>规格</p>
      <p style={{ fontSize: "15px", color: "#003c3a", fontWeight: "500", lineHeight: 1.6 }}>
        高 {product.params.height}
        <br />
        {product.params.diameter}
      </p>
    </div>
    <div
      style={{
        flex: 1,
        padding: "16px",
        background: "#fff",
        borderRadius: "12px",
      }}
    >
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "8px" }}>产地</p>
      <p style={{ fontSize: "15px", color: "#003c3a", fontWeight: "500" }}>
        {product.params.origin}
      </p>
    </div>
  </div>
</section>

       {/* 立即购买按钮 - 固定在屏幕底部 */}
<div style={{
  position: "fixed",
  bottom: "0",
  left: "0",
  right: "0",
  zIndex: 100,
  padding: "12px 20px 24px",
  background: "linear-gradient(to top, #F5F3EE 80%, transparent)",
}}>
 <Link
  href="/checkout"
  style={{
    textDecoration: "none",
    display: "block",
    position: "fixed",
    bottom: "20px",
    left: "30px",
    right: "30px",
    zIndex: 100,
    padding: "12px",
    background: "#003c3a",
    color: "#fff",
    borderRadius: "12px",
    textAlign: "center",
    fontWeight: "bold",
  }}
>
  立即购买
</Link>
</div>

       {/* 兔毫纹 */}
      <section style={{ padding: "0 20px 24px" }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#1f1f1f",
            marginBottom: "4px",
          }}
        >
          {product.pattern.title}
        </h2>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "2px",
            color: "#8b8b8b",
            marginBottom: "12px",
          }}
        >
          {product.pattern.titleEn}
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#4a4a4a",
            lineHeight: 1.8,
            marginBottom: "16px",
          }}
        >
          {product.pattern.description}
        </p>
        <div
          style={{
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <img
                src="/images/chanpinDetail/hare-fur-banner.svg"
                alt="搜索"
                style={{ width: "100%", height: "100%", marginRight: "8px" }}
              />
        </div>
      </section>

      {/* 匠心造物 */}
      <section style={{ padding: "0 20px 24px" }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#1f1f1f",
            marginBottom: "4px",
          }}
        >
          匠心造物
        </h2>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "2px",
            color: "#8b8b8b",
            marginBottom: "16px",
          }}
        >
          THE ART OF CRAFTSMANSHIP
        </p>

        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "24px 20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "12px",
              overflow: "hidden",
              margin: "0 auto 12px",
            }}
          >
           <img
                src="/images/chanpinDetail/xu-jiayou.svg"
                alt="搜索"
                style={{ width: "100%", height: "100%", marginRight: "8px" }}
              />
          </div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#1f1f1f",
              marginBottom: "8px",
            }}
          >
            {product.craftsman.name}
          </h3>
          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              background: "#003c3a",
              color: "#fff",
              fontSize: "11px",
              borderRadius: "12px",
              marginBottom: "12px",
            }}
          >
            {product.craftsman.title}
          </span>
          <p
            style={{
              fontSize: "14px",
              color: "#4a4a4a",
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
          >
            "{product.craftsman.quote}"
          </p>
        </div>
      </section>

      {/* 名家点评/买家评价 */}
      <section style={{ padding: "0 20px 24px" }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#1f1f1f",
            marginBottom: "4px",
          }}
        >
          名家点评/买家评价
        </h2>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "1px",
            color: "#8b8b8b",
            marginBottom: "16px",
          }}
        >
          EXPERT REVIEWS / BUYER REVIEWS
        </p>

        {product.reviews.map((review) => (
          <div
            key={review.id}
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "16px 20px",
              marginBottom: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
               <img
                src="/images/chanpinDetail/buyer-reviews.svg"
                alt="搜索"
                style={{ width: "100%", height: "100%", marginRight: "8px" }}
              />
              </div>
              <span style={{ fontSize: "14px", fontWeight: "bold", color: "#1f1f1f" }}>
                {review.name}
              </span>
              <div style={{ display: "flex", gap: "2px" }}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#003c3a">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "#4a4a4a",
                lineHeight: 1.6,
                marginBottom: "10px",
              }}
            >
              {review.content}
            </p>
            {review.image && (
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <img
                src="/images/chanpinDetail/review-image.svg"
                alt="搜索"
                style={{ width: "100%", height: "100%", marginRight: "8px" }}
              />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* 同系列瑰宝 */}
      <section style={{ padding: "0 20px 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          <div style={{ width: "20px", height: "1px", background: "#003c3a" }} />
          <span style={{ fontSize: "14px", color: "#003c3a" }}>同系列瑰宝</span>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {product.related.map((item) => (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              style={{
                flex: 1,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <div style={{ width: "100%", aspectRatio: "1", overflow: "hidden" }}>
                  <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
                </div>
                <div style={{ padding: "12px" }}>
                  <p style={{ fontSize: "14px", color: "#1f1f1f", marginBottom: "4px" }}>
                    {item.name}
                  </p>
                  <p style={{ fontSize: "14px", fontWeight: "bold", color: "#003c3a" }}>
                    {item.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 底部品牌信息 */}
      <section style={{ padding: "24px 20px", textAlign: "center" }}>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#003c3a",
            marginBottom: "8px",
          }}
        >
          山水闽韵
        </h3>
        <p
          style={{
            fontSize: "12px",
            color: "#999",
            lineHeight: 1.8,
            marginBottom: "16px",
          }}
        >
          守望福建非遗之美，
          <br />
          让传统匠心在现代生活中绽放。
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginBottom: "16px",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>

        <p style={{ fontSize: "10px", color: "#bbb" }}>
          © 2026 福建非物质文化遗产实验室 版权所有 | 中国福建
        </p>
      </section>
    </main>
  );
}
