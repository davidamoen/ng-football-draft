var mongo = require('mongodb');

var dbName = 'football_draft';

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db(dbName, server);

var appSettings = db.collection("appSettings");

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to '" +dbName+"'' database");
    }
});

exports.isStarted = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', "*");
    appSettings.findOne({}, {}, function(err, document) {
        res.send({started: document.started});
    });    	
}

exports.participants = function(req, res){
  res.send([{name:'wine1'}, {name:'wine2'}]);
};

exports.addParticipant = function(req, res) {

}