const {Router} = require('express'); 
const router = Router();

const _= require('underscore');
 

const movies = require('../sample.json')
//console.log(movies);


router.get('/',(req, res) => {
//res.send('movies');
    res.json(movies);
});

router.post('/',(req, res) => {
    const id = movies.length + 1;
    const { title, director, year, rating } = req.body;
    const newMovie = {...req.body, id};

    if (title && director && year && rating) { 
        //console.log(newMovie);
        //res.json('Saved');
        movies.push(newMovie);
        res.json(movies);
    }else{
        //res.send('No Saved, wrong request')
        res.status(500).json('There was an error --> (Hubo un error)')
    }
    //console.log(req.body);
    //res.send('received')
    });
    

router.delete('/:id', (req,res) => {
    //Voy a recorrer todo el arreglo de peliculas(movies) voy a obtener una pelicula(movie) por cada vez que se recorra por cada pelicula que estoy recorriendo su id es igual al id que estoy recibiendo significa que si ha encontrado su pelicula, si la encontrado remuevela, quitala del arreglo, y lueego una vez que los haz quitado, pues envia el arreglo actualizado (res.send(movies))  
    _.each(movies, (movie, i) => {
        const {id} = req.params;
        if (movie.id == id) {
            movies.splice(i,1);
        }
    });  
    //console.log(req.params);
    //res.send('Deleted');
    res.send(movies);
});

router.put( '/:id' , (req,res) => {
    const {id} = req.params;
    const { title, director, year, rating } = req.body;
    if ( title && director && year && rating ) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title=title;
                movie.director=director;
                movie.year=year;
                movie.rating=rating;
            }
        });
        res.json(movies);
    } else{
        res.status(500).send('There was an error (Hubo un error)');
    }
});

module.exports = router;