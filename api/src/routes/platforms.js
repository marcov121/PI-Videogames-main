let express = require('express');
const { apiKey } = require('../db.js');
let router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    let apiResult = await axios.get(`https://api.rawg.io/api/platforms/lists/parents?key=${apiKey}`)
    let apiVg = apiResult.data.results.map(p => p.name)
    res.send(apiVg)
});

module.exports = router;