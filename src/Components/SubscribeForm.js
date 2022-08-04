import React, {useState, useEffect} from "react";
import {Box, Button, TextField} from "@mui/material";
import {subscribe} from '../Api/Api';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './SubscribeForm.scss';

const SubscribeForm = (props) => {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        subscribe({email: email}).then(() => {
            setSuccess(true);
        }).catch((err) => {
            setErrors(err.response.data);
        });
    };

    return (
        <div className="subscribe">
            <h2>Feliratkozás</h2>

            {success ? (
                <Box
                    className="success-message"
                >
                    <CheckCircleOutlineIcon color="success" sx={{ fontSize: 100 }} />
                    <h2>Sikeres feliratkozás</h2>
                </Box>
            ) : (
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
                        error={typeof errors.email !== "undefined"}
                        helperText={errors.email}
                    />
                    <Button type="submit" variant="contained" color="success">Feliratkozás</Button>
                </Box>
            )}
        </div>
    );
};

export default SubscribeForm;
