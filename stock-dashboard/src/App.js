import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Orders from "./pages/Order";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
