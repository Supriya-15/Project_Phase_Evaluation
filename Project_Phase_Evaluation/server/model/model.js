const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    ids:{
        type:Number,
        // required:true,

    },
    names:{
        type :String
        
    },
    
    email:{
        type:String,
        required:true,
       
    },
    dept:{
        type:String
        // required:true
    },
    grade:{
        type:String,
        required:true
    },
    grpno:{
        type:Number
    },
    phase:{
        type:String,
        required:true
    },
    time :
     { type: String 
     },

    date:{
        type:Date
    },

    link:{
        type:String
    },



})

const Userdb = mongoose.model('userdb',schema);
module.exports= Userdb;