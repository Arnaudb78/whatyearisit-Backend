var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let date = new Date();
    let year = date.getFullYear();
    res.send({year: `${year}`})
  });


module.exports = router;