import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLists, deleteMovieFromList } from '../services/api';

const ListDetails = () => {
    const { id } = useParams();
    const [list, setList] = useState(null);

    useEffect(() => {
        const fetchLists = async () => {
            const data = await getLists();
            const selectedList = data.find((l) => l._id === id);
            setList(selectedList);
        };
        fetchLists();
    }, [id]);

    const handleDeleteMovie = async (movieId) => {
        try {
            await deleteMovieFromList(id, movieId);
            const updatedList = { ...list }; // Create a copy of the current list
            updatedList.movies = updatedList.movies.filter(movie => movie.imdbID !== movieId); // Remove the movie from the list
            setList(updatedList); // Update the state with the updated list
            window.alert("Deleted");
        } catch (error) {
            console.error('Failed to delete movie:', error);
            window.alert('Failed to delete movie');
        }
    };

    if (!list) return <div>Loading...</div>;

    return (
        <div className="p-6 grid justify-center ">
            <h2 className="text-3xl mb-4 flex justify-center">List: {list.name}</h2>
            <ul >
                {list && list.movies && list.movies.map((movie) => (
                    <li key={movie.imdbID} className="mb-4 flex justify-between items-center border-x-2 border-y-2 bg-zinc-300 text-2xl  border-black">
                        <span>{movie.Title} ({movie.Year})</span>
                        
                        <button
                            className="bg-red-500 text-white p-2 rounded"
                            onClick={() => handleDeleteMovie(movie.imdbID)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListDetails;
