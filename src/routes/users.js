const {Router} = require('express');
const router=Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    //console.log(users);
    //res.send('users');
    res.json(users);// El rs.json y ala variable especifica muestra en la pag. web lo  que se especifico

})

module.exports = router;