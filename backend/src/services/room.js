const roomDaos = require('../daos/room.js');
const axios = require('axios');

const findOneRoom = async (roomId) => {
  const room = await roomDaos.findOneRoom(roomId);
  return room;
}

const findAllRecommendedRooms = async () => {
  const rooms = await roomDaos.findAllRooms();

  // Calculate time-based trust score adjustments
  const currentDate = new Date();
  const twoWeeksAgo = new Date(currentDate.getTime() - (14 * 24 * 60 * 60 * 1000));
  const oneMonthAgo = new Date(currentDate.getTime() - (30 * 24 * 60 * 60 * 1000));

  // Apply trust score adjustments based on lastUpdated field
  const adjustedRooms = rooms.map(room => {
    let adjustedRoom = { ...room.toObject() };
    let timeBonus = 0;

    if (room.trustScore && room.trustScore.details && room.trustScore.details.lastUpdated) {
      const lastUpdatedDate = new Date(room.trustScore.details.lastUpdated);

      // Check if lastUpdated is within 2 weeks
      if (lastUpdatedDate >= twoWeeksAgo) {
        timeBonus = 1.0;
      }
      // Check if lastUpdated is between 2 weeks and 1 month
      else if (lastUpdatedDate >= oneMonthAgo && lastUpdatedDate < twoWeeksAgo) {
        timeBonus = 0.5;
      }
      // If lastUpdated is more than 1 month old, no bonus (timeBonus remains 0)
    }

    // Apply the time bonus to the trust score
    if (adjustedRoom.trustScore && typeof adjustedRoom.trustScore.score === 'number') {
      adjustedRoom.trustScore.score = Math.min(5, adjustedRoom.trustScore.score + timeBonus);
    }

    return adjustedRoom;
  });

  // Sort by adjusted trust score in descending order
  adjustedRooms.sort((a, b) => {
    const scoreA = a.trustScore?.score || 0;
    const scoreB = b.trustScore?.score || 0;
    return scoreB - scoreA;
  });

  return adjustedRooms;
}

// Function to check if a field is properly filled
const isFieldFilled = (value) => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim() !== '';
  if (typeof value === 'number') return value > 0;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'object') {
    // For nested objects like contact, check if at least one property is filled
    return Object.values(value).some(v => isFieldFilled(v));
  }
  return true;
};

const getImageScoreLabel = (imageScore) => {
  if (imageScore === 1) return 'Hình ảnh chuyên nghiệp chất lượng cao';
  if (imageScore === 0) return 'Hình ảnh chất lượng thấp';
  if (imageScore === 0.5) return 'Hình ảnh chất lượng trung bình';
}

const createNewRoom = async (newRoom) => {
  let currentTrustScore = 0;
  const currentDate = new Date();
  if (newRoom?.images.length <= 1) {
    currentTrustScore = 0;
  } else {
    // Count missing fields
    const requiredFields = [
      newRoom?.name,
      newRoom?.address,
      newRoom?.area,
      newRoom?.price,
      newRoom?.distance,
      newRoom?.capacity,
      newRoom?.description,
      newRoom?.amenities,
      newRoom?.contact,
      newRoom?.facebookLink,
      newRoom?.images
    ];
    const missingFieldsCount = requiredFields.filter(field => !isFieldFilled(field)).length;
    // Calculate trust score based on missing fields
    if (missingFieldsCount === 0) {
      currentTrustScore += 1;
    } else if (missingFieldsCount > 0 && missingFieldsCount <= 4) {
      currentTrustScore += 0.5;
    } else if (missingFieldsCount > 4) {
      currentTrustScore += 0;
    }

    // Verified contact phone number
    if (newRoom?.contact) {
      if (newRoom?.contact?.phone) {
        currentTrustScore += 1;
      }
    }

    // Calculate trust score based on image size in KB
    let highestImageScore = 0;
    if (newRoom?.images && newRoom.images.length > 0) {
      for (let i = 0; i < newRoom.images.length; i++) {
        try {
          let currentScore = 0;
          const response = await axios.get(newRoom.images[i], { responseType: 'arraybuffer' });
          const sizeInKBytes = response.headers['content-length'] / 1024 || 0;
          if (sizeInKBytes >= 5 && sizeInKBytes <= 15) currentScore = 0.5;
          if (sizeInKBytes > 15) currentScore = 1;
          console.log('🚀 ~ createNewRoom ~ currentScore:', currentScore)

          if (highestImageScore < currentScore) highestImageScore = currentScore;
        } catch (error) {
          continue;
        }
      }
    }
    currentTrustScore += highestImageScore;

    // Check if room price is acceptable
    if (newRoom?.priceAcceptable) {
      currentTrustScore += 1;
    }
  }

  const newRoomData = {
    name: newRoom?.name || 'Phòng trọ',
    address: newRoom?.address || 'Không có địa chỉ',
    area: newRoom?.area || 0,
    price: newRoom?.price || 0,
    distance: newRoom?.distance || 0,
    capacity: newRoom?.capacity || 0,
    description: newRoom?.description || 'Không có mô tả',
    amenities: newRoom?.amenities || [],
    contact: {
      name: newRoom?.contact?.name || 'Không có tên chủ trọ',
      phone: newRoom?.contact?.phone || 'Không có số điện thoại chủ trọ',
    },
    facebookLink: newRoom?.facebookLink || 'Không có nguồn bài đăng',
    images: newRoom?.images || [],
    trustScore: {
      score: currentTrustScore,
      details: {
        source: newRoom?.source || 'Dữ liệu từ trang web cho thuê',
        lastUpdated: newRoom?.lastUpdated || new Date(currentDate.getTime() - (30 * 24 * 60 * 60 * 1000)),
        imageQuality: getImageScoreLabel(highestImageScore),
        contactVerified: newRoom?.contact?.phone ? true : false,
        priceAcceptable: newRoom?.priceAcceptable ? true : false,
      }
    }
  }

  const createdRoom = await roomDaos.createRoom(newRoomData);
  return createdRoom;
}

module.exports = {
  findOneRoom,
  findAllRecommendedRooms,
  createNewRoom,
}