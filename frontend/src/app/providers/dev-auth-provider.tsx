/**
 * DevAuthProvider — used during development until the login page is built.
 * Auto-logs in as the admin user and stores the JWT in localStorage.
 * React StrictMode safe — uses a ref lock to prevent double-login.
 */
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export function DevAuthProvider({ children }: Props) {
  const [ready, setReady] = useState(() => !!localStorage.getItem("token"));
  const loginAttempted = useRef(false);

  useEffect(() => {
    // Already have a token — nothing to do
    if (localStorage.getItem("token")) {
      setReady(true);
      return;
    }

    // Prevent double-login from React StrictMode double-invoke
    if (loginAttempted.current) return;
    loginAttempted.current = true;

    // Use native fetch so we don't need axiosClient (avoids circular dependency on baseURL)
    fetch("/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "admin@platform.ai",
        password: "Admin@123456",
      }),
    })
      .then((r) => r.json())
      .then((json) => {
        // Backend wraps via TransformInterceptor: { data: { accessToken }, success }
        const token: string =
          json?.data?.accessToken || json?.accessToken;
        if (token) {
          localStorage.setItem("token", token);
          console.log("[DevAuth] ✅ Logged in, token stored.");
        } else {
          console.warn("[DevAuth] ⚠️ Login succeeded but no token in response:", json);
        }
      })
      .catch((err: Error) => {
        console.warn("[DevAuth] ❌ Auto-login failed:", err.message);
      })
      .finally(() => {
        setReady(true);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          gap: "12px",
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            border: "3px solid #334155",
            borderTopColor: "#6366f1",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
        Initializing session...
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return <>{children}</>;
}
