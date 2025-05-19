const express = require('express');

const router = express.Router();

router.use('/rooms', require('./room'));
router.use('/amenity', require('./amenity'));

module.exports = router;
