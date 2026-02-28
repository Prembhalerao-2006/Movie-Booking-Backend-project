const Movie = require('../models/movie.model');
const MovieService = require('../services/movie.services');
const { errorResponseBody, successResponseBody } = require('../utils/responsebody');




const createMovie = async (req, res) => {
    try {
        const movie = await MovieService.createMovie(req.body);
        // const savedMovie = await movie.save();
        successResponseBody.data = movie;
        successResponseBody.message = 'Movie created successfully';
        return res.status(201).json(successResponseBody)  
    } catch (error) {
        console.log(error);
        return res.status(500).json(errorResponseBody);
    
    }
}

const deleteMovie = async (req, res) => {
    try {
        const response = await MovieService.deleteMovie(req.params._id);
        if (response && response.error) {
            errorResponseBody.error = response.error;
            return res.status(response.code || 500).json(errorResponseBody);
        }
        successResponseBody.data = response;
        successResponseBody.message = 'Movie deleted successfully';
        return res.status(200).json(successResponseBody);
    } catch (error) {
        errorResponseBody.error = error.message;
        return res.status(500).json(errorResponseBody);
    }
}

const getMovie = async (req, res) => {
    try {
        const response = await MovieService.getMovieById(req.params._id);
        if(response.error){
            errorResponseBody.error = response.error;
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);
    }
    catch (error) {
        return res.status(500).json(errorResponseBody);
    }
}

const updateMovie = async (req, res) => {
    try {
        const response = await MovieService.updateMovie(req.params._id, req.body);  
        if(response.error){
            errorResponseBody.error = response.error;
            errorResponseBody.message = 'the updates that we are trying to make are not valid';
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);
    } catch (error) {
        errorResponseBody.error = error.message;
        return res.status(500).json(errorResponseBody);
    }
}

const getMovies = async (req, res) => {

    try {
        const response = await MovieService.fetchMovies(req.query);
        if(response.error){
            errorResponseBody.error = response.error;
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);
    } catch (error) {
        console.log(error);
        errorResponseBody.error = error.message;
        return res.status(500).json(errorResponseBody);
        
    }
}
module.exports = {
    createMovie,
    deleteMovie,
    getMovie,
    updateMovie,
    getMovies
}