import { useState, useEffect } from "react";

export async function subscribe(params) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };

    fetch('http://127.0.0.1', requestOptions)
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((err) => console.log(err));

    return null;
}
