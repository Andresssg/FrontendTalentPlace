import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({})

export function AuthContextProvider ({ children }) {
  const BASE_URL = 'http://127.0.0.1:8000/api/v1'
  const [auth, setAuth] = useState(null)
  const ROLES = {
    1: 'OFERENTE',
    2: 'SOLICITANTE',
    3: 'ADMIN'
  }
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    const user = JSON.parse(window.localStorage.getItem('user'))
    user && token ? setAuth({ token, user }) : setAuth(null)
  }, [])

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    const res = await fetch(`${BASE_URL}/categories`, {
      method: 'GET'
    })
    const data = await res?.json()
    const categoryNames = data.map(element => element?.category_name)
    setCategories(categoryNames)
  }

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
    <AuthContext.Provider value={{ auth, setAuth, logout, login, BASE_URL, ROLES, categories }}>
      {children}
    </AuthContext.Provider>
  )
}
