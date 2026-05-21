"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";

const courseData = {
  id: "c1",
  title: "脱胎漆器基础体验课",
  master: "郑益坤",
  masterAvatar: "/images/zheng-yikun-watermark-free.svg",
  image: "/images/master-detail/core-craft-banner.svg",
  duration: "3小时",
  price: "¥380",
  originalPrice: "¥580",
  location: "福州市三坊七巷漆艺馆",
  maxPeople: 8,
  remaining: 3,
  schedule: [
    { date: "2026-05-20", time: "14:00-17:00", available: true },
    { date: "2026-05-21", time: "14:00-17:00", available: true },
    { date: "2026-05-22", time: "09:00-12:00", available: false },
  ],
  includes: ["材料费", "工具使用", "作品带走", "证书颁发"],
  process: [
    { step: "1", title: "了解脱胎漆器历史", desc: "传承人讲解福州漆器发展史" },
    { step: "2", title: "体验脱胎成型", desc: "亲手制作漆器胎体" },
    { step: "3", title: "学习髹饰技法", desc: "上漆、打磨、推光" },
    { step: "4", title: "完成作品", desc: "带走自己的漆器作品" },
  ],
};

export default function CourseDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [selectedDate, setSelectedDate] = useState(0);
  const [peopleCount, setPeopleCount] = useState(1);
  const course = courseData;

  return (
    <main
      style={{
        background: "#F5F3EE",
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
          position: "sticky",
          top: 0,
          background: "#F5F3EE",
          zIndex: 10,
        }}
      >
        <Link href="/learn">
          <img src="/images/back-icon.svg" alt="返回" style={{ width: "24px", height: "24px" }} />
        </Link>
        <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#003331", margin: 0 }}>
          课程详情
        </h1>
        <img src="/images/market/more.svg" alt="更多" style={{ width: "24px", height: "24px" }} />
      </div>

      {/* 课程主图 */}
      <div style={{ width: "100%", aspectRatio: "16/10", overflow: "hidden" }}>
        <img
          src={course.image}
          alt={course.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* 课程信息 */}
      <div style={{ padding: "20px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#1f1f1f", marginBottom: "8px" }}>
          {course.title}
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
          <img
            src={course.masterAvatar}
            alt={course.master}
            style={{ width: "32px", height: "32px", borderRadius: "50%" }}
          />
          <span style={{ fontSize: "14px", color: "#666" }}>
            授课：{course.master}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px" }}>
          <span style={{ fontSize: "24px", fontWeight: "bold", color: "#003c3a" }}>
            {course.price}
          </span>
          <span style={{ fontSize: "14px", color: "#999", textDecoration: "line-through" }}>
            {course.originalPrice}
          </span>
          <span
            style={{
              padding: "2px 8px",
              background: "#003c3a",
              color: "#fff",
              fontSize: "12px",
              borderRadius: "4px",
            }}
          >
            限时优惠
          </span>
        </div>

        {/* 基本信息 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            padding: "16px",
            background: "#fff",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        >
          <div>
            <p style={{ fontSize: "12px", color: "#999" }}>时长</p>
            <p style={{ fontSize: "14px", color: "#1f1f1f" }}>{course.duration}</p>
          </div>
          <div>
            <p style={{ fontSize: "12px", color: "#999" }}>地点</p>
            <p style={{ fontSize: "14px", color: "#1f1f1f" }}>{course.location}</p>
          </div>
          <div>
            <p style={{ fontSize: "12px", color: "#999" }}>人数上限</p>
            <p style={{ fontSize: "14px", color: "#1f1f1f" }}>{course.maxPeople}人</p>
          </div>
          <div>
            <p style={{ fontSize: "12px", color: "#999" }}>剩余名额</p>
            <p style={{ fontSize: "14px", color: "#003c3a", fontWeight: "bold" }}>
              仅剩{course.remaining}席
            </p>
          </div>
        </div>

        {/* 费用包含 */}
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#1f1f1f", marginBottom: "12px" }}>
            费用包含
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {course.includes.map((item) => (
              <span
                key={item}
                style={{
                  padding: "6px 12px",
                  background: "#fff",
                  borderRadius: "8px",
                  fontSize: "13px",
                  color: "#666",
                }}
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>

        {/* 课程流程 */}
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#1f1f1f", marginBottom: "12px" }}>
            课程流程
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {course.process.map((step) => (
              <div
                key={step.step}
                style={{
                  display: "flex",
                  gap: "12px",
                  padding: "12px",
                  background: "#fff",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#003c3a",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "bold",
                    flexShrink: 0,
                  }}
                >
                  {step.step}
                </div>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: "bold", color: "#1f1f1f", marginBottom: "4px" }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: "13px", color: "#666" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 选择日期 */}
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#1f1f1f", marginBottom: "12px" }}>
            选择日期
          </h3>
          <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
            {course.schedule.map((slot, i) => (
              <button
                key={slot.date}
                onClick={() => slot.available && setSelectedDate(i)}
                disabled={!slot.available}
                style={{
                  flexShrink: 0,
                  padding: "12px 16px",
                  borderRadius: "12px",
                  border: selectedDate === i ? "2px solid #003c3a" : "1px solid #e8e0d4",
                  background: selectedDate === i ? "#003c3a" : slot.available ? "#fff" : "#f0f0f0",
                  color: selectedDate === i ? "#fff" : slot.available ? "#1f1f1f" : "#999",
                  cursor: slot.available ? "pointer" : "not-allowed",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "4px" }}>
                  {slot.date.slice(5)}
                </p>
                <p style={{ fontSize: "12px" }}>{slot.time}</p>
              </button>
            ))}
          </div>
        </div>

        {/* 选择人数 */}
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#1f1f1f", marginBottom: "12px" }}>
            预约人数
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "12px 16px",
              background: "#fff",
              borderRadius: "12px",
              width: "fit-content",
            }}
          >
            <button
              onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "1px solid #e8e0d4",
                background: "#fff",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              -
            </button>
            <span style={{ fontSize: "18px", fontWeight: "bold", minWidth: "24px", textAlign: "center" }}>
              {peopleCount}
            </span>
            <button
              onClick={() => setPeopleCount(Math.min(course.remaining, peopleCount + 1))}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "1px solid #003c3a",
                background: "#003c3a",
                color: "#fff",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* 底部结算栏 */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "12px 20px 24px",
          background: "#fff",
          borderTop: "1px solid #e8e0d4",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 100,
        }}
      >
        <div>
          <p style={{ fontSize: "12px", color: "#999" }}>合计</p>
          <p style={{ fontSize: "22px", fontWeight: "bold", color: "#003c3a" }}>
            ¥{parseInt(course.price.slice(1)) * peopleCount}
          </p>
        </div>
        <Link href={`/learn/${id}/booking?date=${selectedDate}&people=${peopleCount}`}>
          <button
            style={{
              padding: "14px 32px",
              background: "#003c3a",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontFamily: "'Noto Serif SC', serif",
              cursor: "pointer",
            }}
          >
            立即预约
          </button>
        </Link>
      </div>
    </main>
  );
}
