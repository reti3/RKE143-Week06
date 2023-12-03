const express = require('express');
const router = express.Router();
const data = require('../data/books.json'); //.. 2 sammu tagasi

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:bookid', (req, res) =>{ //peab olema koolon
    const requestedBookId = req.params.bookid; //kasutaja poolt tuleb andmetüüp string
    const book = data.books.filter(bookInData => {
        if(bookInData.id.toString() === requestedBookId){ //päring, mis tuli kasutaja poolt
            return bookInData;
        }
    });

    res.status(200).json(book);
});

module.exports = router;
