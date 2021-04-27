import React, { createContext, useState } from "react"

export const UserContext = createContext(null)

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")

  return (
    <UserContext.Provider value={{ name, tagline, setName, setTagline }}>
      {children}
    </UserContext.Provider>
  )
}
