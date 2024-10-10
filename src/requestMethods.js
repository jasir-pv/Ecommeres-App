import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjZmMjA0ZmI2ODdlOTQ1MGU3YWJiOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyODQ4MzgxMCwiZXhwIjoxNzI4NzQzMDEwfQ.g8IrJyypz6KrDCQ_NKScP9k4aSPAHSwCDmRFk8kYUYY"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`Bearer ${TOKEN}`},
})