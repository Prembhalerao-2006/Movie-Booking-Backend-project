const Theatre = require('../models/theatres.model');

const createTheatre = async (data) => {
    try {
        const response = await Theatre.create(data);
        return response;
    } catch (err) {
        if (err.name === 'ValidationError' && err.errors) {
            let validationErrors = {};
            Object.keys(err.errors).forEach((key) => {
                validationErrors[key] = err.errors[key].message;
            });
            return { err: validationErrors, code: 422 };
        }
        throw err;
    }
    }

const deleteTheatre = async (id) => {
    try {
        const response = await Theatre.findByIdAndDelete(id);
        if(!response){
            return {
                err: 'No record found with the given id',
                code: 404
            }
        }
        return response;
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return {
                err: 'No record found with the given id',
                code: 404
            }
        }
        throw error;
    }
}

const getTheatre = async (id) => {
    try {
        const response = await Theatre.findById(id);
        if(!response){
            return {
                err: 'No record found with the given id',
                code: 404
            }
        }
        return response;
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return {
                err: 'No record found with the given id',
                code: 404
            }
        }
        console.log(error);
        throw error;
    }
}

const getAllTheatres = async () => {
    try {
        const response = await Theatre.find({});
        return response;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}
const updateTheatre = async (id, data) =>{
    try{
        const response = await Theatre.findByIdAndUpdate(id,data,{
            new: true, runValidators: true
        
        });
        if(!response){
            return {
                err: 'No record found with given id',
                code: 404
            }
    }
    return response;
    } catch (err) {
        if(err.name === 'ValidationError' && err.errors){
            let err = {};
            Object.keys(err.errors).forEach((key) => {
                err[key] = err.errors[key].message;
            });
            return { err, code: 422 };
        }
        throw err;
    }
}

const updateMoviesInTheatres = async(theatreId, movieIds, insert) =>{
    if(!theatre){
        return {
            err: "No such theatre found for the id provided",
            code: 404
        };
    }
    if(insert){
        moviesIds.forEach(movieId => {
            theatre.movies.push(movieId);
        });
    }
    else{
        let savedMovieIds = theatre.movies;
        moviesIds.forEach(movieId =>{
            savedMovieIds = savedMovieIds.filter(smi =>smi == movieId)
        });
        theatre.movies = savedMovieIds;
    }
    await theatre.save();
    return theatre;
}

module.exports = {  
    createTheatre,
    deleteTheatre,
    getTheatre,
    getAllTheatres,
    updateTheatre,
    updateMoviesInTheatres
    
}