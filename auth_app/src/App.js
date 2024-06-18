import React from "react"
import "./App.css";
import { AuthProvider } from "./components/contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
// import PrivateRoute from "./components/privateRoute";
import SignUp from "./components/signUp";

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