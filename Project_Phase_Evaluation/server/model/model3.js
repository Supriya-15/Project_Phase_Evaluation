const mongoose = require('mongoose');

var schema3 = new mongoose.Schema({
    
    prb_dom:Number,
    lit_sur:Number,
    dsg_mth:Number,
    dap:Number,
    q_a:Number,


})

const Userdb3 = mongoose.model('phase1',schema3);
module.exports= Userdb3;