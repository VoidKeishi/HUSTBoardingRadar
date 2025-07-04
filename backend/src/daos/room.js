const Room = require('../models/room');
const Amenity = require('../models/amenity');

const findOneRoom = async (roomId) => {
  try {
    const room = await Room.findById(roomId);

    if (!room) {
      return null;
    }

    // Populate amenity names from amenity codes
    if (room.amenities && room.amenities.length > 0) {
      const amenityCodes = room.amenities;
      const amenities = await Amenity.find({ code: { $in: amenityCodes } });

      // Create a map of code to name for quick lookup
      const amenityMap = {};
      amenities.forEach(amenity => {
        amenityMap[amenity.code] = amenity.name;
      });

      // Replace codes with names in the room object
      const roomObj = room.toObject();
      roomObj.amenities = amenityCodes.map(code => ({
        code,
        name: amenityMap[code] || code // Fallback to code if name not found
      }));

      return roomObj;
    }

    return room;
  } catch (error) {
    console.error('Error finding room:', error);
    throw error;
  }
};

const createRoom = async (roomData) => {
  try {
    const newRoom = new Room(roomData);
    await newRoom.save();
    return newRoom;
  } catch (error) {
    console.error('Error creating room:', error);
    throw error;
  }
};

const findAllRooms = async () => {
  try {
    // Find all rooms and sort by trust score in descending order
    const rooms = await Room.find().sort({ 'trustScore.score': -1 });

    // If no rooms found, return empty array
    if (!rooms || rooms.length === 0) {
      return [];
    }

    return rooms;
  } catch (error) {
    console.error('Error finding all rooms:', error);
    throw error;
  }
};

module.exports = {
  findOneRoom,
  createRoom,
  findAllRooms
};