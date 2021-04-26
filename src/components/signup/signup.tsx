import React, { useState } from "react"
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core"
import "./signup.scss"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import Button from "@material-ui/core/Button"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hit submit ", userDetails)
    // navigate to next page - router link?
  }

  const [userDetails, setUserDetails] = useState({
    name: null,
    age: null,
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
              Put the name you're best known by online
            </FormHelperText>
          </FormControl>
          <FormControl>
            {/* <Input
              type="number"
              placeholder="Your Age"
              min="18"
              required={true}
              onChange={(e) =>
                setUserDetails({ ...userDetails, age: e.target.value })
              }
            ></Input> */}
            <TextField
              type="number"
              inputProps={{ min: 18, max: 99 }}
              onChange={(e) =>
                setUserDetails({ ...userDetails, age: e.target.value })
              }
            />

            <FormHelperText>
              You currently must be 18 to use Discoverr.
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
        {/* <Link to="/signup2"> */}
        <input
          id="formButton"
          className="btn"
          type="submit"
          placeholder="Send message"
        />
        {/* </Link> */}
      </form>
    </>
  )
}
