const Movie = require('../models/movie.model');
const MovieService = require('../services/movie.services');



const errorResponseBody = {
    error:{},
    data:{},
    message: 'Something went wrong, cannot process the request',
    success: false
}
const successResponseBody = {
    error:{},
    data:{},
    message: 'Successfully processed the request',
    success: true
}

const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        // const savedMovie = await movie.save();
        return res.status(201).json({
            success: true,
            error: {},
            data: movie,
            message: 'successfully created new movie',
        })  
    } catch (error) {
        console.log(error);
        return res.status(500).json({ 
            success: false,
            error: error,
            data: {},
            message: 'something went wrong while creating movie',
        });
    
    }
}

const deleteMovie = async (req, res) => {

    try{
        const response = await Movie.deleteOne({
            _id: req.params._id
        });
        return res.status(200).json({
            success: true,
            error: {},
            message: 'successfully deleted movie',
            data: response,
           
        });
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            error: error,
            data: {},
            message: 'something went wrong while deleting movie',
        });
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
module.exports = {
    createMovie,
    deleteMovie,
    getMovie
}