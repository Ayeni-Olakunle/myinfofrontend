/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import axios from "axios";

//   Login user
const login = async (loginData) => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}api/users/login`, loginData);

    if (response.data) {
        sessionStorage.setItem("userLogin", JSON.stringify(response.data));
    }

    return response
}

const logout = () => {
    sessionStorage.removeItem("userLogin");
}

const loginService = {
    login,
    logout
}

export default loginService