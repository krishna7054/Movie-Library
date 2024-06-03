// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';

const SignUp = ({ setIsAuthenticated, setUsernameSetter }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous error
        try {
            const data = await registerUser({ username, email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
            setIsAuthenticated(true);
            setUsernameSetter(data.username);
            navigate('/');
        } catch (error) {
            if (error.message === 'User already exists') {
                setError('User already exists. Please try a different username or email.');
            } else {
                setError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div className="flex justify-center items-center p-40">
            <form onSubmit={handleSubmit} className="bg-zinc-200 p-6 grid rounded shadow-md">
                <h2 className="mb-4 text-3xl flex justify-center">Sign Up</h2>
                {error && <p className="mb-4 text-red-500">{error}</p>}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mb-2 rounded-lg w-96 p-2 border-x-2 border-y-2 border-black"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2 rounded-lg  w-96 p-2 border-x-2 border-y-2 border-black"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-2 rounded-lg w-96 p-2 border-x-2 border-y-2 border-black"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
