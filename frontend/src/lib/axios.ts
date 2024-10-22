import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://illumed.ru" /* "http://localhost:3000", */,
});