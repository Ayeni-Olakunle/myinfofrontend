/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import axios from "axios";

//   Register user

const register = async (userData) => {
    const response = await axios.post(`${process.env.BASE_URL}users`, userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response
}

const authService = {
    register
}

export default authService