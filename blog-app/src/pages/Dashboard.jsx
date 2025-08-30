import React, { useEffect, useState } from "react";
import { account } from "../lib/appwrite";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await account.get();
        setUser(data);
      } catch {
        window.location.href = "/login"; // redirect if not logged in
      }
    };
    getUser();
  }, []);

  const logout = async () => {
    await account.deleteSession("current");
    window.location.href = "/login";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {user ? (
        <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome {user.name}</h1>
          <p className="mb-2">Email: {user.email}</p>
          <p className="mb-4">Phone: {user.prefs.phone}</p>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
