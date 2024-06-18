import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) {
    navigate("/login");
    return null;
  }

  return <Outlet />;
}
