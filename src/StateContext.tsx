import React, { createContext, useState } from "react"

export const UserContext = createContext(null)

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false)
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [bio, setBio] = useState("")

  return (
    <UserContext.Provider
      value={{
        name,
        tagline,
        signedIn,
        bio,
        setName,
        setTagline,
        setSignedIn,
        setBio,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
