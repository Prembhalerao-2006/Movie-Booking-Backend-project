const theatreController = require('../controllers/theatre.controllers');
const theatreMiddlewares = require('../middlewares/theatre.middlewares');

const routes = (app) => {
    app.post(
        '/mba/api/v1/theatres',
        theatreMiddlewares.validateTheatreCreateRequest,
        theatreController.create
    );
    
    app.delete(
        '/mba/api/v1/theatres/:id',
        theatreController.destroy
    );

    app.get(
        '/mba/api/v1/theatres/:id',
        theatreController.getTheatre
    )


};

module.exports = routes;