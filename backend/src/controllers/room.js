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

const createNewRoom = async (req, res) => {
  const newRoom = await roomService.createNewRoom(req.body);
  res.json(newRoom);
}

module.exports = {
  findOneRoom,
  findAllRecommendedRooms,
  createNewRoom,
}