const express = require('express');
const asyncMiddleware = require('../middlewares/async');
const { healthCheckServer } = require('../controllers/healthCheck');

const router = express.Router();

router.get('/server', asyncMiddleware(healthCheckServer));

module.exports = router;
