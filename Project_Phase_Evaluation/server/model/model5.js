const mongoose = require('mongoose');

var schema5 = new mongoose.Schema({
    
    cmp_prs:Number,
    dm_ex:Number,
    rs_ds:Number,
    prj_rp:Number,
    dis:Number,


})

const Userdb5 = mongoose.model('phase3',schema5);
module.exports= Userdb5;