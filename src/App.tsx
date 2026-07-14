import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* หน้าแรกสุดคือหน้า Login */}
        <Route path="/" element={<Login />} />

        {/* หน้าข้อมูลน้อง Ibuki ที่ต้องผ่านการ Login ก่อน */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;