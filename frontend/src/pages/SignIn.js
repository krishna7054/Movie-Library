// SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';

const SignIn = ({ setIsAuthenticated, setUsernameSetter }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous error
        try {
            const data = await loginUser({ email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
            setIsAuthenticated(true); // Update authentication state
            setUsernameSetter(data.username); // Set the username
            navigate('/');
        } catch (error) {
            if (error.message === 'Invalid email or password') {
                setError('Invalid email or password. Please try again.');
            } else {
                setError(error.message);
            }
        }
    };

    return (
        <div className="flex justify-center items-center p-40 ">
            <form onSubmit={handleSubmit} className=" p-6 rounded grid bg-zinc-200 shadow-md">
                <h2 className="mb-4 text-3xl flex justify-center">Sign In</h2>
                {error && <p className="mb-4 text-red-500">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2 rounded-lg w-80 p-2 border-x-2 border-y-2 border-black"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-2 rounded-lg w-80 p-2 border-x-2 border-y-2 border-black"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignIn;
