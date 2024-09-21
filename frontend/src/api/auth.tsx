// src/api/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login/`, credentials);
        const { accessToken } = response.data;

        // Save the access token to localStorage
        localStorage.setItem('accessToken', accessToken);

        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const logout = () => {
    // Remove the access token from localStorage
    localStorage.removeItem('accessToken');
};
