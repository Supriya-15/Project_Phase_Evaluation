const mongoose = require('mongoose');

var schema4 = new mongoose.Schema({
    
    req_spe:Number,
    dsg:Number,
    prj_prg:Number,
    prj_plan:Number,
    q_a:Number,


})

const Userdb4 = mongoose.model('phase2',schema4);
module.exports= Userdb4;