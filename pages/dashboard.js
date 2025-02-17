import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, { headers: { Authorization: `Bearer ${token}` } });
        setUserData(res.data);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <h2 className="text-xl font-bold">User Dashboard</h2>
        {userData ? (
          <div className="mt-4">
            <p>💰 Cash: {userData.c1.cash}</p>
            <p>🏦 Bank: {userData.c1.bank}</p>
            <p>💲 Total: {userData.c1.cash + userData.c1.bank}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
}
