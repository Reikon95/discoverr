import React from "react"
import { Input, InputLabel } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import Button from "@material-ui/core/Button"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function SignUp() {
  const companiesDB = [{ company: "The Protein Works", id: "0000001" }]
  return (
    <>
      <h1>Welcome to Discoverr.</h1>
      <p>
        Tell us about you here. Remember, the more information the add, the
        better your profile will be!
      </p>
      <InputLabel>Name: </InputLabel>
      <Input type="text" placeholder="Your Name" required={true}></Input>
      <p>Put the name you're best known by online</p>
      <InputLabel>Age: </InputLabel>
      <Input type="number" min="18"></Input>
      <InputLabel>Profile Picture</InputLabel>
      IMPORT FROM INSTAGRAM
      <h2>Socials</h2>
      <p>Fill out whichever public social media profiles you actively use.</p>
      <p>Add a link to each of your social media profiles</p>
      <InputLabel>Instagram</InputLabel>
      <Input type="text" placeholder="Instagram" required={true}></Input>
      <InputLabel>Twitter</InputLabel>
      <Input type="text" placeholder="Your Name" required={true}></Input>
      <InputLabel>TikTok</InputLabel>
      <Input type="text" placeholder="Your Name" required={true}></Input>
      <InputLabel>Snap</InputLabel>
      <Input type="text" placeholder="Your Name" required={true}></Input>
      <InputLabel>Facebook</InputLabel>
      <Input type="text" placeholder="Your Name" required={true}></Input>
      <InputLabel>YouTube</InputLabel>
      <Input type="text" placeholder="Your Name" required={true}></Input>
      <p>Now let's move on to list your best offers for your audience!</p>
      <Link to="/signup2">
        <Button>Next Step</Button>
      </Link>
    </>
  )
}
