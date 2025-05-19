const Amenity = require('../models/amenity');

const createAmenity = async (amenityData) => {
  try {
    const newAmenity = new Amenity(amenityData);
    await newAmenity.save();
    return newAmenity;
  } catch (error) {
    console.error('Error creating amenity:', error);
    throw error;
  }
};

const updateAmenity = async (amenityCode, amenityData) => {
  try {
    const updatedAmenity = await Amenity.findOneAndUpdate(
      { code: amenityCode },
      amenityData,
      { new: true } // Return the updated document
    );

    if (!updatedAmenity) {
      return null;
    }

    return updatedAmenity;
  } catch (error) {
    console.error('Error updating amenity:', error);
    throw error;
  }
};

const deleteAmenity = async (amenityCode) => {
  try {
    const deletedAmenity = await Amenity.findOneAndDelete({ code: amenityCode });

    if (!deletedAmenity) {
      return null;
    }

    return deletedAmenity;
  } catch (error) {
    console.error('Error deleting amenity:', error);
    throw error;
  }
};

const findOneAmenity = async (amenityCode) => {
  try {
    const amenity = await Amenity.findOne({ code: amenityCode }).exec(); // Use exec() to return a Promis

    if (!amenity) {
      return null;
    }

    return amenity;
  } catch (error) {
    console.error('Error finding amenity:', error);
    throw error;
  }
};

const findAllAmenities = async () => {
  try {
    const amenities = await Amenity.find().sort({ name: 1 }); // Sort by name in ascending order
    return amenities || [];
  } catch (error) {
    console.error('Error finding all amenities:', error);
    throw error;
  }
};

module.exports = {
  createAmenity,
  updateAmenity,
  deleteAmenity,
  findOneAmenity,
  findAllAmenities
};
