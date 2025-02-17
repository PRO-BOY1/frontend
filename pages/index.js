import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, { email, password });
      localStorage.setItem("token", res.data.token);
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-6">
          <img
            src="https://images-ext-1.discordapp.net/external/rO3knJLynojcojljpUKxdUMowNuSpChxQ6O2PPQJUnI/%3Fsize%3D1024/https/cdn.discordapp.com/icons/1302529950611542068/fd87a9027055fdf22b179ea071c6c559.png?format=webp&quality=lossless&width=512&height=512"
            alt="Logo"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              className="w-full p-2 bg-gray-700 rounded text-white placeholder-gray-400"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              className="w-full p-2 bg-gray-700 rounded text-white placeholder-gray-400"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 rounded text-white font-semibold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
