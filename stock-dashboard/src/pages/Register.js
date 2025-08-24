import { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [username, setUseName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser({ email, password,username });
    if (res.success) navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="p-6 bg-white shadow rounded" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <input
          className="border p-2 mb-2 w-full"
          placeholder="UserName"
          value={username}
          onChange={(e) => setUseName(e.target.value)}
        />
        <input
          className="border p-2 mb-2 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-green-500 text-white p-2 rounded w-full">Register</button>
      </form>
    </div>
  );
}

export default Register;
