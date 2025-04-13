// Mock data for accommodations
const accommodations = [
    {
        id: 1,
        title: "Phòng Studio Hiện Đại ở Phường Bách Khoa",
        address: "15 Trần Đại Nghĩa, Bách Khoa, Hai Bà Trưng, Hà Nội",
        price: 3500000,
        size: 28,
        distance: 0.5,
        capacity: 1,
        description: "Căn hộ studio sáng sủa và hiện đại, hoàn hảo cho sinh viên. Chỉ cách cổng chính ĐHBKHN 5 phút đi bộ. Mới được cải tạo với nội thất và thiết bị mới.",
        amenities: ["Wi-Fi", "Điều Hòa", "Phòng Tắm Riêng", "Bếp", "Máy Giặt", "Bàn Học"],
        contact: {
            name: "Chị Linh",
            phone: "0912345678"
        },
        images: [
            "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hbGwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 92,
            details: {
                source: "Chủ nhà xác thực",
                lastUpdated: "2 ngày trước",
                imageQuality: "Hình ảnh chất lượng cao",
                contactVerified: true
            }
        }
    },
    {
        id: 2,
        title: "Phòng Ở Ghép Trong Ký Túc Xá Sinh Viên",
        address: "78 Trần Đại Nghĩa, Bách Khoa, Hai Bà Trưng, Hà Nội",
        price: 1800000,
        size: 20,
        distance: 0.3,
        capacity: 4,
        description: "Phòng ở ghép giá rẻ trong tòa nhà dành riêng cho sinh viên. Đã bao gồm tất cả các tiện ích. Khu vực chung bao gồm bếp, phòng khách và không gian học tập. Rất gần khuôn viên ĐHBKHN.",
        amenities: ["Wi-Fi", "Phòng Tắm Chung", "Bếp", "Khu vực học tập", "Bảo vệ"],
        contact: {
            name: "Văn phòng KTX",
            phone: "0987654321"
        },
        images: [
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhcmVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 85,
            details: {
                source: "Đối tác nhà ở của trường",
                lastUpdated: "7 ngày trước",
                imageQuality: "Hình ảnh chất lượng tốt",
                contactVerified: true
            }
        }
    },
    {
        id: 3,
        title: "Căn Hộ 2 Phòng Ngủ Rộng Rãi",
        address: "25 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội",
        price: 6500000,
        size: 65,
        distance: 0.7,
        capacity: 4,
        description: "Hoàn hảo để ở ghép với bạn, căn hộ 2 phòng ngủ rộng rãi này mang đến sự thoải mái và tiện lợi. Cả hai phòng ngủ đều rộng rãi với tủ quần áo âm tường. Phòng khách kiểu mở với nhà bếp hiện đại.",
        amenities: ["Wi-Fi", "Điều Hòa", "Phòng Tắm Riêng", "Bếp", "Ban Công", "Máy Giặt"],
        contact: {
            name: "Anh Tuấn",
            phone: "0923456789"
        },
        images: [
            "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1633505650187-82536736c580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1613013261832-a5cf35164fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 78,
            details: {
                source: "Người dùng đăng tải",
                lastUpdated: "14 ngày trước",
                imageQuality: "Hình ảnh chất lượng tốt",
                contactVerified: true
            }
        }
    },
    {
        id: 4,
        title: "Phòng Giá Rẻ Gần ĐHBKHN",
        address: "120 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội",
        price: 1500000,
        size: 15,
        distance: 0.4,
        capacity: 1,
        description: "Phòng đơn giá rẻ trong nhà ở ghép. Phù hợp cho sinh viên có ngân sách hạn chế. Phòng tắm và bếp dùng chung với 3 người khác. Tất cả hóa đơn đã bao gồm trong tiền thuê.",
        amenities: ["Wi-Fi", "Phòng Tắm Chung", "Bếp Chung", "Bàn Học"],
        contact: {
            name: "Anh Đức",
            phone: "0912876543"
        },
        images: [
            "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYWxsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21hbGwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1547590289-945092712817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpdGNoZW4lMjBzaGFyZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 55,
            details: {
                source: "Dữ liệu từ trang web cho thuê",
                lastUpdated: "45 ngày trước",
                imageQuality: "Hình ảnh chất lượng thấp",
                contactVerified: false
            }
        }
    },
    {
        id: 5,
        title: "Studio Cao Cấp Với View Đẹp",
        address: "55 Giải Phóng, Đồng Tâm, Hai Bà Trưng, Hà Nội",
        price: 7000000,
        size: 35,
        distance: 1.2,
        capacity: 2,
        description: "Căn hộ studio cao cấp trong tòa nhà hiện đại với bảo vệ và thang máy. Căn hộ có nội thất cao cấp, bếp đầy đủ thiết bị, và ban công nhỏ với tầm nhìn ra thành phố. Hoàn hảo cho sinh viên muốn sự thoải mái và riêng tư.",
        amenities: ["Wi-Fi", "Điều Hòa", "Phòng Tắm Riêng", "Bếp Đầy Đủ", "Ban Công", "Bảo Vệ", "Thang Máy"],
        contact: {
            name: "Công ty Cho thuê Cao cấp",
            phone: "0987123456"
        },
        images: [
            "https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGx1eHVyeSUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1617817583841-052a527b4f50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGx1eHVyeSUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1eHVyeSUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 90,
            details: {
                source: "Đơn vị bất động sản xác thực",
                lastUpdated: "5 ngày trước",
                imageQuality: "Hình ảnh chuyên nghiệp chất lượng cao",
                contactVerified: true
            }
        }
    },
    {
        id: 6,
        title: "Phòng Trọ Sinh Viên Gần Cổng Phụ ĐHBKHN",
        address: "45 Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng, Hà Nội",
        price: 1900000,
        size: 18,
        distance: 0.2,
        capacity: 1,
        description: "Phòng trọ sinh viên sạch sẽ, an ninh, gần cổng phụ ĐHBKHN. Phòng có cửa sổ thoáng mát, không gian riêng tư. Chủ nhà thân thiện, không thu phí gửi xe.",
        amenities: ["Wi-Fi", "Quạt Trần", "Giường", "Tủ Quần Áo", "Bàn Học", "Gửi Xe Miễn Phí"],
        contact: {
            name: "Cô Hương",
            phone: "0976543210"
        },
        images: [
            "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGVudCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmF0aHJvb20lMjBzaGFyZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 83,
            details: {
                source: "Giới thiệu bởi sinh viên",
                lastUpdated: "10 ngày trước",
                imageQuality: "Hình ảnh chất lượng tốt",
                contactVerified: true
            }
        }
    },
    {
        id: 7,
        title: "Căn Hộ Mini Tiện Nghi Gần Công Viên Thống Nhất",
        address: "30 Lê Duẩn, Đồng Đa, Hà Nội",
        price: 4200000,
        size: 30,
        distance: 1.5,
        capacity: 2,
        description: "Căn hộ mini đầy đủ tiện nghi, có phòng tắm và bếp riêng. Tòa nhà mới xây, an ninh 24/7, gần công viên Thống Nhất và chỉ cách ĐHBKHN 15 phút đi xe máy.",
        amenities: ["Wi-Fi", "Điều Hòa", "Nóng Lạnh", "Phòng Tắm Riêng", "Bếp Riêng", "Tủ Lạnh", "Máy Giặt", "Thang Máy"],
        contact: {
            name: "Chị Thảo",
            phone: "0967890123"
        },
        images: [
            "https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBraXRjaGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 88,
            details: {
                source: "Chủ nhà xác thực",
                lastUpdated: "3 ngày trước",
                imageQuality: "Hình ảnh chất lượng cao",
                contactVerified: true
            }
        }
    },
    {
        id: 8,
        title: "Phòng Trọ Tiện Nghi Tại Ngõ 68 Triều Khúc",
        address: "Ngõ 68 Triều Khúc, Thanh Xuân, Hà Nội",
        price: 2000000,
        size: 20,
        distance: 3.5,
        capacity: 1,
        description: "Phòng trọ mới xây dựng và trang bị đầy đủ tiện nghi. Khu vực yên tĩnh, an ninh tốt, gần chợ và cửa hàng tiện lợi. Có xe buýt trực tiếp đến ĐHBKHN.",
        amenities: ["Wi-Fi", "Điều Hòa", "Nóng Lạnh", "Tủ Quần Áo", "Bàn Học", "Phòng Tắm Riêng"],
        contact: {
            name: "Anh Minh",
            phone: "0932123456"
        },
        images: [
            "https://images.unsplash.com/photo-1609946860441-a51ffcf22208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVkcm9vbSUyMHNtYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBiYXRocm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzJTIwc3RvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 76,
            details: {
                source: "Người dùng đăng tải",
                lastUpdated: "12 ngày trước",
                imageQuality: "Hình ảnh chất lượng khá",
                contactVerified: true
            }
        }
    },
    {
        id: 9,
        title: "Phòng Trọ Cho Nữ Gần ĐHBKHN",
        address: "Ngõ 89 Lĩnh Nam, Hoàng Mai, Hà Nội",
        price: 1700000,
        size: 16,
        distance: 1.8,
        capacity: 1,
        description: "Phòng trọ dành riêng cho nữ sinh viên, khu vực an ninh, yên tĩnh. Chủ nhà là giáo viên về hưu, thân thiện và quan tâm đến sinh viên như con cái trong nhà.",
        amenities: ["Wi-Fi", "Quạt", "Nóng Lạnh", "Bàn Học", "Phòng Tắm Chung", "Bếp Chung"],
        contact: {
            name: "Cô Lan",
            phone: "0965432109"
        },
        images: [
            "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYWxsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1551105378-core-personal?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBvd25lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1583845112203-29329902332e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hbGwlMjBraXRjaGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 89,
            details: {
                source: "Giới thiệu bởi sinh viên",
                lastUpdated: "5 ngày trước",
                imageQuality: "Hình ảnh chất lượng tốt",
                contactVerified: true
            }
        }
    },
    {
        id: 10,
        title: "Căn Hộ Chung Cư Times City",
        address: "458 Minh Khai, Hai Bà Trưng, Hà Nội",
        price: 8500000,
        size: 70,
        distance: 2.0,
        capacity: 5,
        description: "Căn hộ 2 phòng ngủ trong khu đô thị Times City. Đầy đủ nội thất cao cấp, an ninh 24/7, gần trường học, bệnh viện, siêu thị. Lý tưởng cho gia đình hoặc nhóm sinh viên muốn ở chung.",
        amenities: ["Wi-Fi", "Điều Hòa", "Phòng Tắm Riêng", "Bếp Đầy Đủ", "Máy Giặt", "Bảo Vệ", "Hồ Bơi", "Phòng Gym"],
        contact: {
            name: "Anh Hùng",
            phone: "0901234567"
        },
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bHV4dXJ5JTIwYXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGJhdGhyb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 95,
            details: {
                source: "Đơn vị bất động sản xác thực",
                lastUpdated: "1 ngày trước",
                imageQuality: "Hình ảnh chuyên nghiệp chất lượng cao",
                contactVerified: true
            }
        }
    },
    {
        id: 11,
        title: "Phòng Trọ Sinh Viên Ngõ 43 Trần Đại Nghĩa",
        address: "Ngõ 43 Trần Đại Nghĩa, Hai Bà Trưng, Hà Nội",
        price: 1600000,
        size: 14,
        distance: 0.3,
        capacity: 1,
        description: "Phòng trọ sinh viên cơ bản, sạch sẽ, ngay sát ĐHBKHN. Không gian nhỏ nhưng đủ dùng cho 1 sinh viên. Khu vực an ninh tốt, nhiều quán ăn xung quanh.",
        amenities: ["Wi-Fi", "Quạt", "Bàn Học", "Tủ Quần Áo", "Phòng Tắm Chung", "Gửi Xe"],
        contact: {
            name: "Anh Cường",
            phone: "0978123456"
        },
        images: [
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhcmVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmF0aHJvb20lMjBzaGFyZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 72,
            details: {
                source: "Người dùng đăng tải",
                lastUpdated: "15 ngày trước",
                imageQuality: "Hình ảnh chất lượng trung bình",
                contactVerified: true
            }
        }
    },
    {
        id: 12,
        title: "Căn Hộ Tầng Trệt Gần Bách Khoa",
        address: "56 Đường Lê Thanh Nghị, Hai Bà Trưng, Hà Nội",
        price: 3800000,
        size: 32,
        distance: 0.4,
        capacity: 2,
        description: "Căn hộ tầng trệt rộng rãi gần cổng chính ĐHBKHN. Phù hợp cho cặp đôi hoặc 2 sinh viên ở ghép. Gần chợ, cửa hàng tiện lợi, và nhiều dịch vụ sinh viên.",
        amenities: ["Wi-Fi", "Điều Hòa", "Phòng Tắm Riêng", "Bếp", "Máy Giặt", "Lối Đi Riêng"],
        contact: {
            name: "Chị Hà",
            phone: "0934567890"
        },
        images: [
            "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGVudCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 86,
            details: {
                source: "Chủ nhà xác thực",
                lastUpdated: "6 ngày trước",
                imageQuality: "Hình ảnh chất lượng tốt",
                contactVerified: true
            }
        }
    },
    {
        id: 13,
        title: "Phòng Trọ Sinh Viên Ngõ 30 Tạ Quang Bửu",
        address: "Ngõ 30 Tạ Quang Bửu, Hai Bà Trưng, Hà Nội",
        price: 1700000,
        size: 16,
        distance: 0.5,
        capacity: 1,
        description: "Phòng trọ sinh viên gần ĐHBKHN, khu vực tập trung nhiều sinh viên. Phòng mới sơn sửa, sạch sẽ. Chỉ cách cổng trường 5 phút đi bộ.",
        amenities: ["Wi-Fi", "Quạt", "Nóng Lạnh", "Tủ Quần Áo", "Phòng Tắm Chung", "Bàn Học"],
        contact: {
            name: "Cô Thủy",
            phone: "0943215678"
        },
        images: [
            "https://i.postimg.cc/5yYcwJcp/490292275-1347085339703877-3346593409232612333-n.jpg",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmF0aHJvb20lMjBzaGFyZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBraXRjaGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 65,
            details: {
                source: "Người dùng đăng tải",
                lastUpdated: "20 ngày trước",
                imageQuality: "Hình ảnh chất lượng trung bình",
                contactVerified: true
            }
        }
    },
    {
        id: 14,
        title: "Căn Hộ 1 Phòng Ngủ The Zei Mỹ Đình",
        address: "The Zei, Mỹ Đình, Nam Từ Liêm, Hà Nội",
        price: 9000000,
        size: 45,
        distance: 5.0,
        capacity: 3,
        description: "Căn hộ cao cấp 1 phòng ngủ tại chung cư The Zei Mỹ Đình. Nội thất đầy đủ, thiết kế hiện đại. Tuy xa trường nhưng có xe bus và dịch vụ shuttle bus đến các trường đại học lớn ở Hà Nội.",
        amenities: ["Wi-Fi", "Điều Hòa", "Smart TV", "Bếp Đầy Đủ", "Phòng Tắm Riêng", "Ban Công", "Máy Giặt", "Bảo Vệ 24/7"],
        contact: {
            name: "Ms. Ngọc - The Zei Leasing",
            phone: "0912345678"
        },
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1587098337310-8f9171999972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwa2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwYmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 93,
            details: {
                source: "Đơn vị bất động sản xác thực",
                lastUpdated: "2 ngày trước",
                imageQuality: "Hình ảnh chuyên nghiệp chất lượng cao",
                contactVerified: true
            }
        }
    },
    {
        id: 15,
        title: "Phòng Trọ Sinh Viên Gần ĐH Kinh Tế Quốc Dân",
        address: "Ngõ 95 Chùa Bộc, Đống Đa, Hà Nội",
        price: 2200000,
        size: 18,
        distance: 2.3,
        capacity: 1,
        description: "Phòng trọ sinh viên sạch đẹp, gần ĐH Kinh Tế Quốc Dân. Phòng có cửa sổ, thiết bị cơ bản, internet tốc độ cao. Nhiều sinh viên ĐHBKHN cũng lựa chọn khu vực này vì có xe buýt đi lại thuận tiện.",
        amenities: ["Wi-Fi", "Điều Hòa", "Nóng Lạnh", "Tủ Quần Áo", "Bàn Học", "Phòng Tắm Riêng"],
        contact: {
            name: "Anh Đạt",
            phone: "0965432108"
        },
        images: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmF0aHJvb20lMjBzaGFyZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNtYWxsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1525438160292-a4a1c5afd320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cyUyMHN0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 78,
            details: {
                source: "Người dùng đăng tải",
                lastUpdated: "10 ngày trước",
                imageQuality: "Hình ảnh chất lượng tốt",
                contactVerified: true
            }
        }
    },
    {
        id: 16,
        title: "Phòng Trọ Cao Cấp Cho Sinh Viên",
        address: "Ngõ 255 Lĩnh Nam, Hoàng Mai, Hà Nội",
        price: 2500000,
        size: 22,
        distance: 1.7,
        capacity: 1,
        description: "Phòng trọ cao cấp dành cho sinh viên, mới hoàn thiện nội thất. Phòng riêng biệt, an ninh, yên tĩnh. Chỉ cho nữ sinh hoặc gia đình thuê.",
        amenities: ["Wi-Fi", "Điều Hòa", "Nóng Lạnh", "Tủ Quần Áo", "Bàn Học", "Phòng Tắm Riêng", "Tủ Lạnh Mini"],
        contact: {
            name: "Chị Mai",
            phone: "0901234567"
        },
        images: [
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1609946860441-a51ffcf22208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVkcm9vbSUyMHNtYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwYmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 84,
            details: {
                source: "Chủ nhà xác thực",
                lastUpdated: "8 ngày trước",
                imageQuality: "Hình ảnh chất lượng tốt",
                contactVerified: true
            }
        }
    },
    {
        id: 17,
        title: "Phòng Trọ Giá Rẻ Gần Chợ Mơ",
        address: "Ngõ 73 Bạch Mai, Hai Bà Trưng, Hà Nội",
        price: 1400000,
        size: 12,
        distance: 1.9,
        capacity: 1,
        description: "Phòng trọ giá rẻ gần chợ Mơ, phù hợp cho sinh viên tiết kiệm chi phí. Phòng nhỏ nhưng đầy đủ tiện nghi cơ bản. Khu vực an ninh, nhiều sinh viên ở.",
        amenities: ["Wi-Fi", "Quạt", "Tủ", "Giường", "Phòng Tắm Chung", "Bếp Chung"],
        contact: {
            name: "Cô Vân",
            phone: "0943215678"
        },
        images: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhcmVkJTIwa2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1596873528703-3c78aa7de442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hhcmVkJTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 62,
            details: {
                source: "Người dùng đăng tải",
                lastUpdated: "30 ngày trước",
                imageQuality: "Hình ảnh chất lượng trung bình",
                contactVerified: true
            }
        }
    },
    {
        id: 18,
        title: "Phòng Trọ An Ninh Cho Nữ",
        address: "Ngõ 205 Giải Phóng, Hai Bà Trưng, Hà Nội",
        price: 1800000,
        size: 15,
        distance: 1.0,
        capacity: 1,
        description: "Phòng trọ dành riêng cho nữ sinh viên, khu vực an ninh, chủ nhà sống cùng. Môi trường sống lành mạnh, đầy đủ tiện nghi, phù hợp với các bạn nữ thích sự riêng tư và an toàn.",
        amenities: ["Wi-Fi", "Điều Hòa", "Nóng Lạnh", "Tủ Quần Áo", "Bàn Học", "Phòng Tắm Riêng", "Bếp Chung"],
        contact: {
            name: "Cô Hồng",
            phone: "0987654321"
        },
        images: [
            "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYWxsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1532523974781-d7dcebe9056a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hbGwlMjBiYXRocm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 86,
            details: {
                source: "Giới thiệu bởi sinh viên",
                lastUpdated: "7 ngày trước",
                imageQuality: "Hình ảnh chất lượng tốt",
                contactVerified: true
            }
        }
    },
    {
        id: 19,
        title: "Căn Hộ Tầng Thượng View Đẹp",
        address: "90 Phố Đức Giang, Long Biên, Hà Nội",
        price: 6000000,
        size: 40,
        distance: 3.2,
        capacity: 3,
        description: "Căn hộ tầng thượng với view toàn cảnh Hà Nội, không gian thoáng mát. Nội thất đầy đủ, thiết kế hiện đại. Tuy cách xa trường học nhưng có môi trường yên tĩnh, phù hợp cho người thích không gian riêng tư.",
        amenities: ["Wi-Fi", "Điều Hòa", "Phòng Tắm Riêng", "Bếp Đầy Đủ", "Máy Giặt", "Ban Công", "Sân Thượng", "Thang Máy"],
        contact: {
            name: "Anh Sơn",
            phone: "0967890123"
        },
        images: [
            "https://images.unsplash.com/photo-1551361415-69c87624334f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vZnRvcCUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0bWVudCUyMHZpZXd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBiYXRocm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 82,
            details: {
                source: "Người dùng đăng tải",
                lastUpdated: "9 ngày trước",
                imageQuality: "Hình ảnh chất lượng cao",
                contactVerified: true
            }
        }
    },
    {
        id: 20,
        title: "Phòng Trọ Sinh Viên Cạnh Cổng ĐHBKHN",
        address: "15 Giáp Nhất, Thanh Xuân, Hà Nội",
        price: 1900000,
        size: 18,
        distance: 0.1,
        capacity: 1,
        description: "Phòng trọ cách cổng trường ĐHBKHN chỉ 100m, vị trí đắc địa, thuận tiện di chuyển. Phòng vừa được sửa chữa mới, sạch sẽ, đầy đủ tiện nghi cơ bản cho sinh viên.",
        amenities: ["Wi-Fi", "Điều Hòa", "Nóng Lạnh", "Tủ Quần Áo", "Bàn Học", "Phòng Tắm Riêng", "Gửi Xe"],
        contact: {
            name: "Anh Phong",
            phone: "0943215678"
        },
        images: [
            "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hbGwlMjBiYXRocm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1627818356981-e9a3cf2bffe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dW5pdmVyc2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        ],
        trustScore: {
            score: 89,
            details: {
                source: "Chủ nhà xác thực",
                lastUpdated: "4 ngày trước",
                imageQuality: "Hình ảnh chất lượng tốt",
                contactVerified: true
            }
        }
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const accommodationsList = document.getElementById('accommodations-list');
    const accommodationModal = document.getElementById('accommodation-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalContent = document.getElementById('modal-content-container');
    const resultsCount = document.getElementById('results-count');
    
    // View Toggle Buttons
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    
    // Filter elements
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const distanceInput = document.getElementById('distance');
    const distanceValue = document.getElementById('distance-value');
    const minTrustScoreInput = document.getElementById('min-trust-score');
    const trustScoreValue = document.getElementById('trust-score-value');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const wifiCheckbox = document.getElementById('wifi');
    const acCheckbox = document.getElementById('ac');
    const privateBathroomCheckbox = document.getElementById('private-bathroom');
    const kitchenCheckbox = document.getElementById('kitchen');
    
    // Initialize the accommodations list
    renderAccommodations(accommodations);
    resultsCount.textContent = `(${accommodations.length})`;
    
    // View Toggle Event Listeners
    gridViewBtn.addEventListener('click', function() {
        if (!accommodationsList.classList.contains('grid-view')) {
            accommodationsList.classList.remove('list-view');
            accommodationsList.classList.add('grid-view');
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            
            // Save preference to localStorage
            localStorage.setItem('viewPreference', 'grid');
        }
    });
    
    listViewBtn.addEventListener('click', function() {
        if (!accommodationsList.classList.contains('list-view')) {
            accommodationsList.classList.remove('grid-view');
            accommodationsList.classList.add('list-view');
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            
            // Save preference to localStorage
            localStorage.setItem('viewPreference', 'list');
        }
    });
    
    // Check for saved view preference
    const savedViewPreference = localStorage.getItem('viewPreference');
    if (savedViewPreference === 'list') {
        listViewBtn.click();
    } else {
        gridViewBtn.click(); // Default to grid view
    }

    // Input event listeners for range inputs
    distanceInput.addEventListener('input', function() {
        distanceValue.textContent = `${this.value} km`;
    });
    
    minTrustScoreInput.addEventListener('input', function() {
        trustScoreValue.textContent = this.value;
    });
    
    // Filter buttons event listeners
    applyFiltersBtn.addEventListener('click', applyFilters);
    resetFiltersBtn.addEventListener('click', resetFilters);
    
    // Modal close event
    closeModal.addEventListener('click', function() {
        accommodationModal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === accommodationModal) {
            accommodationModal.style.display = 'none';
        }
    });
    
    // Render all accommodations
    function renderAccommodations(accommodationsToRender) {
        accommodationsList.innerHTML = '';
        
        accommodationsToRender.forEach(accommodation => {
            const accommodationItem = createAccommodationItem(accommodation);
            accommodationsList.appendChild(accommodationItem);
        });
    }
    
    // Create accommodation item
    function createAccommodationItem(accommodation) {
        const item = document.createElement('div');
        item.className = 'accommodation-item';
        
        // Determine trust score class
        let trustScoreClass = '';
        let trustScore = accommodation.trustScore.score;
        
        if (trustScore >= 80) {
            trustScoreClass = 'high-score';
        } else if (trustScore >= 60) {
            trustScoreClass = 'medium-score';
        } else {
            trustScoreClass = 'low-score';
        }
        
        item.innerHTML = `
            <div class="accommodation-image">
                <img src="${accommodation.images[0]}" alt="${accommodation.title}">
                <div class="trust-score ${trustScoreClass}">
                    ${trustScore}
                    <div class="trust-tooltip">
                        <p><strong>Nguồn:</strong> ${accommodation.trustScore.details.source}</p>
                        <p><strong>Cập nhật:</strong> ${accommodation.trustScore.details.lastUpdated}</p>
                        <p><strong>Liên hệ:</strong> ${accommodation.trustScore.details.contactVerified ? 'Đã xác thực' : 'Chưa xác thực'}</p>
                    </div>
                </div>
            </div>
            <div class="accommodation-details">
                <h3 class="accommodation-title">${accommodation.title}</h3>
                <p class="accommodation-address"><i class="fas fa-map-marker-alt"></i> ${accommodation.address}</p>
                <p class="accommodation-price">${accommodation.price.toLocaleString('vi-VN')} VND/tháng</p>
                <div class="accommodation-meta">
                    <span><i class="fas fa-expand"></i> ${accommodation.size}m²</span>
                    <span><i class="fas fa-walking"></i> ${accommodation.distance}km</span>
                    <span><i class="fas fa-users"></i> ${accommodation.capacity} người</span>
                </div>
                <div class="tags-container">
                    ${accommodation.amenities.slice(0, 3).map(amenity => `<span class="tag">${amenity}</span>`).join('')}
                    ${accommodation.amenities.length > 3 ? `<span class="tag">+${accommodation.amenities.length - 3}</span>` : ''}
                </div>
            </div>
        `;
        
        // Add click event to open modal
        item.addEventListener('click', function() {
            openAccommodationModal(accommodation);
        });
        
        return item;
    }
    
    // Open accommodation modal
    function openAccommodationModal(accommodation) {
        // Populate modal content
        modalContent.innerHTML = createDetailedView(accommodation);
        
        // Display modal
        accommodationModal.style.display = 'block';
        
        // Add event listeners for image gallery
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.querySelector('.main-image');
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                mainImage.src = this.src;
                
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
            });
        });
    }
    
    // Create detailed view for modal
    function createDetailedView(accommodation) {
        // Determine trust score class
        let trustScoreClass = '';
        let trustScore = accommodation.trustScore.score;
        
        if (trustScore >= 80) {
            trustScoreClass = 'high-score';
        } else if (trustScore >= 60) {
            trustScoreClass = 'medium-score';
        } else {
            trustScoreClass = 'low-score';
        }
        
        return `
            <div class="detailed-view">
                <div class="image-gallery">
                    <img src="${accommodation.images[0]}" alt="${accommodation.title}" class="main-image">
                    <div class="thumbnail-container">
                        ${accommodation.images.map((src, index) => `
                            <img src="${src}" alt="Thumbnail ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}">
                        `).join('')}
                    </div>
                </div>
                <div class="accommodation-info">
                    <h3>${accommodation.title}</h3>
                    
                    <div class="info-section">
                        <p><i class="fas fa-map-marker-alt"></i> ${accommodation.address}</p>
                        <p><i class="fas fa-coins"></i> <strong>${accommodation.price.toLocaleString('vi-VN')} VND/tháng</strong></p>
                        <p><i class="fas fa-expand"></i> Diện tích: ${accommodation.size}m²</p>
                        <p><i class="fas fa-walking"></i> Cách HUST: ${accommodation.distance}km</p>
                        <p><i class="fas fa-users"></i> Sức chứa: ${accommodation.capacity} người</p>
                    </div>
                    
                    <div class="info-section">
                        <h4>Mô Tả</h4>
                        <p>${accommodation.description}</p>
                    </div>
                    
                    <div class="info-section">
                        <h4>Tiện Ích</h4>
                        <div class="detailed-tags">
                            ${accommodation.amenities.map(amenity => `<span class="tag">${amenity}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="detailed-trust-score ${trustScoreClass}" style="border-color: var(--${trustScore >= 80 ? 'success' : trustScore >= 60 ? 'warning' : 'danger'}-color);">
                        <div class="score-value">${trustScore}</div>
                        <div class="score-details">
                            <h4>Độ Tin Cậy</h4>
                            <p><strong>Nguồn:</strong> ${accommodation.trustScore.details.source}</p>
                            <p><strong>Cập nhật:</strong> ${accommodation.trustScore.details.lastUpdated}</p>
                            <p><strong>Chất lượng hình ảnh:</strong> ${accommodation.trustScore.details.imageQuality}</p>
                        </div>
                    </div>
                    
                    <div class="contact-info">
                        <h4>Thông Tin Liên Hệ</h4>
                        <p><i class="fas fa-user"></i> ${accommodation.contact.name}</p>
                        <p><i class="fas fa-phone"></i> <a href="tel:${accommodation.contact.phone}">${accommodation.contact.phone}</a></p>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Apply filters
    function applyFilters() {
        const minPrice = minPriceInput.value ? parseInt(minPriceInput.value) : 0;
        const maxPrice = maxPriceInput.value ? parseInt(maxPriceInput.value) : Number.MAX_SAFE_INTEGER;
        const maxDistance = parseFloat(distanceInput.value);
        const minTrustScore = parseInt(minTrustScoreInput.value);
        
        const wifiChecked = wifiCheckbox.checked;
        const acChecked = acCheckbox.checked;
        const privateBathroomChecked = privateBathroomCheckbox.checked;
        const kitchenChecked = kitchenCheckbox.checked;
        
        const filteredAccommodations = accommodations.filter(acc => {
            // Price filters
            if (acc.price < minPrice || acc.price > maxPrice) {
                return false;
            }
            
            // Distance filter
            if (acc.distance > maxDistance) {
                return false;
            }
            
            // Trust score filter
            if (acc.trustScore.score < minTrustScore) {
                return false;
            }
            
            // Amenities filters
            if (wifiChecked && !acc.amenities.includes('Wi-Fi')) {
                return false;
            }
            
            if (acChecked && !acc.amenities.includes('Điều Hòa')) {
                return false;
            }
            
            if (privateBathroomChecked && !acc.amenities.includes('Phòng Tắm Riêng')) {
                return false;
            }
            
            if (kitchenChecked && !acc.amenities.includes('Bếp') && !acc.amenities.includes('Bếp Chung') && !acc.amenities.includes('Bếp Riêng') && !acc.amenities.includes('Bếp Đầy Đủ')) {
                return false;
            }
            
            return true;
        });
        
        // Update results
        renderAccommodations(filteredAccommodations);
        resultsCount.textContent = `(${filteredAccommodations.length})`;
    }
    
    // Reset filters
    function resetFilters() {
        minPriceInput.value = '';
        maxPriceInput.value = '';
        distanceInput.value = 3;
        distanceValue.textContent = '3 km';
        minTrustScoreInput.value = 50;
        trustScoreValue.textContent = '50';
        
        wifiCheckbox.checked = false;
        acCheckbox.checked = false;
        privateBathroomCheckbox.checked = false;
        kitchenCheckbox.checked = false;
        
        renderAccommodations(accommodations);
        resultsCount.textContent = `(${accommodations.length})`;
    }
});