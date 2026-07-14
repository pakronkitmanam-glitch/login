import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

// ย้ายไว้นอก Component เพื่อไม่ให้สร้างใหม่ทุกครั้งที่ Re-render
const MOCK_USERS = [
  { id: 1, username: "admin", password: "1234", name: "Administrator", role: "admin" },
  { id: 2, username: "student", password: "1111", name: "Student", role: "user" },
  { id: 3, username: "sensei", password: "gehenna", name: "Sensei", role: "teacher" },
];

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // เคลียร์ข้อผิดพลาดเก่าก่อนหน้า

    const foundUser = MOCK_USERS.find(
      (u) => u.username === username.trim() && u.password === password.trim()
    );

    if (foundUser) {
      setLoading(true);
      localStorage.setItem("user", JSON.stringify(foundUser));

      // หน่วงเวลา 2 วินาทีเพื่อแสดงแอนิเมชัน Portal ก่อนเปลี่ยนหน้า
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      setError("Username หรือ Password ไม่ถูกต้อง");
    }
  };

  return (
    <div className={`login-container ${loading ? "is-loading" : ""}`}>
      
      {/* ส่วนของการ์ดล็อกอิน (จะซ่อนตัวเมื่อ Loading สำเร็จ) */}
      <div className={`login-card ${loading ? "card-fade-out" : ""}`}>
        <div className="logo-area">
          <div className="emblem">😈</div>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <h1 className="academy-title">GEHENNA ACADEMY</h1>
          <h3 className="sub-title">Pandemonium Society Gate</h3>

          {error && <div className="error-message">{error}</div>}

          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? "CONNECTING..." : "ENTER DISTRICT"}
          </button>
        </form>
      </div>

      {/* ส่วนของ Gehenna Portal (แสดงเมื่อล็อกอินผ่านและกำลัง Loading) */}
      {loading && (
        <div className="portal-wrapper">
          <div className="portal-ring ring-1"></div>
          <div className="portal-ring ring-2"></div>
          <div className="portal-ring ring-3"></div>
          <div className="portal-glow"></div>
          <h2 className="portal-status">ACCESS GRANTED</h2>
          <p className="portal-subtext">Connecting to Gehenna Academy...</p>
        </div>
      )}
      
    </div>
  );
}