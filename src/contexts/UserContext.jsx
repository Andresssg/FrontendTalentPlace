import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export function UserContextProvider (props) {
  const [user, setUser] = useState(null)

  const updateUser = (newUser) => {
    setUser(newUser)
  }
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
