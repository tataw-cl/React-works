import React, { useState } from "react";
import { useRef } from "react";
import { useAuth } from "./contexts/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const ConfirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error1, setError1] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSignUp(event) {
    // Add your sign up logic here
    event.preventDefault();
    if (password !== ConfirmPassword) {
      return setError1("passwords do not match");
    }
    try {
      setError1("");
      setLoading(true);
      await signup(email, password);
      navigate("/");
    } catch (error1) {
      console.error(error1);
      setError1("Failed to create account");
    }
    // console.log({ email }, { password });
    setLoading(false);
  }

  return (
    <div>
      <h2>Sign Up</h2>
      {error1}
      <div className="form-holder">
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
          <label>Confirm password</label>
          <input
            type="password"
            value={ConfirmPassword}
            ref={ConfirmPasswordRef}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSignUp}
            disabled={loading}
            className="Link"
          >
            Sign Up
          </button>
          <p>
            Already have an account?
            <Link className="Link" to="/login">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
