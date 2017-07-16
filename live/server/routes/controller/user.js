// User controller

module.exports = function (router, mongodbClient) {

  // GET /users
  router.get('/users', (req, res) => {
    res.type("json");

    mongodbClient.connect(function(db) {
      return db.collection("customers").find().toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
    });
  });

  // GET /users/1
  router.get('/users/:userId', (req, res) => {
    var userId = parseInt(req.params.userId);
    res.type("json");

    mongodbClient.connect(function(db) {
      return db.collection("customers").find({userId: userId}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result[0]);
        db.close();
      });
    });
  });

};