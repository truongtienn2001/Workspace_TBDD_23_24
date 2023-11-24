const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('../db/connectDB');
const dotenv = require('dotenv');

dotenv.config();

const todoControllers = {
    todoList: async(req, res)=>{
        let listtodo = await connectDB.todo.find()
            res.status(200).json(listtodo)
    }
}


module.exports = todoControllers