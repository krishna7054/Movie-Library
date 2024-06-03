import axios from 'axios';

const API_URL = 'https://backend-movie-265s.onrender.com/api';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users/register`, userData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            // Throw the error message returned by the API
            throw new Error(error.response.data.message);
        } else {
            // Throw a generic error message
            throw new Error('Registration failed. Please try again.');
        }
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, userData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            // Throw the error message returned by the API
            throw new Error(error.response.data.message || 'Login failed');
        } else {
            // Throw a generic error message
            throw new Error('Login failed. Please try again.');
        }
    }
};

export const searchMovies = async (title) => {
    const response = await axios.get(`${API_URL}/movies/search?title=${title}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

export const createList = async (listData) => {
    try {
        const response = await axios.post(`${API_URL}/lists`, {
            name: listData.name,
            isPublic: listData.isPublic, // Include the isPublic property
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to create list:', error);
        throw error;
    }
};

export const getLists = async () => {
    const response = await axios.get(`${API_URL}/lists`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

export const addMovieToList = async (listId, movie) => {
    const response = await axios.post(`${API_URL}/lists/${listId}`, { movie }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

export const deleteMovieFromList = async (listId, movieId) => {
    const response = await axios.delete(`${API_URL}/lists/${listId}/movies/${movieId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        
    });
    return response.data;
};

export const deleteList = async (listId) => {
    const response = await axios.delete(`${API_URL}/lists/${listId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};


