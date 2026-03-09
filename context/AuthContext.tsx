import React, { createContext, useState, ReactNode } from "react";

interface User {
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [user, setUser] = useState<User | null>(null)

  const login = (email: string) => {

    setUser({
      name: "Solar User",
      email,
    })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}