import React, {useState, useEffect} from "react";
import {Box, Button, TextField} from "@mui/material";
import {subscribe} from '../Api/Api';
import './SubscribeForm.scss';

const SubscribeForm = (props) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const response = subscribe({email: email});
        console.log(response);
    };

    return (
        <div className="subscribe">
            <h2>Feliratkozás</h2>

            <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                noValidate
                autoComplete="off"
                className="subscribe-form"
                onSubmit={handleSubmit}
            >
                <TextField
                    label="Email cím"
                    id="custom-css-outlined-input"
                    variant="standard"
                    onChange={evt => setEmail(evt.target.value)}
                />
                <Button type="submit" variant="contained" color="success">Feliratkozás</Button>
            </Box>
        </div>
    );
};

export default SubscribeForm;
