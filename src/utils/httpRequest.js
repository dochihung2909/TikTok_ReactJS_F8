import axios from 'axios'

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

// Config return response.data
request.interceptors.response.use((response) => {
    return response.data
})

export default request
