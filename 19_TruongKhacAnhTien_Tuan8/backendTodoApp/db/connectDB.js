const mongoose = require('mongoose');
const dotenv = require('dotenv')
const schemaTodo = require('../models/schemaTodo');

//connect DB
dotenv.config()
mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log("connect mongodb success");
})

const connectDB = {
	//Connect to collection
    todo: mongoose.model('todolists', schemaTodo)
}

module.exports = connectDB;