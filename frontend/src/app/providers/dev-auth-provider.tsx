/**
 * DevAuthProvider — used during development (Phase 1) until the login page is built.
 * Auto-logs in as the admin user and stores the JWT in localStorage so that
 * all axiosClient requests are authenticated.
 *
 * This entire component will be replaced with a real AuthProvider in Phase 2.
 */
import { useEffect, useState } from "react";
import axiosClient from "@/services/api/axios-client";

interface Props {
  children: React.ReactNode;
}

export function DevAuthProvider({ children }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setReady(true);
      return;
    }

    // Auto-login with the seeded admin credentials
    // TransformInterceptor wraps response: { data: { accessToken, refreshToken, user }, success, timestamp }
    axiosClient
      .post("/auth/login", {
        email: "admin@platform.ai",
        password: "Admin@123456",
      })
      .then((res) => {
        const accessToken: string =
          res.data?.data?.accessToken || res.data?.accessToken;
        if (accessToken) {
          localStorage.setItem("token", accessToken);
        }
      })
      .catch((err: Error) => {
        console.warn("[DevAuth] Auto-login failed:", err.message);
      })
      .finally(() => {
        setReady(true);
      });
  }, []);

  if (!ready) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "#0f172a",
          color: "#94a3b8",
          fontFamily: "system-ui",
          fontSize: "14px",
        }}
      >
        Initializing...
      </div>
    );
  }

  return <>{children}</>;
}
