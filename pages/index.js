import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";

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
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#660000] via-[#990000] to-[#660000]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#2d2d2d] p-10 rounded-2xl shadow-2xl w-96 max-w-md"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://images-ext-1.discordapp.net/external/rO3knJLynojcojljpUKxdUMowNuSpChxQ6O2PPQJUnI/%3Fsize%3D1024/https/cdn.discordapp.com/icons/1302529950611542068/fd87a9027055fdf22b179ea071c6c559.png?format=webp&quality=lossless&width=512&height=512"
            alt="Logo"
            className="w-24 h-24 rounded-full shadow-lg"
          />
        </div>

        {/* Login Heading */}
        <h2 className="text-white text-4xl font-semibold text-center mb-6">Login</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4 text-sm">{error}</p>}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div className="flex items-center bg-[#3a3a3a] p-4 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
            <FaUser className="text-white mx-3" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent text-white outline-none w-full py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center bg-[#3a3a3a] p-4 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
            <FaLock className="text-white mx-3" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent text-white outline-none w-full py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}
