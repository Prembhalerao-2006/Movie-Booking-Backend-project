const Theatre = require('../models/theatres.model');

const createTheatre = async (data) => {

    try {
        const response = await Theatre.create(data);
        return response;
        
    } catch (error) {
        if(error.name === 'ValidationError'){
            let error = {};
            Object.keys(error.errors).forEach((key) => {
                error[key] = error.errors[key].message;
            });
            return {err : error, code : 422};
        }
            
        throw error;
    }

}

module.exports = {  
    createTheatre
}