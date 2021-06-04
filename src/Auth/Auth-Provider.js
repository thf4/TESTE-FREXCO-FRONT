import React, { useState, createContext, useEffect } from "react";
import jwt from "jsonwebtoken";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState();

  useEffect(() => {
    const token = sessionStorage.getItem("Token");
    if (token) {
      try {
        const decoded = jwt.decode(token, { headers: true });
        setAuthenticated(decoded);
      } catch (err) {
        sessionStorage.removeItem("Token");
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
