const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routesTodo = require('./routes/todo');

const URL = 'http://localhost:8088/v1/todos';

//connect DB
//setup 
const app = express();
const PORT = 8088;

app.use(bodyParser.json())
app.use(cors());

//method 
app.use('/v1', routesTodo)



//listen port
app.listen(PORT || URL, ()=> console.log(`Running on port: http://localhost:${PORT} || http://${URL}` ))