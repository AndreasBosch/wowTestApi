
const express = require("express");
const bodyParser = require('body-parser');
const logger = require('morgan');



// Init app
const app = express();

app.use(logger('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


const port = 3000;
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`App is listening on http://localhost:${port}`);
});