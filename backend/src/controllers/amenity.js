const amenityService = require('../services/amenity');

const getAllAmenities = async (req, res, next) => {
  try {
    const amenities = await amenityService.findAllAmenities();
    return amenities;
  } catch (error) {
    console.error('Error getting all amenities:', error);
    throw error;
  }
}

const getAmenitiesByCode = async (req, res, next) => {
  const amenities = await amenityService.findOneAmenity(req.params.amenityCode);
  return amenities;
}

const createAmenity = async (req, res, next) => {
  const newAmenity = await amenityService.createAmenity(req.body);
  return newAmenity;
}

const updateAmenity = async (req, res, next) => {
  const updatedAmenity = await amenityService.updateAmenity(req.params.amenityCode, req.body);
  return updatedAmenity;
}

const deleteAmenity = async (req, res, next) => {
  const deletedAmenity = await amenityService.deleteAmenity(req.params.amenityCode);
  return deletedAmenity;
}

module.exports = {
  getAllAmenities,
  getAmenitiesByCode,
  createAmenity,
  updateAmenity,
  deleteAmenity,
}