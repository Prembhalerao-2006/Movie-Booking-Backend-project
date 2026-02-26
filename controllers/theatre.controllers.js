const theatreService = require('../services/theatre.services');
const { successResponseBody, errorResponseBody } = require('../utils/responsebody');

const create = async (req, res) => {
    try {
        const response = await theatreService.createTheatre(req.body);
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