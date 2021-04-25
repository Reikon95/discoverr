import React from "react"
import { Input, InputLabel } from "@material-ui/core"
import "./signup.scss"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import Button from "@material-ui/core/Button"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function SignUp() {
  return (
    <>
      <h1>Welcome to Discoverr.</h1>
      <p>
        Tell us about you here. Remember, the more information the add, the
        better your profile will be!
      </p>
      <Input type="text" placeholder="Your Name" required={true}></Input>
      <p>Put the name you're best known by online</p>
      <Input
        type="number"
        placeholder="Your Age"
        min="18"
        required={true}
      ></Input>
      <h2>Socials</h2>
      <p>
        Link whichever public social media profiles you actively use. All fields
        are optional.
      </p>
      <div className="socials-wrapper">
        <Input type="text" placeholder="Instagram" required={true}></Input>
        <Input type="text" placeholder="Twitter" required={true}></Input>
        <Input type="text" placeholder="TikTok" required={true}></Input>
        <Input type="text" placeholder="Facebook" required={true}></Input>
        <Input type="text" placeholder="Youtube" required={true}></Input>
      </div>
      <p>Now let's move on to list your best offers for your audience!</p>
      <Link to="/signup2">
        <Button>Next Step</Button>
      </Link>
    </>
  )
}
