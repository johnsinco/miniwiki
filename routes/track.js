const express = require('express');
const router = express.Router();
const eventLogger = require('../config/winston').eventLogger

// POST a tracking metric
router.post('/visits', function(req, res, next) {
  eventLogger.info(req.body);
  res.status(201).end();
});

router.post('/events', function(req, res, next) {
  eventLogger.info(req.body);
  res.status(201).end();
});

module.exports = router;
