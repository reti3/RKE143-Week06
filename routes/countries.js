const express = require('express');
const router = express.Router();
const data = require('../data/countries.json'); 

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:countryid', (req, res) =>{ 
    const requestedCountryId = req.params.countryid; //kasutaja poolt tuleb andmetüüp string
    const country = data.countries.filter(countryInData => {
        if(countryInData.id.toString() === requestedCountryId){ //päring, mis tuli kasutaja poolt
            return countryInData;
        }
    });

    res.status(200).json(country);
});

module.exports = router;
