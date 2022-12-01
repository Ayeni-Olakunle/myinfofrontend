/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import axios from "axios";

//   Register user

const register = async (userData) => {
    const response = await axios.post("https://sleepy-cyan-beanie.cyclic.app/api/users", userData);

    if (response.data) {
        sessionStorage.setItem("user", JSON.stringify(response.data));
    }

    return response
}

const authService = {
    register
}

export default authService