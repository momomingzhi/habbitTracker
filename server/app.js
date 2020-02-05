const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const api = require('./routes/index');
var mongoose =require('mongoose');


// con.on('error',console.error);
// con.once('open',function(){
//     console.log('connected');
// })
// mongoose.connect('mongodb://192.168.154.48:27017/DA');
// var db = mongoose.connection;
// db.on('error',console.error);
// db.once('open',function(){
//          console.log('connected');
//      });
app.use(bodyParser.json());
app.use('/api', api);

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Listening on port ${port}...`));