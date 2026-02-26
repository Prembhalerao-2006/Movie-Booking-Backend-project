const { errorResponseBody } = require('../utils/responsebody');
const Theatre = require('../models/theatres.model');

const validateTheatreCreateRequest = async (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).send({
            ...errorResponseBody,
            message: "The name of the theatre is not present in the request"
        });
    }
    if (!req.body.pinCode) {
        return res.status(400).send({
            ...errorResponseBody,
            message: "The pin code of the theatre is not present in the request"
        });
    }
    if (!req.body.city) {
        return res.status(400).send({
            ...errorResponseBody,
            message: "The city of the theatre is not present in the request"
        });
    }
    next();
}
module.exports = {
    validateTheatreCreateRequest
}