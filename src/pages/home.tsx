import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate ถูกต้องแล้ว
import "./home.css";

function Home() {
  // 🛠️ จุดที่แก้ไข: ต้องประกาศ navigate ตรงนี้ก่อน ถึงจะใช้ใน handleLogout ได้ครับ
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem("user"); // ลบข้อมูล user ออกจากระบบ
    navigate("/", { replace: true });
  };

  return (
    <div className="container">
      <div className="card">  

        <img
          src="ibuki.jpg" /* อย่าลืมเปลี่ยนรูปภาพเป็นรูปน้องอิบุุกินะครับ */
          alt="Tanga Ibuki"
          className="profile"
        />

        <h1>Tanga Ibuki (丹賀 イブキ)</h1>

        <h3>Mischief Maker | Pandemonium Society's Mascot</h3>

        <p className="intro">
          สวัสดีค่ะ! หนูก็คืออิบุุกิ จากชมรมวิจัยปัญหาการพัฒนาแห่งสถาบันเกเฮนน่าค่ะ! 
          ชอบวาดรูประบายสี แทะอมยิ้ม แล้วก็ออกไปเดินเล่นกับพวกพี่ๆ (โดยเฉพาะพี่มาโกโตะ!) 
          ถึงใครจะบอกว่าหนูเป็นเด็กสร้างปัญหา แต่จริงๆ แล้วหนูแค่กำลังหาอะไรสนุกๆ ทำเองนะ!
        </p>

        <div className="section">
          <h2>🎓 การศึกษา</h2>
          <p>สถาบันการศึกษาเกเฮนน่า (Gehenna Academy)</p>
          <p>ชั้นปีที่ 1 (แต่ตัวเล็กเหมือนเด็กประถมเลยล่ะ!)</p>
        </div>

        <div className="section">
          <h2>💻 ทักษะและความสามารถ (Skills)</h2>

          <div className="skill">
            <span>ความน่ารัก (Cuteness)</span>
            <progress value="100" max="100"></progress>
          </div>

          <div className="skill">
            <span>การวาดภาพระบายสี (Drawing)</span>
            <progress value="95" max="100"></progress>
          </div>

          <div className="skill">
            <span>การอ้อนพวกพี่ๆ (Charm)</span>
            <progress value="90" max="100"></progress>
          </div>

          <div className="skill">
            <span>การขับรถถัง / อาวุธ (Combat - Launcher)</span>
            <progress value="75" max="100"></progress>
          </div>

          <div className="skill">
            <span>งานเอกสาร / การเรียน (Academic)</span>
            <progress value="20" max="100"></progress>
          </div>
        </div>

        <div className="section">
          <h2>📂 ผลงานและกิจกรรม (Activities)</h2>

          <ul>
            <li>รูปวาดระบายสีแปะเต็มห้องชมรมวิจัยปัญหาการพัฒนา</li>
            <li>ผู้นำขบวนรถถัง (Crusader-chan) ถล่มเป้าหมายร่วมกับพี่ๆ</li>
            <li>การเป็นมาสคอตสุดน่ารักที่ทำให้ประธานมาโกโตะยอมฟังทุกอย่าง</li>
          </ul>
        </div>

        <div className="section">
          <h2>📞 การติดต่อ (Contact)</h2>

          <p>MomoTalk : Ibuki_Cute_Devil</p>
          <p>Club : Pandemonium Society (ชมรมวิจัยปัญหาการพัฒนา)</p>
          <p>Location : Gehenna Academy District</p>
        </div>
        
        {/* ปุ่มล็อกเอาต์วางตรงนี้ถูกต้องแล้วครับ! */}
        <button onClick={handleLogout} className="btn-logout">
          LOGOUT FROM GEHENNA
        </button>

      </div>
    </div>
  );
}

export default Home;