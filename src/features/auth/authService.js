/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import axios from "axios";

const API_URL = "https://python-threads.cyclic.app/api/users";

//   Register user

const register = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response
}

const authService = {
    register
}

export default authService