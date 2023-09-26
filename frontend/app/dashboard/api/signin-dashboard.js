import axios from "axios";
export const signinDashboard = async (email, password) => {
    const url = "http://localhost:5550/signinadmin";

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
        console.log(req)
        const {data: {token}} = req;
        console.log(token);

        // store token
        // Assuming you have received a token from your backend

        // Store the token in local storage
        localStorage.setItem('authAdmin', token);
        // navigate to main page
        window.location.href = '/dashboard';

    } catch (e) {
        console.log(e);
    }
};