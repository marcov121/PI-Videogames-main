let express = require('express');
const { apiKey, Videogame, Genre, conn } = require('../db.js');
let router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        
    } catch (error) {
        res.send(`Error in route /videogames ${error}`);
    }
})