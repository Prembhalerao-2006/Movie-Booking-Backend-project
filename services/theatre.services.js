const Theatre = require('../models/theatres.model');

const createTheatre = async (data) => {
   

    try {
        const response = await Theatre.create(data);
        return response;
        
    } catch (error) {
        throw error;
    }

}

module.exports = {  
    createTheatre
}