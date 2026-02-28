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

module.exports = {  
    createTheatre,
    deleteTheatre,
    getTheatre
}