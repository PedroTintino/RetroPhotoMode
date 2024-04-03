const routes = require('./routes.js');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/', routes)

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Server is running at port: ${port}`)
});
