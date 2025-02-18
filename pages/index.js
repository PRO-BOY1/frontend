"use client"; // Only add this if using Next.js 13+

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#660000]">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-96 text-center flex flex-col items-center">
        <img src="/logo.png" alt="Logo" className="w-32 h-32 mb-4" />
        <h1 className="text-white text-2xl font-bold mb-4">Login</h1>
        <input 
          type="text" 
          placeholder="Email" 
          className="w-full p-2 mb-2 border rounded bg-gray-800 text-white" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-2 mb-4 border rounded bg-gray-800 text-white" 
        />
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Login</button>
      </div>
    </div>
  );
}
