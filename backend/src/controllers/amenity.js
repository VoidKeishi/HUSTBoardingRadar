const amenityService = require('../services/amenity');

const getAllAmenities = async (req, res, next) => {
  try {
    const amenities = await amenityService.findAllAmenities();
    res.json(amenities);
  } catch (error) {
    console.error('Error getting all amenities:', error);
    throw error;
  }
}

const getAmenitiesByCode = async (req, res, next) => {
  const amenities = await amenityService.findOneAmenity(req.params.amenityCode);
  res.json(amenities);
}

const createAmenity = async (req, res, next) => {
  const newAmenity = await amenityService.createAmenity(req.body);
  res.json(newAmenity);
}

const updateAmenity = async (req, res, next) => {
  const updatedAmenity = await amenityService.updateAmenity(req.params.amenityCode, req.body);
  res.json(updatedAmenity);
}

const deleteAmenity = async (req, res, next) => {
  const deletedAmenity = await amenityService.deleteAmenity(req.params.amenityCode);
  res.json(deletedAmenity);
}

module.exports = {
  getAllAmenities,
  getAmenitiesByCode,
  createAmenity,
  updateAmenity,
  deleteAmenity,
}