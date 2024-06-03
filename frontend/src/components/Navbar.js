// Navbar.js
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setIsAuthenticated, username, setUsernameSetter }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username');
        if (token && storedUsername) {
            setIsAuthenticated(true);
            setUsernameSetter(storedUsername);
        } else {
            setIsAuthenticated(false);
            setUsernameSetter('');
        }
    }, [setIsAuthenticated, setUsernameSetter]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setIsAuthenticated(false);
        setUsernameSetter('');
        navigate('/signin');
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Movie Library</Link>
                <div>
                    <ul className="flex space-x-4">
                      
                        {isAuthenticated ? (
                            <>
                                <li>
                                    <span>{username}</span>
                                </li>
                                <li>
                        <Link to="/list">Lists</Link>
                      </li>
                                <li>
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/signin">Sign In</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Sign Up</Link>
                                </li>
                            </>
                        )}
                       
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
