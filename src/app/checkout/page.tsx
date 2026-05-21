"use client";

import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [selectedPayment, setSelectedPayment] = useState<"alipay" | "wechat">("alipay");

  const product = {
    name: "建窑黑釉兔毫盏",
    nameEn: "Jian Kiln Tenmoku Tea Bowl",
    description: "传统手工拉坯，曜变天目。福建建阳水吉镇匠人亲制。",
    price: 2800,
    originalPrice: 3200,
    image: "/images/market/jianyao-black-glaze-hare-fur.svg",
  };

  const shipping = 45;
  const packaging = 0;
  const total = product.price + shipping + packaging;

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("请填写完整的收货信息");
      return;
    }
    alert(`使用${selectedPayment === "alipay" ? "支付宝" : "微信"}支付 ¥${total.toLocaleString()}`);
  };

  return (
    <main
      style={{
        background: "#F5F3EE",
        minHeight: "100vh",
        paddingBottom: "100px",
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
          结账支付
        </h1>
        <Link href="/coming-soon" style={{ display: "flex", alignItems: "center" }}>
          <img src="/images/profile-icon/profile-search-icon.svg" alt="搜索" style={{ width: "24px", height: "24px" }} />
        </Link>
      </div>

      {/* 选购详情 */}
      <section style={{ padding: "0 20px 24px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#003c3a", marginBottom: "4px" }}>
          选购详情
        </h2>
        <p style={{ fontSize: "11px", letterSpacing: "2px", color: "#8b8b8b", marginBottom: "16px" }}>
          PURCHASE DETAILS
        </p>

        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              margin: "0 auto 16px",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
           <img
                src="/images/learn/jianyao-tenmoku.svg"
                alt=""
                style={{ width: "100%", height: "100%", marginRight: "8px" }}
              />
          </div>

          <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#1f1f1f", marginBottom: "8px" }}>
            {product.name}
          </h3>
          <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.6, marginBottom: "16px" }}>
            {product.nameEn} - {product.description}
          </p>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "8px" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold", color: "#003c3a" }}>
              ¥{product.price.toLocaleString()}
            </span>
            <span style={{ fontSize: "14px", color: "#999", textDecoration: "line-through" }}>
              ¥{product.originalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </section>

      {/* 收货地址 */}
      <section style={{ padding: "0 20px 24px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#003c3a", marginBottom: "4px" }}>
          收货地址
        </h2>
        <p style={{ fontSize: "11px", letterSpacing: "2px", color: "#8b8b8b", marginBottom: "16px" }}>
          DELIVERY ADDRESS
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ fontSize: "13px", color: "#666", marginBottom: "6px", display: "block" }}>
              收货人姓名
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="请输入姓名"
              style={{
                width: "100%",
                padding: "14px 16px",
                border: "none",
                borderRadius: "12px",
                fontSize: "15px",
                fontFamily: "'Noto Serif SC', serif",
                background: "#fff",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: "13px", color: "#666", marginBottom: "6px", display: "block" }}>
              联系人电话
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="请输入手机号"
              style={{
                width: "100%",
                padding: "14px 16px",
                border: "none",
                borderRadius: "12px",
                fontSize: "15px",
                fontFamily: "'Noto Serif SC', serif",
                background: "#fff",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: "13px", color: "#666", marginBottom: "6px", display: "block" }}>
              详细地址（省、市、区、街道）
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="请输入详细地址"
              style={{
                width: "100%",
                padding: "14px 16px",
                border: "none",
                borderRadius: "12px",
                fontSize: "15px",
                fontFamily: "'Noto Serif SC', serif",
                background: "#fff",
                outline: "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* 支付方式 */}
      <section style={{ padding: "0 20px 24px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#003c3a", marginBottom: "4px" }}>
          支付方式
        </h2>
        <p style={{ fontSize: "11px", letterSpacing: "2px", color: "#8b8b8b", marginBottom: "16px" }}>
          SELECT PAYMENT METHOD
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* 支付宝 */}
          <div
            onClick={() => setSelectedPayment("alipay")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              background: "#fff",
              borderRadius: "12px",
              border: selectedPayment === "alipay" ? "2px solid #003c3a" : "2px solid transparent",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "#1677FF",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                支
              </div>
              <div>
                <p style={{ fontSize: "15px", color: "#1f1f1f", marginBottom: "2px" }}>支付宝支付</p>
                <p style={{ fontSize: "12px", color: "#999" }}>Alipay Security Payment</p>
              </div>
            </div>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: selectedPayment === "alipay" ? "#003c3a" : "#e8e0d4",
              }}
            />
          </div>

          {/* 微信支付 */}
          <div
            onClick={() => setSelectedPayment("wechat")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              background: "#fff",
              borderRadius: "12px",
              border: selectedPayment === "wechat" ? "2px solid #003c3a" : "2px solid transparent",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "#07C160",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M8.5 13.5A1.5 1.5 0 1 0 8.5 10.5 1.5 1.5 0 0 0 8.5 13.5zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  <path d="M12 2C6.48 2 2 5.9 2 10.7c0 2.6 1.4 4.9 3.6 6.5-.2.7-.7 2.4-.8 2.8-.1.3.1.5.4.4.5-.2 2.3-1.5 2.9-2 .8.2 1.7.3 2.6.3 5.52 0 10-3.9 10-8.7S17.52 2 12 2z" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "15px", color: "#1f1f1f", marginBottom: "2px" }}>微信支付</p>
                <p style={{ fontSize: "12px", color: "#999" }}>WeChat Pay</p>
              </div>
            </div>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: selectedPayment === "wechat" ? "none" : "2px solid #ccc",
                background: selectedPayment === "wechat" ? "#003c3a" : "transparent",
              }}
            />
          </div>
        </div>
      </section>

      {/* 费用概览 */}
      <section style={{ padding: "0 20px 24px" }}>
        <div
          style={{
            background: "#003c3a",
            borderRadius: "16px",
            padding: "24px 20px",
            color: "#fff",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="9" y1="9" x2="15" y2="9" />
              <line x1="9" y1="13" x2="15" y2="13" />
              <line x1="9" y1="17" x2="11" y2="17" />
            </svg>
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>费用概览</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "14px", opacity: 0.8 }}>商品总价</span>
              <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                ¥{product.price.toLocaleString()}.00
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span style={{ fontSize: "14px", opacity: 0.8 }}>顺丰速运</span>
                <br />
                <span style={{ fontSize: "12px", opacity: 0.6 }}>（精细保价）</span>
              </div>
              <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                ¥{shipping.toLocaleString()}.00
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "14px", opacity: 0.8 }}>包装费用</span>
              <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                ¥{packaging.toLocaleString()}.00
              </span>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              paddingTop: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "14px", opacity: 0.8 }}>应付总额</span>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: "28px", fontWeight: "bold" }}>
                ¥{total.toLocaleString()}.00
              </span>
              <p style={{ fontSize: "11px", opacity: 0.6, marginTop: "4px", letterSpacing: "1px" }}>
                TOTAL PAYABLE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 协议说明 */}
      <p
        style={{
          fontSize: "11px",
          color: "#999",
          textAlign: "center",
          padding: "0 20px",
          lineHeight: 1.6,
        }}
      >
        点击"确认并支付"即代表您同意我们的《数字策展人服务协议》与《非遗产品退换政策》。
      </p>

      {/* 底部操作栏 */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "12px 20px 24px",
          background: "#F5F3EE",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <button
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            border: "1px solid #e8e0d4",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#003c3a" strokeWidth="1.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>

        <button
          onClick={handleSubmit}
          style={{
            flex: 1,
            padding: "16px",
            background: "#003c3a",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "'Noto Serif SC', serif",
            cursor: "pointer",
          }}
        >
          支付
        </button>
      </div>
    </main>
  );
}
