const Movie = require('../models/movie.model');

const createMovie = async (data) => {

    try {
        const movie = await Movie.create(data);
        return movie;
        
    } catch (error) {
        if(error.name === 'ValidationError'){
            let errorObj = {};
            Object.keys(error.errors).forEach((key) => {
                errorObj[key] = error.errors[key].message;
            });
            console.log(errorObj);
            return {error: errorObj, code: 422};
        }
        else{
            throw error;
        }
            
    }
    
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

    try {
         const movie = await Movie.findByIdAndUpdate(id, data, {new: true , runValidators: true });
         return movie;
    } catch (error) {
        if(error.name === 'ValidationError'){
            let errorObj = {};
            Object.keys(error.errors).forEach((key) => {
                errorObj[key] = error.errors[key].message;
            });
            console.log(errorObj);
            return {error: errorObj, code: 422};
        }
        else{
            throw error;
        }
    }
}

const fetchMovies = async (filter) => {
    let query = {};
    if(filter.name){
        query.name = filter.name;
    }
    let movies = await Movie.find(query);
    if(!movies){
        return {
            error: 'No movies found for the given filter',
            code: 404
        }
    }
    return movies;
}


module.exports = {
    createMovie,
    getMovieById,   
    updateMovie,
    deleteMovie,
    fetchMovies
}