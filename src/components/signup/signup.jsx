import React from 'react';
import { Input } from '@material-ui/core';

export default function SignUp() {
    return (
        <>
        <h1>Welcome to Discoverr.</h1>
        <p>Tell us about you here. Remember, the more information the add, the better your profile will be!</p>
        <Input type="text" placeholder="Your Name" required={true}></Input>
        </>
    )
}