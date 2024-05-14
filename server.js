const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// Statis files
app.use(express.static(path.join(__dirname + '/public/dist/aritos3d-angular/browser')));

app.listen(3001, () => {
    console.log('Server on port 3001');
});