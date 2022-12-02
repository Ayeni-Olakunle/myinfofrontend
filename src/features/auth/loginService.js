/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import axios from "axios";

//   Login user

const login = async (loginData) => {
    const response = await axios.post("https://sleepy-cyan-beanie.cyclic.app/api/users/login", loginData);

    if (response.data) {
        sessionStorage.setItem("userLogin", JSON.stringify(response.data));
    }

    return response
}

const loginService = {
    login
}

export default loginService