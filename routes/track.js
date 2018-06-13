var express = require('express');
var router = express.Router();
const logger = require('../config/winston')

// POST a tracking metric
router.post('/visits', function(req, res, next) {
  logger.info(req.body);
  res.status(201).end();
});

router.post('/events', function(req, res, next) {
  logger.info(req.body);
  res.status(201).end();
});

module.exports = router;
