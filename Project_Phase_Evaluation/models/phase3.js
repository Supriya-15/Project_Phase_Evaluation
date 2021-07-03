const mongoose = require('mongoose');

var schema5 = new mongoose.Schema({
    group:Number,
    cmp_prs:Number,
    dm_ex:Number,
    rs_ds:Number,
    prj_rp:Number,
    dis:Number,


})

const Phase3 = mongoose.model('phase3',schema5);
module.exports= Phase3;