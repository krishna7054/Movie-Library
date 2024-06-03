// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { searchMovies, getLists, addMovieToList } from '../services/api';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [lists, setLists] = useState([]);
    const [selectedListId, setSelectedListId] = useState('');
    const [showListDropdown, setShowListDropdown] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchTerm);
    };

    useEffect(() => {
        // Function to fetch initial random movies when component mounts
        const fetchInitialMovies = async () => {
            try {
                // Perform a search with a random term to get random movies
                const response = await searchMovies('random');
                setMovies(response.Search);
                setShowListDropdown(true);
            } catch (error) {
                console.error('Failed to fetch initial random movies:', error);
            }
        };

        // Function to fetch user lists
        const fetchLists = async () => {
            try {
                const data = await getLists();
                setLists(data);
            } catch (error) {
                console.error('Failed to fetch user lists:', error);
            }
        };

        // Call the functions to fetch initial random movies and user lists
        fetchInitialMovies();
        fetchLists();
    }, []);

    const handleSearch = async (searchTerm) => {
        try {
            const data = await searchMovies(searchTerm);
            setMovies(data.Search);
            setShowListDropdown(true); // Show the list dropdown after search results are obtained
        } catch (error) {
            console.error('Failed to fetch search results:', error);
            // Handle the error, e.g., display an error message to the user
        }
    };

    const handleAddMovie = async (movie) => {
        if (!selectedListId) {
            window.alert('Please select a list to add the movie to.');
            return;
        }

        try {
            await addMovieToList(selectedListId, movie);
            window.alert('Movie added to list successfully');
        } catch (error) {
            console.error('Failed to add movie to list:', error);
            window.alert('Failed to add movie to list');
        }
    };



    return (
        <div className="p-6">
            <div className="mb-6">
                <form onSubmit={handleSubmit} className="flex items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search for Movies or TV shows"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-white-200 w-1/3 text-black-300 font-mono ring-1 ring-black-10 focus:ring-2 focus:ring-blue-400 outline-none duration-300 placeholder:text-zinc-800 placeholder:opacity-80 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-blue-200"
                    />
                    <button
                        type="submit"
                        className="ml-2 relative py-2 px-5 text-black text-base font-bold rounded-full overflow-hidden bg-zinc-400 transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                    >
                        Search
                    </button>
                </form>
            </div>

            {movies.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 p-6 ">
                    {movies.map((movie) => (
                        <div key={movie.imdbID} className="border-x-2 border-y-2 border-black bg-zinc-100 p-4  rounded">
                            <h3 className="text-2xl flex justify-center mb-2">{movie.Title}</h3>
                            <img src={movie.Poster} alt={movie.Title} className="flex justify-center  w-full mb-1" />
                            <div className="flex justify-between items-center">
                                <span className='text-xl'>Year: {movie.Year}</span>
                                {showListDropdown && (
                                    <div >
                                        <select className='border-zinc-400 border-x-2 border-y-2'
                                            value={selectedListId}
                                            onChange={(e) => setSelectedListId(e.target.value)}
                                        >
                                            <option value="">Select List</option>
                                            {lists.map((list) => (
                                                <option key={list._id} value={list._id}>
                                                    {list.name} ({list.isPublic ? 'Public' : 'Private'})
                                                </option>
                                            ))}
                                        </select>
                                        <button
                                            className="bg-green-500 text-white p-2 rounded ml-2"
                                            onClick={() => handleAddMovie(movie)}
                                        >
                                            Add to List
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

           
        </div>
    );
};

export default Home;
