import React, { useState } from "react";
import { useRef } from "react";
import { useAuth } from "./contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogIn(event) {
    console.log("LogIn");
    event.preventDefault();
    try {
      setError("");
      setLoading(true);
      await logIn(email, password);
      navigate("/");
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (
    <>
      {" "}
      <h2>LogIn</h2>
      {error}
      <div className="form-holder">
        <form className="form" onSubmit={handleLogIn}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            ref={passwordRef}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={handleLogIn}
            disabled={loading}
            className="Link"
          >
            Log In
          </button>
          <p>
            Don't have an account?
            <Link className="Link" to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
