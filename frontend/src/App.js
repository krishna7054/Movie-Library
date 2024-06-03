import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import ListDetails from './pages/ListDetails';
import Navbar from './components/Navbar';
import CreateList from './pages/CreateList';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsernameSetter] = useState('');
    const [lists, setLists]=useState('');


    return (
        <div className="App">
            <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} username={username} setUsernameSetter={setUsernameSetter}/>
            <Routes>
                <Route path="/signup" element={<SignUp setUsernameSetter={setUsernameSetter}  setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/signin" element={<SignIn setUsernameSetter={setUsernameSetter}  setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/" element={<Home />} />
                <Route path="/list/:id" element={<ListDetails />} />
                <Route path='/list' element={<CreateList lists={lists} setLists={setLists} />} />

            </Routes>
        </div>
    );
}

export default App;
