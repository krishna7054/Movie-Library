import React, { useState, useEffect } from 'react';
import { createList, getLists, deleteList } from '../services/api';
import { Link } from 'react-router-dom';

const CreateList = ({ lists, setLists }) => {
    const [newListName, setNewListName] = useState('');
    const [isPublicList, setIsPublicList] = useState(true);

    useEffect(() => {
        const fetchLists = async () => {
            const data = await getLists();
            setLists(data);
        };
        fetchLists();
    }, [setLists]);

    const handleCreateList = async (e) => {
        e.preventDefault();
        try {
            const data = await createList({ name: newListName, isPublic: isPublicList });
            setLists([...lists, data]);
            setNewListName('');
        } catch (error) {
            console.error('Failed to create list:', error);
        }
    };

    const handleDeleteList = async (listId) => {
        try {
            await deleteList(listId);
            setLists(lists.filter((list) => list._id !== listId));
            window.alert('List deleted successfully');
        } catch (error) {
            console.error('Failed to delete list:', error);
            window.alert('Failed to delete list');
        }
    };

    return (
        <div className='p-6'>
            <div className="mb-6 ">
                <h2 className='text-4xl flex justify-center mb-3'>Your List</h2>
                <form onSubmit={handleCreateList} className="flex justify-center md:grid-cols-1 items-center">
                    <input
                        type="text"
                        placeholder="New List Name"
                        value={newListName}
                        onChange={(e) => setNewListName(e.target.value)}
                        className="p-2 border mr-2 rounded-full border-black placeholder:text-zinc-800 placeholder:opacity-80"
                    />
                    <select
                        value={isPublicList}
                        onChange={(e) => setIsPublicList(e.target.value === 'true')}
                        className="p-2 border mr-2 rounded-full border-black"
                    >
                        <option value="true">Public</option>
                        <option value="false">Private</option>
                    </select>
                    <button type="submit" className="bg-blue-500 rounded-full text-white p-2">
                        Create List
                    </button>
                </form>
            </div>
            <div className='grid  justify-center '>
            <ul>
                {lists && lists.map((list) => (
                    <div key={list._id} className="border-x-2 border-y-2  mb-2   border-black">
                        <li className="flex justify-between items-center w-96 bg-zinc-300 text-2xl">
                            <Link to={`/list/${list._id}`} className="text-blue-500">
                                {list.name} ({list.isPublic ? 'Public' : 'Private'})
                            </Link>
                            <button
                                className="bg-red-500 text-white p-2 rounded"
                                onClick={() => handleDeleteList(list._id)}
                            >
                                Delete
                            </button>
                        </li>
                    </div>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default CreateList;
