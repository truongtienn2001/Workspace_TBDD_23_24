const mongoose = require('mongoose')

const schemaTodo = new mongoose.Schema({
    id:{
        type: String
    },
    name:{
        type: String
    },
    job:{
        type: String
    }
},  {timestamps: true}
)

module.exports = schemaTodo

