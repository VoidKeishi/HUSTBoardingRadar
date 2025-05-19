const express = require('express');
const { getAmenitiesByCode, getAllAmenities, createAmenity, deleteAmenity, updateAmenity } = require('../controllers/amenity');
const asyncMiddleware = require('../middlewares/async');
const router = express.Router();

router.get('/:amenityCode', asyncMiddleware(getAmenitiesByCode));
router.get('/', asyncMiddleware(getAllAmenities));
router.post('/', asyncMiddleware(createAmenity));
router.put('/:amenityCode', asyncMiddleware(updateAmenity));
router.delete('/:amenityCode', asyncMiddleware(deleteAmenity));

module.exports = router;