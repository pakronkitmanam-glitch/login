import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter basename="/project1">
      <Routes>
        <Route path="/" element={<Login />} />

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