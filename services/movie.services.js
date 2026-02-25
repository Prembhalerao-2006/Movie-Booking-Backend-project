const Movie = require('../models/movie.model');

const createMovie = async (data) => {
    const movie = await Movie.create(data);
    return movie;
}

const deleteMovie = async (id) => {
    const response = await Movie.findByIdAndDelete(id);
    return response;
}

const getMovieById = async (id) =>{
    const movie = awaitMovie.findById(id);
    if(!movie){
        return {
            error: 'No movie found for the given id',
        }
    };
return movie;
}

const updateMovie = async (id, data) => {
    const movie = await Movie.findByIdAndUpdate(id, data, {new: true , runValidators: true});
    return movie;
}

module.exports = {
    createMovie,
    getMovieById,   
    updateMovie,
    deleteMovie
}