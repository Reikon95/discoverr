import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { UserProvider, UserContext } from "../../StateContext"
import { GoogleLogin } from "react-google-login"
import Icon from "./icon"
import axios from "axios"

export default function SocialSignUp() {
  const user = useContext(UserContext)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    history.push("/signup-step-1")
  }

  const isEmailDuplicate = (email) => {
    console.log(email)
    return axios
      .get("http://localhost:5000/users/finduseremail", email)
      .then((res) => {
        return res.data
      })
    // if (dupeEmail) {
    //   // console.log(dupeEmail)
    //   console.log(dupeEmail, true)
    // } else {
    //   console.log(dupeEmail, false)
    // }
  }

  const googleSuccess = async (res) => {
    const googleProfileDetails = res?.profileObj
    const token = res?.tokenId

    isEmailDuplicate(googleProfileDetails).then((data) => {
      console.log(data)
      if (data && data.length > 0) {
        console.log(data)
        return
      } else {
        try {
          axios
            .post(
              "http://localhost:5000/users/addgoogleuser",
              googleProfileDetails
            )
            .then((res) => console.log(res.data))
          history.push("/signup-step-1")
        } catch (error) {
          console.log(error)
        }
      }
    })
  }

  const googleFailure = (err) => {
    console.log("fail")
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
            <Button
              className="google-button"
              color="primary"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              startIcon={<Icon />}
              variant="contained"
            >
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
