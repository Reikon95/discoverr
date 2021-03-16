import React from "react"
import { Input, InputLabel } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import Button from "@material-ui/core/Button"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function SignUpOffers() {
 
  return (
    <>
      <h2>Current Offers</h2>
      <p>
        To get started, please list the current sponsorship offers you can pass
        onto your loyal followers!
      </p>
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
      <InputLabel>Company not listed? Add here</InputLabel>{" "}
      <Input type="text" required={false}></Input>
      <InputLabel>Enter The Deal:</InputLabel>
      <Input type="text" required={true}></Input>
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
      <InputLabel>Company not listed? Add here</InputLabel>{" "}
      <Input type="text" required={false}></Input>
      <InputLabel>Enter The Deal:</InputLabel>
      <Input type="text" required={true}></Input>
      <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
      <InputLabel>Company not listed? Add here</InputLabel>{" "}
      <Input type="text" required={false}></Input>
      <InputLabel>Enter The Deal:</InputLabel>
      <Input type="text" required={true}></Input>
      <Button>Check out your profile!</Button>
    </>
  )
}
