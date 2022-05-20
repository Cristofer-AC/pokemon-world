import axios from "axios"

export const getMove = (url) => 
    axios.get(url)
    .then((res) => {
        return res.data
    })