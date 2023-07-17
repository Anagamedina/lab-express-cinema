const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
  Movie.find({})
    .then((datos) => {
      // res.send(datos) 
       res.render('movies', { movies: datos });
    })
    .catch((err) => console.log(err));
});
router.get('/movie/:id', (req, res, next) => {
  let id = req.params.id
  Movie.findById(id).then(datos=>{
    res.render('movie-details.hbs', {movie: datos})
  })

  
});

module.exports = router;

  
   