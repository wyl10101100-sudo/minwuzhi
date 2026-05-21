import TabBar from "../../components/TabBar";
import Link from "next/link";

export default function ProfilePage() {
  const stats = [
    { num: "124", label: "收藏" },
    { num: "0", label: "订单" },
    { num: "1.2k", label: "足迹" },
  ];

  const orders = [
    { icon: "/images/profile-icon/pending-payment.svg", label: "待付款" },
    { icon: "/images/profile-icon/pending-shipment.svg", label: "待发货" },
    { icon: "/images/profile-icon/pending-receipt.svg", label: "待收货" },
    { icon: "/images/profile-icon/completed.svg", label: "已完成" },
  ];

  const menuItems = [
    {
      icon: "/images/profile-icon/address-management.svg",
      title: "收货地址管理",
    },
    {
      icon: "/images/profile-icon/feedback.svg",
      title: "意见反馈",
    },
    {
      icon: "/images/profile-icon/about-us.svg",
      title: "关于我们",
    },
  ];

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
        {/* 顶部 */}
        <div
          style={{
            padding: "8px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/coming-soon" style={{ fontSize: "20px", color: "#003c3a", textDecoration: "none" }}>
            ☰
          </Link>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#003331", margin: 0 }}>
            个人中心
          </h1>
          <Link href="/coming-soon" style={{ fontSize: "18px", color: "#003c3a", display: "flex" }}>
            <img
              src="/images/profile-icon/profile-search-icon.svg"
              alt="搜索"
              style={{
                width: "18px",
                height: "18px",
                objectFit: "contain",
              }}
            />
          </Link>
        </div>

        {/* 用户信息 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "8px 0 16px",
          }}
        >
          {/* 头像 */}
          <div
            style={{
              position: "relative",
              width: "80px",
              height: "80px",
              borderRadius: "16px",
              overflow: "hidden",
              marginBottom: "0px",
            }}
          >
            <img
              src="/images/profile-icon/user-avatar.svg"
              alt="头像"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "4px",
                right: "4px",
                width: "20px",
                height: "20px",
                background: "#003c3a",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "10px",
              }}
            >
              ✎
            </div>
          </div>

          <h2
            style={{
              fontSize: "24px",
              color: "#1f1f1f",
              margin: "8px 0",
            }}
          >
            陈墨泉
          </h2>

          <p
            style={{
              fontSize: "13px",
              color: "#8b8b8b",
              textAlign: "center",
              lineHeight: 1.6,
              maxWidth: "280px",
              margin: "2px 0",
            }}
          >
            福建文化遗产守护者。致力于建盏工艺与武夷茶道的当代表达。
          </p>
        </div>

        {/* 数据统计 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "0 20px 24px",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                flex: 1,
              }}
            >
              <span
                style={{
                  fontSize: "28px",
                  color: "#003c3a",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                {stat.num}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#8b8b8b",
                }}
              >
                {stat.label}
              </span>

              {/* 分隔线 */}
              {index < stats.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "1px",
                    height: "30px",
                    background: "#e8e0d4",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* 我的订单 */}
        <div
          style={{
            margin: "0 20px 16px",
            background: "#fff",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "16px",
                color: "#1f1f1f",
                fontWeight: 500,
              }}
            >
              我的订单
            </span>
            <Link href="/order" style={{ textDecoration: "none" }}>
              <span style={{ fontSize: "13px", color: "#8b8b8b" }}>
                查看全部 ›
              </span>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {orders.map((order) => (
              <Link
                key={order.label}
                href="/order"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "#f5f3ee",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                    }}
                  >
                    <img
                      src={order.icon}
                      alt={order.label}
                      style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#1f1f1f",
                    }}
                  >
                    {order.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 我的收藏 */}
        <div
          style={{
            margin: "0 20px 12px",
            background: "#fff",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src="/images/profile-icon/my-favorites.svg"
            alt="我的收藏"
            style={{
              width: "20px",
              height: "20px",
              objectFit: "contain",
            }}
          />
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: "15px",
                color: "#1f1f1f",
                marginBottom: "4px",
              }}
            >
              我的收藏
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#8b8b8b",
              }}
            >
              已收藏 124 件器物
            </div>
          </div>
          <span style={{ color: "#8b8b8b" }}>›</span>
        </div>

        {/* 我的传习 */}
        <div
          style={{
            margin: "0 20px 16px",
            background: "#fff",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <img
              src="/images/profile-icon/profile-learn.svg"
              alt="我的传习"
              style={{
                width: "20px",
                height: "20px",
                objectFit: "contain",
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "15px",
                  color: "#1f1f1f",
                  marginBottom: "4px",
                }}
              >
                我的传习
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#8b8b8b",
                }}
              >
                建窑黑釉烧制技艺
              </div>
            </div>
            <span style={{ color: "#8b8b8b" }}>›</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "4px",
                background: "#f5f3ee",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "75%",
                  height: "100%",
                  background: "#003c3a",
                  borderRadius: "2px",
                }}
              />
            </div>
            <span
              style={{
                fontSize: "12px",
                color: "#003c3a",
                background: "#e8e0d4",
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              75%
            </span>
          </div>
        </div>

        {/* 申请成为传承人 */}
        <div
          style={{
            margin: "0 20px 16px",
            background: "#003c3a",
            borderRadius: "16px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "rgba(255,255,255,.15)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/images/profile-icon/apply-inheritor.svg"
              alt="申请成为传承人"
              style={{
                width: "24px",
                height: "24px",
                objectFit: "contain",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: "16px",
                color: "#fff",
                marginBottom: "4px",
              }}
            >
              申请成为传承人
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,.6)",
              }}
            >
              分享您的技艺与传承
            </div>
          </div>
          <span style={{ color: "rgba(255,255,255,.6)" }}>›</span>
        </div>

        {/* 菜单列表 */}
        <div
          style={{
            margin: "0 20px",
            background: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {menuItems.map((item, index) => (
            <div
              key={item.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 20px",
                borderBottom:
                  index < menuItems.length - 1 ? "1px solid #f5f3ee" : "none",
              }}
            >
              <img
                src={item.icon}
                alt={item.title}
                style={{
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                }}
              />
              <span
                style={{
                  flex: 1,
                  fontSize: "15px",
                  color: "#1f1f1f",
                }}
              >
                {item.title}
              </span>
              <span style={{ color: "#8b8b8b" }}>›</span>
            </div>
          ))}
        </div>
      </main>

      <TabBar activeTab="profile" />
    </>
  );
}
