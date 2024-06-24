import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:9000",
  withCredentials: true,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:5173",
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
   }
})


export default instance