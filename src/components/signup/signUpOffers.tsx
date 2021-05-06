import React, { useContext, useState } from "react";
import {
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { UserProvider, UserContext } from "../../StateContext";
export default function SignUpOffers() {
  const user = useContext(UserContext);
  const history = useHistory();

  const [offers, setOffers] = useState([]);
  const [inputs, setInputs] = useState([]);

  const addAnother = (): any => {
    setInputs([...inputs, "input"]);
    console.log(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    user.setOffers([]);
    history.push("/signup2");
  };

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
            <InputLabel>Company</InputLabel>{" "}
            <Input type="text" required={false}></Input>
            <InputLabel>Enter The Deal:</InputLabel>
            <Input type="text" required={true}></Input>
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
  );
}
