import React, { useState } from "react";
import { useRef } from "react";
import { useAuth } from "./contexts/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const ConfirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp(event) {
    // Add your sign up logic here
    event.preventDefault();
    if (password !== ConfirmPassword) {
      return setError("passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
    } catch {
      setError("Failed to create account");
    }
    console.log(email, password, ConfirmPassword);
    setLoading(false);
  }

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <alert>*{error}</alert>}
      <form className="form" onSubmit={handleSignUp}>
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
        <input
          type="password"
          value={ConfirmPassword}
          ref={ConfirmPasswordRef}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="button" onClick={handleSignUp} disabled={loading}>
          Sign Up
        </button>
        <p>
          <a>Already have an account?</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
