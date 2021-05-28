import React, { useState, useContext, useEffect } from "react"

import { useHistory } from "react-router-dom"

import Button from "@material-ui/core/Button"
import { UserProvider, UserContext } from "../../StateContext"
import { GoogleLogin } from "react-google-login"
import Icon from './icon';


export default function SocialSignUp() {
  const user = useContext(UserContext)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    // user.setName(userDetails.name)
    // user.setBio(userDetails.bio)
    // user.setSignedIn(true)
    history.push("/signup")
  }

  const googleSuccess = async (res) => {
    console.log('suc')
    const result = res?.porfileObj
    const token = res?.tokenId

    console.log(res)
  }

  const googleFailure = (err) => {
    console.log('fail')
    console.log(err)
  }

  return (
    <>
      <h1>Welcome to Discoverr.</h1>
      <div>Sign in with your socials below, it's free!</div>
      <GoogleLogin
      clientId="799834232045-neeue9a687vpb3q9d6ff4u7jamtl1d16.apps.googleusercontent.com"
      render={(renderProps) => {
        return (
          <Button className="google-button" color="primary" onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">

            Google Sign In

          </Button>
        )
      }}
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy="single_host_origin"
      />

    </>
  )
}
