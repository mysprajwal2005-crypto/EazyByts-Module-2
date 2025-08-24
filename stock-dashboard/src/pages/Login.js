import { useState } from "react";
import { loginUser } from "../api/api";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser({ email, password });
    if (res.token) {
      login(res);
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="p-6 bg-white shadow rounded" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 mb-2 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
      </form>
    </div>
  );
}

export default Login;
