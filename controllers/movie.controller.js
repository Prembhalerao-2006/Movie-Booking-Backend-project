const Movie = require('../models/movie.model');

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
module.exports = {
    createMovie
}