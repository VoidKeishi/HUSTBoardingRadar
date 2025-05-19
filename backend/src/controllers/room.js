const roomService = require('../services/room');

const findOneRoom = async (req, res) => {
  const roomId = req.params.roomId;
  const room = await roomService.findOneRoom(roomId);
  res.json(room);
}

const findAllRecommendedRooms = async (req, res) => {
  const rooms = await roomService.findAllRecommendedRooms();
  res.json(rooms);
}

module.exports = {
  findOneRoom,
  findAllRecommendedRooms,
}