import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { fetchCurrentUser, logout } from "../api/auth";

export default function Dashboard() {
  const authReady = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!authReady) return;

    fetchCurrentUser()
      .then(setUser)
      .catch(() => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
      });
  }, [authReady]);

  if (!authReady || !user) {
    console.log("Inside condition")
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">
        Welcome, {user.username}
      </h1>

      <button
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
        onClick={async () => {
          await logout();
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}
