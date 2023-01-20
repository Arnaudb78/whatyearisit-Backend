var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let date = new Date();
    let year = date.getFullYear();
    res.json({year:"2023"})
  });


module.exports = router;