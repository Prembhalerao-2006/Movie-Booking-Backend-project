const Movie = require('../models/movie.model');

const getMovieById = async (id) =>{
    const movie = Movie.findById(id);
    if(!movie){
        return {
            error: 'No movie found for the given id',
        }
};
return movie;
}

module.exports = {
    getMovieById,   
}