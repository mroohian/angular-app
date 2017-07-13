var http = require('http');
var MongoClient = require('mongodb').MongoClient;

module.exports = function(config) {
    // Prepare the url
    var url = config.mongodb.url;
    if (!url.endsWith('/')) {
        url = url + '/';
    }
    url = url + config.mongodb.db;
    console.log('MongoDb URL:', url);

    return {
        connect: function(query) {
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;                
                query(db);
            });
        }
    };
}