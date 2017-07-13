const express = require('express');

module.exports = function(mongodbClient) {
  const router = express.Router();

  // GET api listing. */
  router.get('/', (req, res) => {
    res.send(
`<pre>API: version 1.0.0
------------
Endpoints:
<a href="users">/users</a>
<a href="users/1">/users/[userId]</a>
</pre>
`);
  });

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

  return router;
};
