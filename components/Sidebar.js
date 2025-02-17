import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 p-4">
      <h2 className="text-lg font-bold">Dashboard</h2>
      <ul className="mt-4">
        <li className="p-2 hover:bg-gray-700 rounded">
          <Link href="/dashboard">🏦 Money</Link>
        </li>
        {/* Add more sections here */}
      </ul>
    </div>
  );
}
