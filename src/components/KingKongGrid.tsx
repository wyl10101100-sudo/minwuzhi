import Link from "next/link";

export default function KingKongGrid() {
  const items = [
    {
      name: "窑火陶瓷",
      icon: "/images/KingKongGrid/ceramic.svg",href:"/ceramic"
    },
    {
      name: "织绣服饰",
      icon: "/images/KingKongGrid/embroidery.svg",href:"/embroidery"
    },
    {
      name: "编作构木",
      icon: "/images/KingKongGrid/bamboo-wood.svg",href:"/bambooWood"
    },
    {
      name: "纸扎糊作",
      icon: "/images/KingKongGrid/paper-craft.svg",href:"/paper-craft"
    },
    {
      name: "雕錾髹饰",
      icon: "/images/KingKongGrid/lacquer.svg",href:"/lacquer"
    },
  ];

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: "20px",
        padding: "28px 20px 8px 20px",
      }}
    >
      {items.map((item) => (
        <Link
          href={item.href}      
          key={item.name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          {/* icon背景 */}
          {/* icon背景 */}
<div
  style={{
    width: "100%",        // 改为 100%，撑满 grid 单元格
    aspectRatio: "1",     // 保持正方形
    maxWidth: "68px",     // 最大不超过 68px
    height: "auto",       // 高度由 aspectRatio 决定
    borderRadius: "16px",
    background: "#F8F5EE",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,.04)",
    border: "1px solid #ECE5D8",
  }}
>
            <img
              src={item.icon}
              alt={item.name}
              style={{
                width: "30px",
                height: "30px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* 文字 */}
          <p
            style={{
              marginTop: "10px",
              fontSize: "12px",
              lineHeight: 1.5,
              color: "#2D2D2D",
              textAlign: "center",
              fontFamily:
                "'Noto Serif SC', serif",
            }}
          >
            {item.name}
          </p>
        </Link>
      ))}
    </section>
  );
}
