const theatreService = require('../services/theatre.services');
const { successResponseBody, errorResponseBody } = require('../utils/responsebody');

const create = async (req, res) => {
    try {
        const response = await theatreService.createTheatre(req.body);
        if(response.err){
            errorResponseBody.error = response.err;
            errorResponseBody.message = "validation failed on few parameters of the reuest body";
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data = response;
        successResponseBody.message = 'Theatre created successfully';
        return res.status(201).json(successResponseBody);
    } catch (error) {
        errorResponseBody.error = error.message;
        return res.status(500).json(errorResponseBody);
    }
}

module.exports = {
    create
}