const express = require('express');
const router = express.Router();
var mongoose =require('mongoose');
var con = mongoose.connect('mongodb://<username>:<password>@192.168.154.48:27017/DA');
var schema = mongoose.Schema;
var model1 = new schema({
    test: String,
    address: String,
    phone: Number
});
var study = mongoose.model('User',model1,'User');



//router.get('/', (req, res) => res.json({data:'this is index.'}));
router.get('/', (req, res) => {
    study.find({},function(error,data){
        res.render('index',{
            data:data
        });
    });
});
module.exports = router