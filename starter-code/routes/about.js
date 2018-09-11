var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('/about About');
  //res.render('/views/about.hbs');
});

module.exports = router;
