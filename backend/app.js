const express = require('express');
const app = new express();
const cors = require('cors');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(cors());

const bRoute = require('./BasicRoutes/empRoutes');
app.use('/emp', bRoute);

const user_route = require('./BasicRoutes/user')
app.use("/user", user_route)

require('dotenv').config();
require('./db/connection')




app.listen(5000, () => {
    console.log('server is up on port 5000');
})