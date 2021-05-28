import React, { useState, useContext, useEffect } from "react"
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core"
import { useHistory } from "react-router-dom"
import "./signup.scss"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import Button from "@material-ui/core/Button"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { UserProvider, UserContext } from "../../StateContext"
import { GoogleLogin } from "react-google-login"


export default function SignUp() {
  const user = useContext(UserContext)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    user.setName(userDetails.name)
    user.setBio(userDetails.bio)
    user.setSignedIn(true)
    history.push("/signup2")
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

  const [userDetails, setUserDetails] = useState({
    name: null,
    age: null,
    bio: "",
    email: "",
    instagram: null,
    tiktok: null,
    facebook: null,
    twitter: null,
    youtube: null,
  })
  return (
    <>
      <h1>Welcome to Discoverr.</h1>
      <p>
        Tell us about you here. Remember, the more information the add, the
        better your profile will be!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-vertical-batch">
          <FormControl>
            <Input
              type="text"
              placeholder="Your Name"
              required={true}
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
            ></Input>

            <FormHelperText>
              Put the name you're best known by online - either a nickname,
              brand name, or your real name.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <TextField
              type="number"
              inputProps={{ min: 18, max: 99 }}
              onChange={(e) =>
                setUserDetails({ ...userDetails, age: e.target.value })
              }
            />

            <FormHelperText>
              You currently must be at least 18 years old to use Discoverr.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <TextField
              type="email"
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              placeholder="Your email"
            />

            <FormHelperText>
              This is for us to contact you, it isn't public.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <TextField
              placeholder="A bit about me!"
              onChange={(e) =>
                setUserDetails({ ...userDetails, bio: e.target.value })
              }
              multiline={true}
              rows={4}
            ></TextField>
            <FormHelperText>
              This is your bio - tell us a bit about yourself! This is what your
              fans will read, so keep that in mind.
            </FormHelperText>
          </FormControl>
        </div>
        <h2>Socials</h2>
        <p>
          Link whichever public social media profiles you actively use. All
          fields are optional.
        </p>
        <div className="socials-wrapper form-vertical-batch">
          <FormControl>
            <Input
              type="text"
              placeholder="Instagram"
              required={false}
              onChange={(e) =>
                setUserDetails({ ...userDetails, instagram: e.target.value })
              }
            ></Input>
          </FormControl>

          <FormControl>
            <Input
              type="text"
              placeholder="Twitter"
              required={false}
              onChange={(e) =>
                setUserDetails({ ...userDetails, twitter: e.target.value })
              }
            ></Input>
          </FormControl>

          <FormControl>
            <Input
              type="text"
              placeholder="TikTok"
              required={false}
              onChange={(e) =>
                setUserDetails({ ...userDetails, tiktok: e.target.value })
              }
            ></Input>
          </FormControl>

          <FormControl>
            <Input
              type="text"
              placeholder="Facebook"
              required={false}
              onChange={(e) =>
                setUserDetails({ ...userDetails, facebook: e.target.value })
              }
            ></Input>
          </FormControl>

          <FormControl>
            <Input
              type="text"
              placeholder="Youtube"
              required={false}
              onChange={(e) =>
                setUserDetails({ ...userDetails, youtube: e.target.value })
              }
            ></Input>
          </FormControl>
        </div>

        <p>Now let's move on to list your best offers for your audience!</p>
        <input
          id="formButton"
          className="btn sign-up-button"
          type="submit"
          placeholder="Send message"
          value="Join Discoverr!"
        />
      </form>
    </>
  )
}
