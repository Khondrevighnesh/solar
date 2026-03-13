import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    console.log("LOGIN SUCCESS");
    setIsLoggedIn(true);
  };

  const logout = () => {
    console.log("LOGOUT SUCCESS");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};