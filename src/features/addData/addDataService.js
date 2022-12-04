/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import axios from "axios";

//   Post user Info

const postLink = async (userData,) => {
    const config = {
        headers: {
            Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("userLogin")).token}`
        }
    }
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}api/info`, userData, config);

    return response.data
}

const addDataService = {
    postLink,
}

export default addDataService;