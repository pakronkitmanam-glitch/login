import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:3001/users");

      const user = res.data.find(
        (u: any) =>
          u.username === username.trim() &&
          u.password === password.trim()
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));

        // เริ่ม Animation
        setLoading(true);

        // รอ Animation เสร็จ
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        alert("Username หรือ Password ไม่ถูกต้อง");
      }
    } catch (error) {
      console.error(error);
      alert("เชื่อมต่อ Server ไม่สำเร็จ");
    }
  };

  return (
    <div className={`login-container ${loading ? "loading" : ""}`}>

      <div className={`login-card ${loading ? "card-hide" : ""}`}>

        <div className="logo-area">
          <div className="emblem">😈</div>
        </div>

        <form onSubmit={login} className="login-form">

          <h1>GEHENNA ACADEMY</h1>

          <h3>Pandemonium Society Gate</h3>

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

          <button
            type="submit"
            className="btn-login"
            disabled={loading}
          >
            {loading ? "CONNECTING..." : "ENTER DISTRICT"}
          </button>

        </form>

      </div>

      {loading && (
        <div className="portal">

          <div className="ring ring1"></div>

          <div className="ring ring2"></div>

          <div className="ring ring3"></div>

          <div className="glow"></div>

          <h2>ACCESS GRANTED</h2>

          <p>Connecting to Gehenna Academy...</p>

        </div>
      )}

    </div>
  );
}

export default Login;