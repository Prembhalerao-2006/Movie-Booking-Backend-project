 const movieController = require('../controllers/movie.controller');    

 const routes = (app) => {
      app.post('/mba/api/v1/movies', 
      // MovieMiddleware.validateCreateMovieRequest,
      movieController.createMovie);

      app.delete('/mba/api/v1/movies/:_id',
          movieController.deleteMovie);

      app.get('/mba/api/v1/movies/:_id',
          movieController.getMovie);
 }

 module.exports = routes;