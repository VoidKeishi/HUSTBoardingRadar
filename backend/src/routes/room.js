const express = require('express');
const { findOneRoom, findAllRecommendedRooms } = require('../controllers/room');
const asyncMiddleware = require('../middlewares/async');

const router = express.Router();

router.get('/:roomId', asyncMiddleware(findOneRoom));
router.get('/', asyncMiddleware(findAllRecommendedRooms));

module.exports = router;
