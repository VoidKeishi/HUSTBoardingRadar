const amenityDaos = require('../daos/amenity.js');
const { nonAccentVietnamese } = require('../utils/accent.js');

const findOneAmenity = async (amenityCode) => {
    const amenity = await amenityDaos.findOneAmenity(amenityCode);
    return amenity;
}

const findAllAmenities = async () => {
    const amenities = await amenityDaos.findAllAmenities();
    return amenities;
}

const createAmenity = async (amenity) => {
    const amenityCode = nonAccentVietnamese(amenity.name.trim()).split(' ').join('_');
    amenity['code'] = amenityCode;
    
    const existedAmenity = await amenityDaos.findOneAmenity(amenityCode);
    console.log('🚀 ~ createAmenity ~ existedAmenity:', existedAmenity)
    if (existedAmenity) {
        return null;
    }
    console.log('🚀 ~ createAmenity ~ amenity:', amenity)

    const newAmenity = await amenityDaos.createAmenity(amenity);
    return newAmenity;
}

const updateAmenity = async (amenityCode, amenity) => {
    const updatedAmenity = await amenityDaos.updateAmenity(amenityCode, amenity);
    return updatedAmenity;
}

const deleteAmenity = async (amenityCode) => {
    const deletedAmenity = await amenityDaos.deleteAmenity(amenityCode);
    return deletedAmenity;
}

module.exports = {
    findOneAmenity,
    findAllAmenities,
    createAmenity,
    updateAmenity,
    deleteAmenity,
}