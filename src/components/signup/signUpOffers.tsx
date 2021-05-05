import React, { useContext } from "react"
import { Input, InputLabel } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import Button from "@material-ui/core/Button"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom"
import { UserProvider, UserContext } from "../../StateContext"
export default function SignUpOffers() {
  const user = useContext(UserContext)
  const history = useHistory()

  const addAnother = (): any => {
    return (
      <div className="offer-signup-wrapper">
        <InputLabel>Company</InputLabel>{" "}
        <Input type="text" required={false}></Input>
        <InputLabel>Enter The Deal:</InputLabel>
        <Input type="text" required={true}></Input>
      </div>
    )
  }
  return (
    <>
      <h2>Current Offers</h2>
      <p>
        To get started, please list the current sponsorship offers you can pass
        onto your loyal followers!
      </p>
      <div className="offer-signup-wrapper">
        <InputLabel>Company</InputLabel>{" "}
        <Input type="text" required={false}></Input>
        <InputLabel>Enter The Deal:</InputLabel>
        <Input type="text" required={true}></Input>
      </div>
      <Button onClick={addAnother}>Add another</Button>
      <Button>Check out your profile!</Button>
    </>
  )
}
