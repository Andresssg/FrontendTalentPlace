import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

export function AuthContextProvider ({ children }) {
  const [auth, setAuth] = useState(null)
  const logout = () => {
    setAuth(null)
  }
  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
