import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

// Creating an Axios instance
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Adding a request interceptor to include the token in the Authorization header
axiosInstance.interceptors.request.use(
    (config) => {
        // Get the token from localStorage or other storage
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
