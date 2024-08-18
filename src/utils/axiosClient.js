import axios from "axios";

let mainURL = 'https://json-api.uz/api/project/test-api'
export const axiosClient = axios.create({
    baseURL:mainURL
    
})