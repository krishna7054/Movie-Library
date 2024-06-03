// controllers/listcontroller.js
const List = require('../models/List');

const createList = async (req, res) => {
    const { name, isPublic } = req.body;

    const list = new List({
        user: req.user._id,
        name,
        isPublic,
    });

    const createdList = await list.save();
    res.status(201).json(createdList);
};

const getLists = async (req, res) => {
    const lists = await List.find({ user: req.user._id });
    res.json(lists);
};

const addMovieToList = async (req, res) => {
    const list = await List.findById(req.params.id);

    if (list) {
        list.movies.push(req.body.movie);
        const updatedList = await list.save();
        res.json(updatedList);
    } else {
        res.status(404).json({ message: 'List not found' });
    }
};

const deleteMovieFromList = async (req, res) => {
    try {
      console.log(`Received request to delete movie ${req.params.movieId} from list ${req.params.listId}`);
      const { listId, movieId } = req.params;
      const list = await List.findById(listId);
      
      if (!list) {
        console.log('List not found');
        return res.status(404).json({ message: 'List not found' });
      }
  
      list.movies = list.movies.filter(movie => movie.imdbID !== movieId);
      await list.save();
  
      console.log('Movie deleted successfully');
      res.json({list });
    } catch (error) {
      console.error('Error deleting movie:', error);
      res.status(500).json({ message: error.message });
    }
  };

  const deleteList = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await List.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'List not found' });
        }

        
        res.status(200).json({ message: 'List deleted successfully' });
    } catch (error) {
        
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createList, getLists, addMovieToList, deleteMovieFromList, deleteList };
