import Image from "next/image";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#660000]">
      <div className="bg-[#1f2937] p-8 rounded-2xl shadow-lg w-96 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src="/logo.png" alt="Logo" width={80} height={80} className="rounded-full" />
        </div>

        {/* Login Title */}
        <h2 className="text-white text-2xl font-bold mb-6">Login</h2>

        {/* Input Fields */}
        <div className="space-y-4">
          <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
            <span className="text-gray-400 mr-2">📧</span>
            <input type="email" placeholder="Email" className="bg-transparent w-full text-white focus:outline-none" />
          </div>

          <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
            <span className="text-gray-400 mr-2">🔒</span>
            <input type="password" placeholder="Password" className="bg-transparent w-full text-white focus:outline-none" />
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

