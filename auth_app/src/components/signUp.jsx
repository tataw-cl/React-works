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

  function handleSignUp(event) {
    // Add your sign up logic here
    event.preventDefault();
    signup(email, password);
    console.log(email, password, ConfirmPassword);
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form className="form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          ref={emailRef}
          onChange={(e) => setEmail(e.current.value)}
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
        <button type="button" onClick={handleSignUp}>
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
