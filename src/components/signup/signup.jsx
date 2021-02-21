import React from 'react';
import { Input, InputLabel  } from '@material-ui/core';

export default function SignUp() {
    return (
        <>
        <h1>Welcome to Discoverr.</h1>
        <p>Tell us about you here. Remember, the more information the add, the better your profile will be!</p>
        <InputLabel>Name: </InputLabel><Input type="text" placeholder="Your Name" required={true}></Input>
        <p>Put the name you're best known by online</p>
        <InputLabel>Age: </InputLabel><Input type="number" min="18"></Input>

        <h2>Socials</h2>
        <p>Fill out whichever public social media profiles you actively use.</p>
        <p>For the following, please input your username - we will do the magic :) </p>
        <InputLabel>Instagram</InputLabel><Input type="text" placeholder="Instagram" required={true}></Input>
        <Input type="text" placeholder="Your Name" required={true}></Input>
        <Input type="text" placeholder="Your Name" required={true}></Input>
        <Input type="text" placeholder="Your Name" required={true}></Input>
        <Input type="text" placeholder="Your Name" required={true}></Input>
        <Input type="text" placeholder="Your Name" required={true}></Input>

        <h2>Current Offers</h2>
        <p>To get started, please list the current sponsorship offers you can pass onto your loyal followers!</p>

        <Input type="text" placeholder="Your Name" required={true}></Input>
        <Input type="text" placeholder="Your Name" required={true}></Input>
        <Input type="text" placeholder="Your Name" required={true}></Input>
        <Input type="text" placeholder="Your Name" required={true}></Input>
        <Input type="text" placeholder="Your Name" required={true}></Input>
        <Input type="text" placeholder="Your Name" required={true}></Input>

        <p>Verify your identity</p>

        </>
    )
}