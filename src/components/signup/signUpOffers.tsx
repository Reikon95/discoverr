import React, { useContext, useState } from "react"
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core"
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
import axios from "axios"

export default function SignUpOffers() {
  const user = useContext(UserContext)
  const history = useHistory()

  const [offers, setOffers] = useState([{ name: "", offer: "" }])
  const [inputs, setInputs] = useState([0])

  const addAnother = (): any => {
    setInputs([...inputs, inputs.length])
    setOffers([...offers, { name: "", offer: "" }])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // user.setOffers([]);
    const userPayload = {
      id: Math.random() * 100,
      name: user.name,
      bio: user.bio,
    }
    axios
      .post("http://localhost:5000/users/adduser", userPayload)
      .then((res) => console.log(res.data))
    history.push("/showcase")
  }

  // for each input field generated, add another object into the offers

  const modifyOffers = (ev, indx, isName) => {
    isName ? (offers[indx].name = ev) : (offers[indx].offer = ev)
  }

  console.log(user)

  return (
    <>
      <h2>Current Offers</h2>
      <p>
        To get started, please list the current sponsorship offers you can pass
        onto your loyal followers! Remember, you can come back to this later if
        you prefer.
      </p>
      <form onSubmit={handleSubmit}>
        {inputs.map((i) => (
          <div className="offer-signup-wrapper">
            <FormControl>
              <InputLabel>Company:</InputLabel>{" "}
              <Input
                type="text"
                required={false}
                onChange={(e) => modifyOffers(e.target.value, i, true)}
              ></Input>
            </FormControl>

            <FormControl>
              <InputLabel>Enter The Deal:</InputLabel>
              <Input
                type="text"
                required={false}
                onChange={(e) => modifyOffers(e.target.value, i, false)}
              ></Input>{" "}
            </FormControl>
          </div>
        ))}

        <Button onClick={addAnother}>Add another</Button>

        <input
          id="formButton"
          className="btn sign-up-button"
          type="submit"
          placeholder="Send message"
          value="Check out your profile!"
        />
      </form>
    </>
  )
}
