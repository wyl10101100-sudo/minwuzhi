import Link from "next/link";


const recommendations = [
  {
    image: "/images/my-orders/explore-craftsmanship.svg",
    title: "探索匠心",
    desc: "发现德化白瓷的温润如玉",
  },
  {
    image: "/images/my-orders/tea-charm-orient.svg",
    title: "茶韵东方",
    desc: "寻访武夷山的每一缕茶香",
  },
];

export default function OrdersPage() {
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
          <Link href="/profile" style={{ textDecoration: "none" }}>
            <img
              src="/images/back-icon.svg"
              alt="返回"
              style={{ width: "28px", height: "28px" }}
            />
          </Link>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#003331", margin: 0 }}>
            我的订单
          </h1>
          <Link href="/coming-soon" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/images/profile-icon/profile-search-icon.svg"
              alt="搜索"
              style={{ width: "18px", height: "18px" }}
            />
          </Link>
        </div>

        {/* 空状态 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px 20px",
          }}
        >
          <img
            src="images/my-orders/haiyun-ip.svg"
            alt="暂无订单"
            style={{
              width: "602px",
              height: "520px",
              objectFit: "contain",
              marginBottom: "0px",
            }}
          />
          <p
            style={{
              fontSize: "14px",
              color: "#003c3a",
              marginBottom: "8px",
            }}
          >
            还没有任何订单
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#8b8b8b",
            }}
          >
            让海韵护送你的宝贝漂洋回家
          </p>
        </div>

        {/* 推荐 */}
        <div style={{ padding: "0 20px" }}>
          {recommendations.map((item, index) => (
            <Link
              key={item.title}
              href="/market"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 0",
                  borderTop: index === 0 ? "1px solid #e8e0d4" : "none",
                  borderBottom: "1px solid #e8e0d4",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#1f1f1f",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#8b8b8b",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* 底部按钮 */}
      <div
        style={{
          position: "fixed",
          bottom: "80px",
          left: "20px",
          right: "20px",
          zIndex: 100,
        }}
      >
        <Link href="/market" style={{ textDecoration: "none" }}>
          <button
            style={{
              width: "100%",
              padding: "16px",
              background: "#003c3a",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontFamily: "'Noto Serif SC', serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "18px" }}>🛍️</span>
            去市集逛逛
          </button>
        </Link>
      </div>
    </>
  );
}
