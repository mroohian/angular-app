const express = require('express');
const userController = require('./controller/user');
const contactMessageController = require('./controller/contactMessage');

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

  // Add controller end-points.
  userController(router, mongodbClient);
  contactMessageController(router, mongodbClient);

  return router;
};
