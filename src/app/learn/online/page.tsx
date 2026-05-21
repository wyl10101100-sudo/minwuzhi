"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type CatalogItem = {
  no: string;
  title: string;
  duration: string;
  status: "done" | "current" | "locked";
};

type QAItem = {
  q: string;
  a: string;
};

export default function OnlineLearningDetailsPage() {
  const course = useMemo(
    () => ({
      // 目前线上课程只做这一条，后续可把这里的数据改成从接口/动态路由读取
      id: "jianyao-tenmoku-online",
      heroTag: "了解建盏",
      heroTitle: "建盏黑釉技法入门",
      heroSubTitle: "从泥土到盏形，拉坯一指之间",
      title: "建盏黑釉技法入门",
      subTitle: "从泥土到盏形，拉坯 · 修坯 · 上釉",
      coverImage: "/images/learn/jianyao-tenmoku.svg",
      metrics: [
        { value: "06", label: "章节" },
        { value: "1.2k", label: "学习人数" },
        { value: "12+", label: "知识点" },
        { value: "4.9+", label: "评分" },
      ],
      tutor: {
        name: "匠人导师",
        role: "建盏黑釉技法讲师",
        avatar: "/images/zheng-yikun-watermark-free.svg",
      },
      progress: 0.3,
      catalog: [
        { no: "01", title: "泥土的选择与处理", duration: "06:12", status: "done" },
        { no: "02", title: "拉坯：心随手转", duration: "10:25", status: "current" },
        { no: "03", title: "修坯成型：盏之形", duration: "08:40", status: "locked" },
        { no: "04", title: "上釉与挂釉：釉之面", duration: "07:18", status: "locked" },
        { no: "05", title: "入窑与烧成：火候之道", duration: "09:10", status: "locked" },
        { no: "06", title: "成品鉴赏与常见问题", duration: "05:32", status: "locked" },
      ] as CatalogItem[],
      article: {
        title: "拉坯成型技法",
        desc:
          "拉坯是建盏成型的关键步骤之一。本节将从「手势」「中心」「提拉」三个核心动作拆解，让你理解器形从无到有的形成逻辑，并能在练习中快速纠错。",
        image: "/images/learn/jianyao-tenmoku.svg",
        caption: "练习建议：先稳中心，再做提拉与收口。",
      },
      highlight: {
        title: "大师风格呈现",
        bullets: [
          "拉坯节奏：慢起稳收，手随轮转。",
          "器形控制：口沿收放与腹壁厚薄的平衡。",
          "常见错误：偏心、塌陷、起皱的快速修正思路。",
        ],
      },
      qa: [
        {
          q: "为什么拉坯需要先「定中心」？",
          a: "定中心是拉坯的基础。只有泥团完全居中，后续提拉才会均匀受力，器壁厚薄才能一致；否则会出现偏心、晃动甚至塌陷。",
        },
        {
          q: "手指如何控制盏口的收放？",
          a: "控制盏口主要靠「外手托、内手导」。外手负责支撑与限位，内手负责向外推开或向内收拢；配合轮速与含水量，少量多次地调整更稳定。",
        },
      ] as QAItem[],
      next: [
        {
          title: "建盏器形赏析",
          sub: "从盏口到盏足，读懂经典比例",
          image: "/images/learn/jade-tone-ware.svg",
        },
        {
          title: "黑釉基础知识",
          sub: "釉色与火候的关系",
          image: "/images/learn/wood-traces.svg",
        },
      ],
    }),
    [],
  );

  const [openQaIndex, setOpenQaIndex] = useState<number | null>(0);

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
          <Link href="/learn" style={{ display: "flex", alignItems: "center" }}>
            <img src="/images/back-icon.svg" alt="返回" style={{ width: "24px", height: "24px" }} />
          </Link>
        </div>

        <h1
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#003331",
            margin: 0,
            maxWidth: "220px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "center",
          }}
        >
          {course.title}
        </h1>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          <Link href="/coming-soon" style={{ display: "flex", alignItems: "center" }}>
            <img src="/images/market/more.svg" alt="更多" style={{ width: "22px", height: "22px" }} />
          </Link>
        </div>
      </div>

      {/* 课程封面 */}
      <section style={{ padding: "0 20px" }}>
        <div
          style={{
            width: "100%",
            aspectRatio: "16/10",
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            background: "#E8E0D4",
          }}
        >
          <img
            src={course.coverImage}
            alt={course.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,.60) 0%, rgba(0,0,0,0) 55%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "16px",
              right: "16px",
              bottom: "14px",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "12px",
            }}
          >
            <div>
              <p style={{ margin: 0, fontSize: "12px", letterSpacing: "2px", opacity: 0.9 }}>
                {course.heroTag}
              </p>
              <h2 style={{ margin: "6px 0 4px", fontSize: "22px", fontWeight: 700, lineHeight: 1.2 }}>
                {course.heroTitle}
              </h2>
              <p style={{ margin: 0, fontSize: "12px", opacity: 0.9, lineHeight: 1.4 }}>
                {course.heroSubTitle}
              </p>
            </div>

            <div
              style={{
                padding: "8px 12px",
                borderRadius: "999px",
                background: "rgba(0, 51, 49, .92)",
                fontSize: "12px",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              学习中
            </div>
          </div>
        </div>
      </section>

      {/* 课程标题与数据 */}
      <section style={{ padding: "16px 20px 0" }}>
        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "18px 16px",
          }}
        >
          <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#1f1f1f", margin: "0 0 6px" }}>
            {course.title}
          </h2>
          <p style={{ fontSize: "12px", color: "#8B8B8B", margin: 0, lineHeight: 1.5 }}>{course.subTitle}</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px",
              marginTop: "14px",
            }}
          >
            {course.metrics.map((m) => (
              <div
                key={m.label}
                style={{
                  background: "#F5F3EE",
                  borderRadius: "12px",
                  padding: "10px 8px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "16px", fontWeight: 800, color: "#003331", lineHeight: 1.1 }}>
                  {m.value}
                </div>
                <div style={{ fontSize: "11px", color: "#8B8B8B", marginTop: "4px" }}>{m.label}</div>
              </div>
            ))}
          </div>

          {/* 导师 */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={course.tutor.avatar}
                alt={course.tutor.name}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  background: "#E8E0D4",
                }}
              />
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#1f1f1f", lineHeight: 1.2 }}>
                  {course.tutor.name}
                </div>
                <div style={{ fontSize: "12px", color: "#8B8B8B" }}>{course.tutor.role}</div>
              </div>
            </div>

            <Link
              href="/coming-soon"
              style={{
                padding: "8px 12px",
                borderRadius: "999px",
                background: "#003331",
                color: "#fff",
                fontSize: "12px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              进入工坊
            </Link>
          </div>

          {/* 学习进度 */}
          <div style={{ marginTop: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "12px", color: "#8B8B8B" }}>学习进度</span>
              <span style={{ fontSize: "12px", fontWeight: 800, color: "#003331" }}>
                {Math.round(course.progress * 100)}%
              </span>
            </div>
            <div style={{ height: "8px", borderRadius: "999px", background: "#F1EFEA", overflow: "hidden" }}>
              <div
                style={{
                  width: `${Math.round(course.progress * 100)}%`,
                  height: "100%",
                  background: "#003331",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 课程目录 */}
      <section style={{ padding: "16px 20px 0" }}>
        <div style={{ background: "#ffffff", borderRadius: "16px", padding: "18px 16px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "12px" }}>
            <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#1f1f1f" }}>课程目录</h2>
            <span style={{ fontSize: "12px", color: "#8B8B8B" }}>{course.catalog.length} 节</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {course.catalog.map((item) => {
              const isLocked = item.status === "locked";
              const isCurrent = item.status === "current";
              return (
                <div
                  key={item.no}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "44px 1fr auto",
                    gap: "10px",
                    padding: "12px 12px",
                    borderRadius: "12px",
                    background: isCurrent ? "#F5F3EE" : "#FAFAFA",
                    border: isCurrent ? "1px solid #E8E0D4" : "1px solid #F1F1F1",
                    alignItems: "center",
                    opacity: isLocked ? 0.55 : 1,
                  }}
                >
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#003331" }}>{item.no}</div>

                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#1f1f1f", lineHeight: 1.2 }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8B8B8B", marginTop: "4px" }}>{item.duration}</div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {item.status === "done" ? (
                      <span style={{ width: "20px", height: "20px", borderRadius: "999px", background: "#003331", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>
                        ✓
                      </span>
                    ) : isLocked ? (
                      <span style={{ width: "20px", height: "20px", borderRadius: "999px", background: "#E8E0D4", color: "#6B6156", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>
                        🔒
                      </span>
                    ) : (
                      <span style={{ width: "20px", height: "20px", borderRadius: "999px", background: "#E8E0D4", color: "#003331", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>
                        ▶
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 内容分区：技法文章 */}
      <section style={{ padding: "16px 20px 0" }}>
        <div style={{ background: "#ffffff", borderRadius: "16px", padding: "18px 16px" }}>
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#1f1f1f" }}>{course.article.title}</h2>
          <p style={{ margin: "10px 0 0", fontSize: "13px", color: "#4a4a4a", lineHeight: 1.7 }}>
            {course.article.desc}
          </p>

          <div style={{ marginTop: "12px", borderRadius: "14px", overflow: "hidden", background: "#F5F3EE" }}>
            <img
              src={course.article.image}
              alt={course.article.title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <p style={{ margin: "10px 0 0", fontSize: "12px", color: "#8B8B8B", lineHeight: 1.5 }}>
            {course.article.caption}
          </p>

          <div
            style={{
              marginTop: "14px",
              borderRadius: "14px",
              padding: "14px 14px",
              background: "#0F3A33",
              color: "#fff",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: 800, letterSpacing: "1px" }}>{course.highlight.title}</div>
            <ul style={{ margin: "10px 0 0", paddingLeft: "18px", fontSize: "12px", lineHeight: 1.7, opacity: 0.95 }}>
              {course.highlight.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 知识要点卡片 */}
      <section style={{ padding: "16px 20px 0" }}>
        <div style={{ background: "#ffffff", borderRadius: "16px", padding: "18px 16px" }}>
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#1f1f1f" }}>知识要点卡片</h2>
          <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {course.qa.map((item, idx) => {
              const open = openQaIndex === idx;
              return (
                <button
                  key={item.q}
                  type="button"
                  onClick={() => setOpenQaIndex(open ? null : idx)}
                  style={{
                    textAlign: "left",
                    width: "100%",
                    background: "#F5F3EE",
                    border: "1px solid #E8E0D4",
                    borderRadius: "14px",
                    padding: "12px 12px",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                    <div style={{ fontSize: "13px", fontWeight: 800, color: "#1f1f1f", lineHeight: 1.4 }}>
                      {idx + 1}. {item.q}
                    </div>
                    <span style={{ fontSize: "14px", color: "#003331", fontWeight: 900 }}>{open ? "−" : "+"}</span>
                  </div>
                  {open ? (
                    <div style={{ marginTop: "10px", fontSize: "12px", color: "#4a4a4a", lineHeight: 1.7 }}>
                      {item.a}
                    </div>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEXT EXPLORATION */}
      <section style={{ padding: "16px 20px 0" }}>
        <div style={{ background: "#ffffff", borderRadius: "16px", padding: "18px 16px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "12px" }}>
            <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 800, color: "#1f1f1f" }}>NEXT EXPLORATION</h2>
            <Link href="/coming-soon" style={{ fontSize: "12px", color: "#666", textDecoration: "none" }}>
              查看更多 →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {course.next.map((n) => (
              <Link
                key={n.title}
                href="/coming-soon"
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <div style={{ borderRadius: "14px", overflow: "hidden", background: "#F5F3EE" }}>
                  <div style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                    <img
                      src={n.image}
                      alt={n.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                  <div style={{ padding: "10px 10px 12px" }}>
                    <div style={{ fontSize: "13px", fontWeight: 800, color: "#1f1f1f", lineHeight: 1.25 }}>
                      {n.title}
                    </div>
                    <div style={{ marginTop: "4px", fontSize: "11px", color: "#8B8B8B", lineHeight: 1.4 }}>
                      {n.sub}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

