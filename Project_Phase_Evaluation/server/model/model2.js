const mongoose = require('mongoose');

var schema1 = new mongoose.Schema({
   name:{
        type :String,
         
        
    },
    id:{
        type:String,
        
    },

    
    email:{
        type:String,
        
       
    }, 

    password:{
        type:String,
        
    },
    conpass:{
        type:String
    }
})

const Userdb2 = mongoose.model('register',schema1);
module.exports= Userdb2;