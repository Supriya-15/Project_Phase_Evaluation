const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    msg:{
        type:String,
        // required:true,

    },
})
Chat= mongoose.model('Chat',schema);
module.exports= Chat;