import Image from "next/image";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#660000]">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-96 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src="/logo.png" width={100} height={100} alt="Logo" className="rounded-full" />
        </div>

        {/* Title */}
        <h2 className="text-white text-2xl font-semibold mb-6">Login</h2>

        {/* Input Fields */}
        <div className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 pl-10 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">📧</span>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 pl-10 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔒</span>
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full mt-6 p-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold">
          Login
        </button>
      </div>
    </div>
  );
}
