import axios from 'axios'

export const API = axios.create({
    baseURL: 'http://localhost:3000',
})

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token')
    if (token) {
        req.headers.Authorization = `Bearer ${token}`
    }
    return req
})

export async function login(eposta, parola) {
    const response = await API.post('/auth/login', { eposta, parola })
    return response.data
}

export async function register(data) {
    const response = await API.post('/auth/register', data)
    return response.data
}
