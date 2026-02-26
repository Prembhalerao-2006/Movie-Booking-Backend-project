const badRequestResponse = {
    success: false,
    error : "",
    data: {},
    message : "Malformed request | Bad Request"
}

const validateMovieCreateRequest = (req, res, next) => {

    if(!req.body.name){
        badRequestResponse.error = 'The name of the movie is not present in the request sent';
        return res.status(400).json(badRequestResponse);
    }
    if(!req.body.description){
        badRequestResponse.error = 'The description of the movie is not present in the request sent';
        return res.status(400).json(badRequestResponse);
    }

    if(!req.body.casts || !Array.isArray(req.body.casts) || req.body.casts.length <= 0){
        badRequestResponse.error = 'The casts of the movie is not present in the request sent or it is not an array';
        return res.status(400).json(badRequestResponse);
    }

    if(!req.body.trailerUrl){
        badRequestResponse.error = 'The trailerUrl of the movie is not present in the request sent';
        return res.status(400).json(badRequestResponse);
    }
    if(!req.body.releaseDate){
        badRequestResponse.error = 'The releaseDate of the movie is not present in the request sent';
        return res.status(400).json(badRequestResponse);
    }
    if(!req.body.director){
        badRequestResponse.error = 'The director of the movie is not present in the request sent';
        return res.status(400).json(badRequestResponse);
    }
    next();
}

module.exports = {
    validateMovieCreateRequest
}