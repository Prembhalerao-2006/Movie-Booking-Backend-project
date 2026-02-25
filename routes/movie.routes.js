 const movieController = require('../controllers/movie.controller');    
 const MovieMiddleware = require('../middlewares/movie.middlewares');
 const routes = (app) => {
        app.post('/mba/api/v1/movies', 
      MovieMiddleware.validateMovieCreateRequest,
        movieController.createMovie);

        app.delete('/mba/api/v1/movies/:_id',
          movieController.deleteMovie);

        app.get('/mba/api/v1/movies/:_id',
          movieController.getMovie);

        app.put('/mba/api/v1/movies/:_id',
          movieController.updateMovie);

        
        app.patch('/mba/api/v1/movies/:_id',
          movieController.updateMovie);
        
        app.get('/mba/api/v1/movies',
          movieController.getMovies);
}

 module.exports = routes;