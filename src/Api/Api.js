import axios from "axios";

export async function subscribe(params) {
    const requestOptions = {
        headers: { 'Content-Type': 'application/json' },
    };

    return await axios.post('https://domokos-gabor.hu/api/subscribe', {...params}, requestOptions);
}
