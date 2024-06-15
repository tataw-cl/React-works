import React from "react";
import { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setcurrentUser] = useState();
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
    });
    return unsubscribe;
  }, []);
  const val = {
    currentUser,
    signup,
  };
  return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
}
