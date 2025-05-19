const roomDaos = require('../daos/room.js');

const findOneRoom = async (roomId) => {
  const room = await roomDaos.findOneRoom(roomId);
  return room;
}

const findAllRecommendedRooms = async () => {
  const rooms = await roomDaos.findAllRooms();
  return rooms;
}

module.exports = {
  findOneRoom,
  findAllRecommendedRooms,
}