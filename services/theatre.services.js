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

module.exports = {  
    createTheatre
}