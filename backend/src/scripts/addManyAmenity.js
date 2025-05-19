require('dotenv').config();
require('../models');

const amenityServices= require('../services/amenity');

(async () => {
  const preDefinedAmenity = [
    "Wifi",
    "Nhà vệ sinh riêng",
    "Giường, tủ quần áo, bàn ghế",
    "Điều hòa",
    "Bình nóng lạnh",
    "Tủ lạnh",
    "Máy giặt",
    "Bếp nấu ăn",
    "Kệ bếp",
    "Bồn rửa chén",
    "Gác lửng",
    "Ban công",
    "Cửa sổ",
    "Máy quạt",
    "Chỗ để xe",
    "Camera an ninh",
    "Khóa vân tay",
    "Rèm cửa",
    "Nệm",
    "Thang máy",
    "Dọn vệ sinh khu vực chung",
    "Internet tốc độ cao",
    "Sân phơi đồ",
    "Lò vi sóng",
    "Tivi",
    "Máy hút mùi",
    "Bảo vệ 24/24",
    "Hệ thống PCCC",
    "Không gian sinh hoạt chung",
    "Hợp đồng thuê rõ ràng"
  ];
  
  for (let i = 0; i < preDefinedAmenity.length; i++) {
    await amenityServices.createAmenity({ name: preDefinedAmenity[i] });
  }

  console.log("Successfully created many amenities");
  process.exit(1);
})()