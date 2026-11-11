import { useState } from "react";
import "../csss/Login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Demo login
    if (
      email === "admin@example.com" &&
      password === "admin123"
    ) {
      window.location.href = "/admin";
    } else {
      alert("Incorrect email or password");
    }
  };

  return (
    <>
      <div className="Compass">
        <p>/Admin/Login</p>
      </div>

      <div className="login-page">

        <div className="login-container">

          <div className="login-logo">
            <h2>Admin Panel</h2>
          </div>

          <h1>Welcome Back</h1>

          <p className="login-description">
            Sign in to access the administration panel.
          </p>

          <form onSubmit={handleLogin}>

            <div className="login-input">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />
            </div>

            <div className="login-input">
              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />
            </div>

            <div className="login-options">

              <label className="remember">
                <input
                  type="checkbox"
                  name="remember"
                />

                <span>
                  Remember me
                </span>
              </label>

              <a href="/forgot-password">
                Forgot password?
              </a>

            </div>

            <button
              type="submit"
              className="login-button"
            >
              Sign In
            </button>

          </form>

          <div className="login-footer">
            <p>
              Authorized personnel only.
            </p>
          </div>

        </div>

      </div>
    </>
  );
};

export default Login;