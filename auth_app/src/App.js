import React from "react";
import "firebase/auth";
import "./App.css";
import SignUp from "./components/signUp";
import { AuthProvider } from "./components/contexts/AuthContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />{" "}
          <Route path="/signup" element={<SignUp />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
        </Routes>{" "}
        {/* <SignUp /> */}{" "}
      </AuthProvider>{" "}
    </Router>
  );
}

export default App;
