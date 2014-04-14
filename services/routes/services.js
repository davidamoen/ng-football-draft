var mongo = require('mongodb');

var dbName = 'football_draft';

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db(dbName, server);

var appSettings = db.collection("appSettings");
var teams = db.collection("teams");

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

exports.teams = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    teams.find().toArray(function(err, items) {
        res.send({teams: items});
    });
};

exports.addParticipant = function(req, res) {

}