"use client";

import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";
import { useState } from "react";

export default function BookingPage() {
  const params = useParams();
  const id = params.id as string;
  const searchParams = useSearchParams();
  const dateIndex = searchParams.get("date") || "0";
  const people = searchParams.get("people") || "1";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    remark: "",
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) {
      alert("请填写姓名和联系电话");
      return;
    }
    alert(`预约成功！\n课程：脱胎漆器基础体验课\n日期：2026-05-20\n人数：${people}人\n联系人：${formData.name}`);
  };

  return (
    <main
      style={{
        background: "#F5F3EE",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "'Noto Serif SC', serif",
      }}
    >
      {/* 顶部导航 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Link href={`/learn/${id}`}>
          <img src="/images/back-icon.svg" alt="返回" style={{ width: "24px", height: "24px" }} />
        </Link>
        <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#003331", margin: 0, marginLeft: "16px" }}>
          确认预约信息
        </h1>
      </div>

      {/* 预约信息卡片 */}
      <div
        style={{
          padding: "20px",
          background: "#fff",
          borderRadius: "16px",
          marginBottom: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#1f1f1f",
            marginBottom: "12px",
          }}
        >
          脱胎漆器基础体验课
        </h2>
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "12px",
          }}
        >
          <div>
            <p style={{ fontSize: "12px", color: "#999" }}>日期</p>
            <p style={{ fontSize: "14px", color: "#1f1f1f" }}>2026-05-20</p>
          </div>
          <div>
            <p style={{ fontSize: "12px", color: "#999" }}>时间</p>
            <p style={{ fontSize: "14px", color: "#1f1f1f" }}>14:00-17:00</p>
          </div>
          <div>
            <p style={{ fontSize: "12px", color: "#999" }}>人数</p>
            <p style={{ fontSize: "14px", color: "#1f1f1f" }}>{people}人</p>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #e8e0d4",
            paddingTop: "12px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "14px", color: "#666" }}>合计</span>
          <span style={{ fontSize: "18px", fontWeight: "bold", color: "#003c3a" }}>
            ¥{380 * parseInt(people)}
          </span>
        </div>
      </div>

      {/* 表单 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <label
            style={{
              fontSize: "14px",
              color: "#666",
              marginBottom: "6px",
              display: "block",
            }}
          >
            联系人姓名 *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="请输入姓名"
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid #e8e0d4",
              borderRadius: "12px",
              fontSize: "15px",
              fontFamily: "'Noto Serif SC', serif",
              outline: "none",
            }}
          />
        </div>

        <div>
          <label
            style={{
              fontSize: "14px",
              color: "#666",
              marginBottom: "6px",
              display: "block",
            }}
          >
            联系电话 *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="请输入手机号"
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid #e8e0d4",
              borderRadius: "12px",
              fontSize: "15px",
              fontFamily: "'Noto Serif SC', serif",
              outline: "none",
            }}
          />
        </div>

        <div>
          <label
            style={{
              fontSize: "14px",
              color: "#666",
              marginBottom: "6px",
              display: "block",
            }}
          >
            备注（选填）
          </label>
          <textarea
            value={formData.remark}
            onChange={(e) => setFormData({ ...formData, remark: e.target.value })}
            placeholder="如有特殊需求请备注"
            rows={3}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid #e8e0d4",
              borderRadius: "12px",
              fontSize: "15px",
              fontFamily: "'Noto Serif SC', serif",
              resize: "none",
              outline: "none",
            }}
          />
        </div>
      </div>

      {/* 提交按钮 */}
      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          marginTop: "32px",
          padding: "16px",
          background: "#003c3a",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          fontSize: "16px",
          fontFamily: "'Noto Serif SC', serif",
          cursor: "pointer",
        }}
      >
        确认预约
      </button>
    </main>
  );
}
