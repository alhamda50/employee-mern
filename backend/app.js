const express = require('express');
const app = new express();
const morgan = require('morgan')
app.use(morgan('dev'));

const bRoute = require('./BasicRoutes/routes');
app.use('/emp', bRoute);

require('dotenv').config();
require('./db/connection')




app.listen(3000, () => {
    console.log('server is up on port 3000');
})