const express = require('express'); // link expressi'i failidele
const port = 4000;
const booksRouter = require('./routes/books');
const countriesRouter = require('./routes/countries');

const app = express(); // rakenduse deklareerimine/loomine

app.set('view engine', 'ejs');

app.get('/',(req, res) => {
    //res.send('<h1> Hello from get app / </h1>');
    //res.sendStatus(404);
    //res.status(500).json({message: "internal error.Try again later."});
    //res.download('server.js'); //faili allalaadimine
    res.render('index');
}); 

app.use('/books', booksRouter);

app.use('/countries', countriesRouter);

app.listen(port, () => { //app ootab päringuid pordilt
    console.log(`Server is running on port ${port}.`);
});
