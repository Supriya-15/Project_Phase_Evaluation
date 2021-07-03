const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    
    group:Number,
    prb_dom:Number,
    lit_sur:Number,
    dsg_mth:Number,
    dap:Number,
    q_a:Number,


})

Phase1= mongoose.model('phase1',schema);
module.exports= Phase1;