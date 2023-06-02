import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({})

export function AuthContextProvider ({ children }) {
  const BASE_URL = 'http://localhost:8000/api/v1'
  const [auth, setAuth] = useState(null)
  const ROLES = {
    1: 'OFERTANTE',
    2: 'SOLICITANTE',
    3: 'ADMIN'
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    const user = JSON.parse(window.localStorage.getItem('user'))
    user && token ? setAuth({ token, user }) : setAuth(null)
  }, [])

  const login = (data) => {
    const { token, user } = data
    setAuth(data)
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('user', JSON.stringify(user))
  }
  const logout = () => {
    setAuth(null)
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, login, BASE_URL, ROLES }}>
      {children}
    </AuthContext.Provider>
  )
}
