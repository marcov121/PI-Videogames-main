const { Router } = require('express');
const axios = require('axios');
const { Genre } = require('../db.js');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const vgGenres = await Genre.findAll({
            attributes: ['name']
        })
        let dbGenres = vgGenres.map(e => e.name)
        res.status(200).send(dbGenres)
    } catch (error) {
        res.send(`Error in route /genres ${error}`)
    }
});

module.exports = router;