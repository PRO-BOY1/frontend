// src/pages/index.js (Updated Login Page)
import React from "react";

export default function Login() {
    return (
        <div className="flex items-center justify-center h-screen bg-[#660000]">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 text-center">
                <img src="/logo.png" alt="Logo" className="mx-auto mb-4 w-20 h-20 rounded-full" />
                <h2 className="text-white text-2xl font-semibold">Login</h2>
                
                <div className="mt-4">
                    <div className="relative">
                        <input type="email" placeholder="Email" className="w-full p-3 bg-gray-700 text-white rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <span className="absolute left-3 top-3 text-gray-400">📧</span>
                    </div>
                    <div className="relative mt-3">
                        <input type="password" placeholder="Password" className="w-full p-3 bg-gray-700 text-white rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <span className="absolute left-3 top-3 text-gray-400">🔒</span>
                    </div>
                    <button className="w-full mt-4 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Login</button>
                </div>
            </div>
        </div>
    );
}
