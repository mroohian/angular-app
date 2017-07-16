// User controller

module.exports = function (router, mongodbClient) {

  // GET /contactMessage
  router.post('/contactMessage', (req, res) => {
    res.type("json");

    var contactMessage = req.body;

    mongodbClient.connect(function(db) {
      db.collection("contactMessage").insert(contactMessage, function(err, result) {
        if (err) {
          res.status(500).send({ 
            "status": "FAIL",
            "error": err
          });
        } else {
          res.send({
            "status": "OK"
          });
        }
        db.close();
      });
    });
  });

};