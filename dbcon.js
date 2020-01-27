var Client = require('mongodb').MongoClient;

Client.connect('mongodb://192.168.154.48:27017/school', function(error, db){
    if(error) {
        console.log(error);
    } else {
        console.log("connected:"+db);
        db.close();
    }
});