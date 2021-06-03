import React, { createContext, useState } from "react"

export const UserContext = createContext(null)

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [tagline, setTagline] = useState("")
  const [bio, setBio] = useState("")
  const [offers, setOffers] = useState([])
  const [googleToken, setGoogleToken] = useState("")

  // coming back to this, we will pass the login token here to ensure user is logged in

  return (
    <UserContext.Provider
      value={{
        name,
        tagline,
        signedIn,
        bio,
        offers,
        googleToken,
        email,
        setName,
        setEmail,
        setTagline,
        setSignedIn,
        setBio,
        setOffers,
        setGoogleToken,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
