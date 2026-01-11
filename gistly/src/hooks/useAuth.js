import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAuthToken } from "../api/auth";

export default function useAuth() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      setReady(true);
      return;
    }

    fetchAuthToken()
      .then((token) => {
        console.log(token)
        localStorage.setItem("authToken", token);
        setReady(true);
      })
      .catch(() => {
        navigate("/login", { replace: true });
      });
  }, [navigate]);

  return ready;
}
