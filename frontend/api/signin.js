import axios from "axios";
export const signin = async (email, password) => {
    const url = "http://localhost:5550/signin";

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }
    try {
        let req = await axios.post(url, {
            "email": email,
            "password": password,
        }, config);
        const {data: {token}} = req;
        console.log(token);

        // store token
        // Assuming you have received a token from your backend

        // Store the token in local storage
        localStorage.setItem('authToken', token);
        // navigate to main page
        window.location.href = '/';

    } catch (e) {
        console.log(e);
    }
};