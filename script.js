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
        amenities: ["Wifi", "Điều hòa", "Phòng tắm riêng", "Bếp", "Máy giặt", "Bàn học"],
        contact: {
            name: "Chị Linh",
            phone: "0912345678"
        },
        facebook: "https://www.facebook.com/share/p/1BcbBXvuLS/",
        images: [
            "https://i.postimg.cc/NGrhdRP0/491016865-1814084662843338-7048858210294516091-n.jpg",
            "https://i.postimg.cc/6QDcq4VH/490447724-1814084686176669-3838165171678020692-n.jpg",
            "https://i.postimg.cc/CMf1bBGG/490447285-1814084669510004-8663576387664853209-n.jpg"
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
        amenities: ["Wifi", "Phòng tắm chung", "Bếp", "Khu vực học tập", "Bảo vệ"],
        contact: {
            name: "Văn phòng KTX",
            phone: "0987654321"
        },
        facebook: "https://www.facebook.com/share/p/1BcCEpn7sQ/",
        images: [
            "https://i.postimg.cc/dtHCHj2y/490674539-1479879846730195-416531478379605353-n.jpg",
            "https://i.postimg.cc/TP4GBhkQ/491218329-1479879863396860-2907599218046258333-n.jpg",
            "https://i.postimg.cc/HLJFcz24/490351324-1479879916730188-8550949005232549928-n.jpg"
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
        description: "Hoàn hảo để ở ghép với bạn, căn hộ 2 phòng ngủ rộng rãi này mang đến sự thoải mái và tiện lợi. Cả hai phòng ngủ đều rộng rãi với Tủ quần áo âm tường. Phòng khách kiểu mở với nhà bếp hiện đại.",
        amenities: ["Wifi", "Điều hòa", "Phòng tắm riêng", "Bếp", "Ban công", "Máy giặt"],
        contact: {
            name: "Anh Tuấn",
            phone: "0923456789"
        },
        facebook: "https://www.facebook.com/share/p/1E7KAhoQKj/",
        images: [
            "https://i.postimg.cc/6QRYxmcS/490899179-3176031669212652-3823758644167278364-n.jpg",
            "https://i.postimg.cc/VLpqsFJc/490715169-3176031675879318-3696369309830022704-n.jpg",
            "https://i.postimg.cc/Zn9WX1Fv/490919926-3176031699212649-7224704188281478044-n.jpg"
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
        amenities: ["Wifi", "Phòng tắm chung", "Bếp Chung", "Bàn học"],
        contact: {
            name: "Anh Đức",
            phone: "0912876543"
        },
        facebook: "https://www.facebook.com/share/p/198zisrLbg/",
        images: [
            "https://i.postimg.cc/qBXBvBgB/490192866-122107168268831508-1979044362334190204-n.jpg",
            "https://i.postimg.cc/qBXBvBgB/490192866-122107168268831508-1979044362334190204-n.jpg",
            "https://i.postimg.cc/qBXBvBgB/490192866-122107168268831508-1979044362334190204-n.jpg"
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
        description: "Căn hộ studio cao cấp trong tòa nhà hiện đại với Bảo vệ và thang máy. Căn hộ có nội thất cao cấp, Bếp đầy đủ thiết bị, và Ban công nhỏ với tầm nhìn ra thành phố. Hoàn hảo cho sinh viên muốn sự thoải mái và riêng tư.",
        amenities: ["Wifi", "Điều hòa", "Phòng tắm riêng", "Bếp đầy đủ", "Ban công", "Bảo vệ", "Thang Máy"],
        contact: {
            name: "Công ty Cho thuê Cao cấp",
            phone: "0987123456"
        },
        facebook: "https://www.facebook.com/share/p/1GEt8ep1RN/",
        images: [
            "https://i.postimg.cc/wxVHdWb7/491081315-1347113793034365-1467637989280678436-n.jpg",
            "https://i.postimg.cc/jd3bDDTT/490140307-1347113666367711-1157579780999412868-n.jpg",
            "https://i.postimg.cc/pL9tzPVF/490111205-1347113613034383-982229061180454271-n.jpg"
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
        amenities: ["Wifi", "Quạt Trần", "Giường", "Tủ quần áo", "Bàn học", "Gửi Xe Miễn Phí"],
        contact: {
            name: "Cô Hương",
            phone: "0976543210"
        },
        facebook: "https://www.facebook.com/share/p/16LoYjxTM7/",
        images: [
            "https://i.postimg.cc/fbmnq59W/488001164-122164377884341086-5057023262202006330-n.jpg",
            "https://i.postimg.cc/vmRCn9SJ/489764761-122164377980341086-4927472703824090375-n.jpg",
            "https://i.postimg.cc/9MbkskF2/488926015-122164377896341086-769440938603375780-n.jpg"
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
        amenities: ["Wifi", "Điều hòa", "Nóng Lạnh", "Phòng tắm riêng", "Bếp Riêng", "Tủ Lạnh", "Máy giặt", "Thang Máy"],
        contact: {
            name: "Chị Thảo",
            phone: "0967890123"
        },
        facebook: "https://www.facebook.com/share/p/15yZyFGHLk/",
        images: [
            "https://i.postimg.cc/pr7sHbww/490356846-122151509762484518-4165553171693482611-n.jpg",
            "https://i.postimg.cc/SNBg1478/490466088-122151509780484518-3932998330043230532-n.jpg",
            "https://i.postimg.cc/8zLtqYtY/490106119-122151509642484518-8167782340735027549-n.jpg"
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
        amenities: ["Wifi", "Điều hòa", "Nóng Lạnh", "Tủ quần áo", "Bàn học", "Phòng tắm riêng"],
        contact: {
            name: "Anh Minh",
            phone: "0932123456"
        },
        facebook: "https://www.facebook.com/share/p/18j4p3mvjY/",
        images: [
            "https://i.postimg.cc/DfD6mhND/487417938-629753463222983-6490049937268215633-n.jpg",
            "https://i.postimg.cc/fR7fH9bn/488547811-629753526556310-650756717822761582-n.jpg",
            "https://i.postimg.cc/cJXMWGYF/488834886-629753616556301-7731600739084885466-n.jpg"
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
        amenities: ["Wifi", "Quạt", "Nóng Lạnh", "Bàn học", "Phòng tắm chung", "Bếp Chung"],
        contact: {
            name: "Cô Lan",
            phone: "0965432109"
        },
        facebook: "https://www.facebook.com/share/p/1A8NLc5dhp/",
        images: [
            "https://i.postimg.cc/MpwFKxMw/491429597-1019083140185883-5115786995489123466-n.jpg",
            "https://i.postimg.cc/6ph18Snv/491157067-1019082740185923-2081099047760599881-n.jpg",
            "https://i.postimg.cc/GphgGQxS/490968886-1019083213519209-6896301915809265979-n.jpg"
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
        amenities: ["Wifi", "Điều hòa", "Phòng tắm riêng", "Bếp đầy đủ", "Máy giặt", "Bảo vệ", "Hồ bơi", "Phòng gym"],
        contact: {
            name: "Anh Hùng",
            phone: "0901234567"
        },
        facebook: "https://www.facebook.com/share/p/19vNikHb91/",
        images: [
            "https://i.postimg.cc/qMs1FYm5/490294218-1429965704837584-3278592752812418216-n.jpg",
            "https://i.postimg.cc/Sxmgbr3N/490405888-1429965714837583-8485645845359675072-n.jpg",
            "https://i.postimg.cc/52pn4zW5/490420155-1429965771504244-329064986463812953-n.jpg"
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
        amenities: ["Wifi", "Quạt", "Bàn học", "Tủ quần áo", "Phòng tắm chung", "Gửi Xe"],
        contact: {
            name: "Anh Cường",
            phone: "0978123456"
        },
        facebook: "https://www.facebook.com/share/p/15uvFUPsa4/",
        images: [
            "https://i.postimg.cc/qMTL2wkX/490714282-2805746546263390-325811304895233753-n.jpg",
            "https://i.postimg.cc/VksW-VN0J/490263892-2805746682930043-8373964483536589665-n.jpg",
            "https://i.postimg.cc/25VFCXwm/491240839-2805746836263361-1697548023482117028-n.jpg"
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
        amenities: ["Wifi", "Điều hòa", "Phòng tắm riêng", "Bếp", "Máy giặt", "Lối Đi Riêng"],
        contact: {
            name: "Chị Hà",
            phone: "0934567890"
        },
        facebook: "https://www.facebook.com/share/p/16aCeen29c/",
        images: [
            "https://i.postimg.cc/bJnxtDWB/490316838-1781111462840538-585851006305637105-n.jpg",
            "https://i.postimg.cc/ZnhrFYhK/491678202-1781111426173875-5534022852378196821-n.jpg",
            "https://i.postimg.cc/v8W78nW1/491761327-1781111536173864-5364395408936406185-n.jpg"
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
        amenities: ["Wifi", "Quạt", "Nóng Lạnh", "Tủ quần áo", "Phòng tắm chung", "Bàn học"],
        contact: {
            name: "Cô Thủy",
            phone: "0943215678"
        },
        facebook: "https://www.facebook.com/share/p/19WHjcsQCm/",
        images: [
            "https://i.postimg.cc/VLgjncZm/489309978-1353120975835230-5565613863187394141-n.jpg",
            "https://i.postimg.cc/nhwBSGtW/490540655-1353121025835225-8160783056574752811-n.jpg",
            "https://i.postimg.cc/N03TBGF7/490327749-1353121109168550-908369782019407122-n.jpg"
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
        amenities: ["Wifi", "Điều hòa", "Smart TV", "Bếp đầy đủ", "Phòng tắm riêng", "Ban công", "Máy giặt", "Bảo vệ 24/7"],
        contact: {
            name: "Ms. Ngọc - The Zei Leasing",
            phone: "0912345678"
        },
        facebook: "https://www.facebook.com/share/p/1LQ7YAW9xQ/",
        images: [
            "https://i.postimg.cc/RhRn7cRX/490985222-981831020811583-7827945737468951035-n.jpg",
            "https://i.postimg.cc/sf9SCrr7/490763023-981831070811578-2565676280887981566-n.jpg",
            "https://i.postimg.cc/8Ppv10p3/490342919-981831104144908-8449971691990451806-n.jpg"
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
        amenities: ["Wifi", "Điều hòa", "Nóng Lạnh", "Tủ quần áo", "Bàn học", "Phòng tắm riêng"],
        contact: {
            name: "Anh Đạt",
            phone: "0965432108"
        },
        facebook: "https://www.facebook.com/share/p/1ANhAdYc4z/",
        images: [
            "https://i.postimg.cc/TwvyBkNt/490170401-1630900300916777-2007931815167989108-n.jpg",
            "https://i.postimg.cc/jjDc5Zr6/490346661-1630900357583438-377383386309980650-n.jpg",
            "https://i.postimg.cc/MTRY0HHv/490757077-1630900370916770-3267509544090241941-n.jpg"
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
        amenities: ["Wifi", "Điều hòa", "Nóng Lạnh", "Tủ quần áo", "Bàn học", "Phòng tắm riêng", "Tủ Lạnh Mini"],
        contact: {
            name: "Chị Mai",
            phone: "0901234567"
        },
        facebook: "https://www.facebook.com/share/p/168Egkm5Gi/",
        images: [
            "https://i.postimg.cc/Kvm5LZ28/490472550-1887264785345091-131122327775474146-n.jpg",
            "https://i.postimg.cc/rsjxgrkF/490760117-1887264342011802-5759857819820856125-n.jpg",
            "https://i.postimg.cc/RCL7vjH5/490764540-1887264478678455-5451050027204425021-n.jpg"
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
        amenities: ["Wifi", "Quạt", "Tủ", "Giường", "Phòng tắm chung", "Bếp Chung"],
        contact: {
            name: "Cô Vân",
            phone: "0943215678"
        },
        facebook: "https://www.facebook.com/share/p/18veTpCPjZ/",
        images: [
            "https://i.postimg.cc/L64z5Ntq/490681098-1709259763132671-6945676756816193424-n.jpg",
            "https://i.postimg.cc/3JL2vm1t/490656465-1709259789799335-8704463236533186381-n.jpg",
            "https://i.postimg.cc/CxzkH56S/489925871-1709259753132672-2440690368297691902-n.jpg"
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
        amenities: ["Wifi", "Điều hòa", "Nóng Lạnh", "Tủ quần áo", "Bàn học", "Phòng tắm riêng", "Bếp Chung"],
        contact: {
            name: "Cô Hồng",
            phone: "0987654321"
        },
        facebook: "https://www.facebook.com/share/p/163ogMvqjk/",
        images: [
            "https://i.postimg.cc/NFj5sC3B/490099282-1398765724596340-8406190923623997557-n.jpg",
            "https://i.postimg.cc/j5sjckdP/490222860-1398765697929676-8072249360968656571-n.jpg",
            "https://i.postimg.cc/2j01cmW6/490043372-1398765827929663-1284165660033537188-n.jpg"
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
        amenities: ["Wifi", "Điều hòa", "Phòng tắm riêng", "Bếp đầy đủ", "Máy giặt", "Ban công", "Sân Thượng", "Thang Máy"],
        contact: {
            name: "Anh Sơn",
            phone: "0967890123"
        },
        facebook: "https://www.facebook.com/share/p/1HAdGzAGPx/",
        images: [
            "https://i.postimg.cc/13hsMYvX/490411698-2744306159101622-7226967547938458571-n.jpg",
            "https://i.postimg.cc/BbRsrhsh/490180509-2744306275768277-2753239199887454138-n.jpg",
            "https://i.postimg.cc/QdQszkzb/491430702-2744306169101621-8055338190020763035-n.jpg"
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
        amenities: ["Wifi", "Điều hòa", "Nóng Lạnh", "Tủ quần áo", "Bàn học", "Phòng tắm riêng", "Gửi Xe"],
        contact: {
            name: "Anh Phong",
            phone: "0943215678"
        },
        facebook: "https://www.facebook.com/share/p/16HuPDANJM/",
        images: [
            "https://i.postimg.cc/ZnQKTbPx/491518804-2026070687883186-7951486829871842642-n.jpg",
            "https://i.postimg.cc/nVSLK289/491193064-2026070694549852-3324560858356900085-n.jpg",
            "https://i.postimg.cc/TYy3tbG7/490875799-2026070797883175-4385154634946477561-n.jpg"
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

// Base API URL
const API_BASE_URL = 'https://hustboardingradar.onrender.com/api';

// Function to convert postimg short URLs to full direct image URLs
function convertToFullImageUrl(shortUrl) {
    // Check if it's already a full URL
    if (shortUrl.includes('i.postimg.cc')) {
        return shortUrl;
    }

    // For postimg.cc URLs, we'll convert them to use i.postimg.cc
    // This is a client-side fix until all URLs can be properly updated
    if (shortUrl.includes('postimg.cc')) {
        // Extract the ID from the URL
        const id = shortUrl.split('/').pop();
        // The actual conversion would need to be handled server-side
        // For now, we'll update the src attribute with onerror
        return shortUrl;
    }

    return shortUrl;
}

// DOM Elements
document.addEventListener('DOMContentLoaded', function () {
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
    const amenitiesContainer = document.getElementById('amenities-container');

    // Store fetched rooms from API
    let fetchedRooms = [];
    // Store all available amenities
    let availableAmenities = [];
    // Selected amenities for filtering
    let selectedAmenities = [];

    // Initialize data by fetching from API
    initializeData();

    async function initializeData() {
        try {
            // Fetch amenities first
            await fetchAmenities();

            // Then fetch rooms
            await fetchRecommendedRooms();
        } catch (error) {
            console.error('Error initializing data:', error);
            // If API calls fail, use mock data
            renderAccommodations(accommodations);
            resultsCount.textContent = `(${accommodations.length})`;
        }
    }

    // Fetch all amenities from API
    async function fetchAmenities() {
        try {
            const response = await fetch(`${API_BASE_URL}/amenity`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Include credentials if you're using cookies or session-based auth
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch amenities: ${response.status}`);
            }

            availableAmenities = await response.json();

            // Render amenities in the filter section
            renderAmenitiesFilter(availableAmenities);
        } catch (error) {
            console.error('Error fetching amenities:', error);
            throw error;
        }
    }

    // Render amenities checkboxes in the filter
    function renderAmenitiesFilter(amenities) {
        // Clear existing amenities
        amenitiesContainer.innerHTML = '';

        // Create checkbox for each amenity
        amenities.forEach(amenity => {
            const amenityItem = document.createElement('div');
            amenityItem.className = 'filter-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `amenity-${amenity.code}`;
            checkbox.value = amenity.name;

            const label = document.createElement('label');
            label.htmlFor = `amenity-${amenity.code}`;
            label.textContent = amenity.name;

            // Add change event to update selected amenities
            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    selectedAmenities.push(this.value);
                } else {
                    selectedAmenities = selectedAmenities.filter(item => item !== this.value);
                }
            });

            amenityItem.appendChild(checkbox);
            amenityItem.appendChild(label);
            amenitiesContainer.appendChild(amenityItem);
        });
    }

    // Fetch recommended rooms from API
    async function fetchRecommendedRooms() {
        try {
            const response = await fetch(`${API_BASE_URL}/rooms`);

            if (!response.ok) {
                throw new Error(`Failed to fetch rooms: ${response.status}`);
            }

            const rooms = await response.json();

            if (rooms && rooms.length > 0) {
                // Format lastUpdated field to relative time in Vietnamese
                const formattedRooms = rooms.map(room => {
                    if (room.trustScore && room.trustScore.details && room.trustScore.details.lastUpdated) {
                        room.trustScore.details.lastUpdated = formatRelativeTimeInVietnamese(new Date(room.trustScore.details.lastUpdated));
                    }
                    return room;
                });

                fetchedRooms = formattedRooms;
                renderAccommodations(formattedRooms);
                resultsCount.textContent = `(${formattedRooms.length})`;
            } else {
                // If API returns empty, use mock data
                renderAccommodations(accommodations);
                resultsCount.textContent = `(${accommodations.length})`;
                fetchedRooms = accommodations;
            }
        } catch (error) {
            console.error('Error fetching recommended rooms:', error);
            // If API call fails, use mock data
            renderAccommodations(accommodations);
            resultsCount.textContent = `(${accommodations.length})`;
            fetchedRooms = accommodations;
        }
    }

    // Format date to relative time in Vietnamese
    function formatRelativeTimeInVietnamese(date) {
        const now = new Date();
        const diffInMilliseconds = now - date;
        const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInMinutes < 60) {
            return `${diffInMinutes} phút trước`;
        } else if (diffInHours < 24) {
            return `${diffInHours} giờ trước`;
        } else {
            return `${diffInDays} ngày trước`;
        }
    }

    // Fetch a specific room by ID
    async function fetchRoomById(roomId) {
        try {
            const response = await fetch(`${API_BASE_URL}/room/${roomId}`);

            if (!response.ok) {
                throw new Error(`Failed to fetch room: ${response.status}`);
            }

            const room = await response.json();

            if (room) {
                // Format lastUpdated field
                if (room.trustScore && room.trustScore.details && room.trustScore.details.lastUpdated) {
                    room.trustScore.details.lastUpdated = formatRelativeTimeInVietnamese(new Date(room.trustScore.details.lastUpdated));
                }
                return room;
            } else {
                return null;
            }
        } catch (error) {
            console.error(`Error fetching room ${roomId}:`, error);
            return null;
        }
    }

    // Function to get room details by ID
    async function getRoomDetails(roomId) {
        // First try to get room from API
        const room = await fetchRoomById(roomId);

        if (room) {
            return room;
        }

        // If API returns empty or fails, try to find in fetchedRooms
        const fetchedRoom = fetchedRooms.find(r => r.id == roomId);
        if (fetchedRoom) {
            return fetchedRoom;
        }

        // If not found in fetchedRooms, try to find in original accommodations
        const originalRoom = accommodations.find(r => r.id == roomId);
        if (originalRoom) {
            return originalRoom;
        }

        // If not found anywhere, return null
        return null;
    }

    // View Toggle Event Listeners
    gridViewBtn.addEventListener('click', function () {
        if (!accommodationsList.classList.contains('grid-view')) {
            accommodationsList.classList.remove('list-view');
            accommodationsList.classList.add('grid-view');
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');

            // Save preference to localStorage
            localStorage.setItem('viewPreference', 'grid');
        }
    });

    listViewBtn.addEventListener('click', function () {
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
    distanceInput.addEventListener('input', function () {
        distanceValue.textContent = `${this.value} km`;
    });

    minTrustScoreInput.addEventListener('input', function () {
        trustScoreValue.textContent = this.value;
    });

    // Filter buttons event listeners
    applyFiltersBtn.addEventListener('click', applyFilters);
    resetFiltersBtn.addEventListener('click', resetFilters);

    // Modal close event
    closeModal.addEventListener('click', function () {
        accommodationModal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function (event) {
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
                <img src="${accommodation.images[0]}" alt="${accommodation.title}" onerror="this.onerror=null; this.src=this.src.replace('postimg.cc', 'i.postimg.cc') + '.jpg';">
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
        item.addEventListener('click', function () {
            openAccommodationModal(accommodation);
        });

        return item;
    }

    // Open accommodation modal
    async function openAccommodationModal(accommodation) {
        // Get the latest room details from API or local data
        const roomDetails = await getRoomDetails(accommodation.id);

        if (!roomDetails) {
            alert('Phòng không tìm thấy!');
            return;
        }

        // Populate modal content with the most up-to-date room data
        modalContent.innerHTML = createDetailedView(roomDetails);

        // Display modal
        accommodationModal.style.display = 'block';

        // Add event listeners for image gallery
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.querySelector('.main-image');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function () {
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
                    <img src="${accommodation.images[0]}" alt="${accommodation.title}" class="main-image" onerror="this.onerror=null; this.src=this.src.replace('postimg.cc', 'i.postimg.cc') + '.jpg';">
                    <div class="thumbnail-container">
                        ${accommodation.images.map((src, index) => `
                            <img src="${src}" alt="Thumbnail ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" onerror="this.onerror=null; this.src=this.src.replace('postimg.cc', 'i.postimg.cc') + '.jpg';">
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
                        <p><i class="fab fa-facebook-f"></i> <a href="${accommodation.facebook}" target="_blank">Facebook Post</a></p>
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

        // Use fetchedRooms as the source for filtering
        const roomsToFilter = fetchedRooms.length > 0 ? fetchedRooms : accommodations;

        const filteredAccommodations = roomsToFilter.filter(acc => {
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

            // Amenities filters - using the selected amenities from checkboxes
            if (selectedAmenities.length > 0) {
                // Check if the room has all the selected amenities
                for (const amenity of selectedAmenities) {
                    if (!acc.amenities.includes(amenity)) {
                        return false;
                    }
                }
            }

            return true;
        });

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

        // Clear amenity checkboxes
        const amenityCheckboxes = document.querySelectorAll('#amenities-container input[type="checkbox"]');
        amenityCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        selectedAmenities = [];

        // Reset to all rooms from API or mock data
        const roomsToRender = fetchedRooms.length > 0 ? fetchedRooms : accommodations;
        renderAccommodations(roomsToRender);
        resultsCount.textContent = `(${roomsToRender.length})`;
    }
});