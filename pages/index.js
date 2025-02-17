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
    <div className="flex items-center justify-center h-screen" style={{ backgroundColor: "#660000" }}>
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://images-ext-1.discordapp.net/external/rO3knJLynojcojljpUKxdUMowNuSpChxQ6O2PPQJUnI/%3Fsize%3D1024/https/cdn.discordapp.com/icons/1302529950611542068/fd87a9027055fdf22b179ea071c6c559.png?format=webp&quality=lossless&width=512&height=512"
            alt="Logo"
            className="w-16 h-16 rounded-full"
          />
        </div>

        {/* Login Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-4">
            <input
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <input
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>

              
    </div>
  );
}
