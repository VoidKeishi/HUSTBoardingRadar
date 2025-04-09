// Room finder application main JavaScript file

// Sample data for 20 rooms
const roomsData = [
    {
        id: 1,
        name: "Phòng trọ cao cấp gần ĐHBKHN",
        price: 3500000,
        location: "Bách Khoa, Hai Bà Trưng",
        address: "Số 15, Ngõ 20 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội",
        trustScore: 96,
        image: "images/room1.jpg",
        description: "Phòng trọ mới xây dựng, sạch sẽ, thoáng mát với đầy đủ tiện nghi hiện đại. Vị trí đắc địa chỉ cách cổng trường ĐHBKHN 5 phút đi bộ, gần chợ và tiện ích xung quanh.",
        amenities: ["Wi-Fi", "Điều hòa", "Tủ lạnh", "Bếp", "Vệ sinh riêng", "Ban công"],
        area: 25,
        phone: "0987654321",
        available: true
    },
    {
        id: 2,
        name: "Căn hộ mini full nội thất",
        price: 4200000,
        location: "Bách Khoa, Hai Bà Trưng",
        address: "Số 25, Ngõ 76 Đường Dương Quảng Hàm, Bách Khoa, Hai Bà Trưng, Hà Nội",
        trustScore: 90,
        image: "images/room2.jpg",
        description: "Căn hộ mini sang trọng với đầy đủ nội thất, không gian thoáng đãng và ánh sáng tự nhiên. Bảo vệ 24/7, an ninh đảm bảo, thích hợp cho sinh viên và người đi làm.",
        amenities: ["Wi-Fi", "Điều hòa", "Tủ lạnh", "Máy giặt", "Vệ sinh riêng", "Tủ quần áo"],
        area: 32,
        phone: "0912345678",
        available: true
    },
    {
        id: 3,
        name: "Phòng trọ sinh viên giá rẻ",
        price: 1800000,
        location: "Đống Đa",
        address: "Số 42, Ngõ 55 Trần Đại Nghĩa, Đống Đa, Hà Nội",
        trustScore: 74,
        image: "images/room3.jpg",
        description: "Phòng trọ giá rẻ phù hợp với sinh viên, không gian nhỏ gọn nhưng đầy đủ tiện nghi cơ bản. Khu vực an ninh tốt, gần nhiều trường đại học và tiện ích.",
        amenities: ["Wi-Fi", "Quạt", "Vệ sinh chung", "Để xe"],
        area: 16,
        phone: "0967891234",
        available: true
    },
    {
        id: 4,
        name: "CCMN 1 phòng ngủ riêng biệt",
        price: 4800000,
        location: "Hai Bà Trưng",
        address: "Số 7, Ngõ 12 Lê Thanh Nghị, Hai Bà Trưng, Hà Nội",
        trustScore: 92,
        image: "images/room4.jpg",
        description: "Căn hộ mini 1 phòng ngủ riêng biệt, thiết kế hiện đại, đầy đủ ánh sáng tự nhiên. Full nội thất từ tủ lạnh, máy giặt, điều hòa đến bếp từ. Phù hợp ở 1-2 người.",
        amenities: ["Wi-Fi", "Điều hòa", "Tủ lạnh", "Máy giặt", "Vệ sinh riêng", "Bếp", "Ban công"],
        area: 38,
        phone: "0943215678",
        available: true
    },
    {
        id: 5,
        name: "Phòng trọ sinh viên gần Bách Khoa",
        price: 2200000,
        location: "Bách Khoa, Hai Bà Trưng",
        address: "Số 17, Ngõ 190 Lê Thanh Nghị, Hai Bà Trưng, Hà Nội",
        trustScore: 80,
        image: "images/room5.jpg",
        description: "Phòng trọ kiểu KTX mini, sinh hoạt chung văn minh, sạch sẽ. Có người quản lý, dọn dẹp hàng ngày. Gần ĐHBKHN, ĐH Kinh tế QD và nhiều trường đại học khác.",
        amenities: ["Wi-Fi", "Điều hòa", "Vệ sinh chung", "Để xe"],
        area: 20,
        phone: "0934567890",
        available: true
    },
    {
        id: 6,
        name: "Studio apartment gần Times City",
        price: 5500000,
        location: "Hai Bà Trưng",
        address: "Số 23, Ngõ 168 Nguyễn Lương Bằng, Hai Bà Trưng, Hà Nội",
        trustScore: 98,
        image: "images/room6.jpg",
        description: "Căn hộ studio cao cấp cách Times City 5 phút đi bộ. Thiết kế hiện đại, nội thất sang trọng, bảo vệ 24/7. Phù hợp với người đi làm hoặc sinh viên năm cuối.",
        amenities: ["Wi-Fi", "Điều hòa", "Tủ lạnh", "Máy giặt", "Vệ sinh riêng", "Bếp", "Tủ quần áo", "Smart TV"],
        area: 45,
        phone: "0923456789",
        available: true
    },
    {
        id: 7,
        name: "Phòng trọ gần bến xe Giáp Bát",
        price: 2000000,
        location: "Hoàng Mai",
        address: "Số 15, Ngõ 237 Giáp Bát, Hoàng Mai, Hà Nội",
        trustScore: 70,
        image: "images/room1.jpg",
        description: "Phòng trọ gần bến xe Giáp Bát, thuận tiện đi lại. Phòng rộng rãi, thoáng mát, có cửa sổ và ban công nhỏ. Khu vực an ninh, yên tĩnh phù hợp cho sinh viên.",
        amenities: ["Wi-Fi", "Quạt", "Vệ sinh chung", "Để xe"],
        area: 18,
        phone: "0956781234",
        available: true
    },
    {
        id: 8,
        name: "Phòng trọ khép kín đường Giải Phóng",
        price: 2600000,
        location: "Thanh Xuân",
        address: "Số 56, Ngõ 245 Giải Phóng, Thanh Xuân, Hà Nội",
        trustScore: 84,
        image: "images/room2.jpg",
        description: "Phòng trọ khép kín với vệ sinh riêng và khu vực nấu ăn nhỏ. Cách ĐH Bách Khoa 10 phút đi xe máy. Phù hợp cho 1-2 sinh viên hoặc người đi làm.",
        amenities: ["Wi-Fi", "Điều hòa", "Vệ sinh riêng", "Để xe"],
        area: 22,
        phone: "0912345670",
        available: true
    },
    {
        id: 9,
        name: "Căn hộ gần Đại học Bách Khoa",
        price: 6000000,
        location: "Bách Khoa, Hai Bà Trưng",
        address: "Số 8, Ngõ 3 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội",
        trustScore: 94,
        image: "images/room3.jpg",
        description: "Căn hộ 1 phòng ngủ sang trọng ngay gần cổng trường ĐH Bách Khoa. Thiết kế hiện đại với nội thất cao cấp, hệ thống an ninh 24/7 và người quản lý tận tình.",
        amenities: ["Wi-Fi", "Điều hòa", "Tủ lạnh", "Máy giặt", "Vệ sinh riêng", "Bếp", "Smart TV", "Ban công"],
        area: 50,
        phone: "0967890123",
        available: true
    },
    {
        id: 10,
        name: "Phòng trọ sinh viên Đại Cồ Việt",
        price: 2300000,
        location: "Hai Bà Trưng",
        address: "Số 12, Ngõ 62 Đại Cồ Việt, Hai Bà Trưng, Hà Nội",
        trustScore: 78,
        image: "images/room4.jpg",
        description: "Phòng trọ nằm trên đường Đại Cồ Việt, cách cổng trường ĐH Bách Khoa 7 phút đi bộ. Phòng thoáng mát, yên tĩnh, có giường, bàn học, tủ quần áo.",
        amenities: ["Wi-Fi", "Điều hòa", "Vệ sinh chung", "Để xe"],
        area: 18,
        phone: "0954321678",
        available: true
    },
    {
        id: 11,
        name: "Phòng trọ cao cấp ngõ 113 Trung Kính",
        price: 3800000,
        location: "Thanh Xuân",
        address: "Số 21, Ngõ 113 Trung Kính, Thanh Xuân, Hà Nội",
        trustScore: 86,
        image: "images/room5.jpg",
        description: "Phòng trọ cao cấp trong khu nhà mới xây, thiết kế hiện đại, đầy đủ tiện nghi. Khu vực yên tĩnh, an ninh 24/7, cách ĐHBKHN khoảng 15 phút đi xe máy.",
        amenities: ["Wi-Fi", "Điều hòa", "Tủ lạnh", "Vệ sinh riêng", "Để xe"],
        area: 28,
        phone: "0987654320",
        available: true
    },
    {
        id: 12,
        name: "Phòng trọ sinh viên giá rẻ Chùa Bộc",
        price: 1900000,
        location: "Đống Đa",
        address: "Số 45, Ngõ 84 Chùa Bộc, Đống Đa, Hà Nội",
        trustScore: 72,
        image: "images/room6.jpg",
        description: "Phòng trọ giá rẻ phù hợp với sinh viên tại khu vực Chùa Bộc. Không gian thoáng mát, cơ sở vật chất cơ bản, khu vực an ninh, gần nhiều trường đại học.",
        amenities: ["Wi-Fi", "Quạt", "Vệ sinh chung", "Để xe"],
        area: 16,
        phone: "0934567891",
        available: true
    },
    {
        id: 13,
        name: "Phòng trọ ngõ 72 Nguyễn Trãi",
        price: 2400000,
        location: "Thanh Xuân",
        address: "Số 9, Ngõ 72 Nguyễn Trãi, Thanh Xuân, Hà Nội",
        trustScore: 82,
        image: "images/room1.jpg",
        description: "Phòng trọ khép kín ngõ 72 Nguyễn Trãi, diện tích rộng rãi, có cửa sổ đón ánh sáng tự nhiên. Khu vực dân cư đông đúc, gần các trường đại học và trung tâm thương mại.",
        amenities: ["Wi-Fi", "Điều hòa", "Vệ sinh riêng", "Để xe"],
        area: 20,
        phone: "0912345679",
        available: true
    },
    {
        id: 14,
        name: "Căn hộ mini gần bệnh viện Bạch Mai",
        price: 4500000,
        location: "Hai Bà Trưng",
        address: "Số 32, Ngõ 121 Giải Phóng, Hai Bà Trưng, Hà Nội",
        trustScore: 88,
        image: "images/room2.jpg",
        description: "Căn hộ mini gần bệnh viện Bạch Mai và ĐH Bách Khoa. Căn hộ được trang bị đầy đủ nội thất, sạch sẽ, an ninh 24/7, phù hợp cho cặp đôi hoặc gia đình nhỏ.",
        amenities: ["Wi-Fi", "Điều hòa", "Tủ lạnh", "Máy giặt", "Vệ sinh riêng", "Bếp", "Ban công"],
        area: 35,
        phone: "0976543210",
        available: true
    },
    {
        id: 15,
        name: "Phòng trọ Tạ Quang Bửu",
        price: 2100000,
        location: "Bách Khoa, Hai Bà Trưng",
        address: "Số 27, Ngõ 12 Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội",
        trustScore: 76,
        image: "images/room3.jpg",
        description: "Phòng trọ gần ĐHBKHN, không gian thoáng mát, có ban công nhỏ. Khu vực yên tĩnh, an ninh, phù hợp cho sinh viên muốn tập trung học tập.",
        amenities: ["Wi-Fi", "Điều hòa", "Vệ sinh chung", "Để xe"],
        area: 18,
        phone: "0923456781",
        available: true
    },
    {
        id: 16,
        name: "Căn hộ 1 phòng ngủ Minh Khai",
        price: 5200000,
        location: "Hai Bà Trưng",
        address: "Số 18, Ngõ 235 Minh Khai, Hai Bà Trưng, Hà Nội",
        trustScore: 90,
        image: "images/room4.jpg",
        description: "Căn hộ 1 phòng ngủ tại Minh Khai, thiết kế hiện đại với đầy đủ nội thất cao cấp. Khu vực an ninh, yên tĩnh, gần các tiện ích và trường đại học.",
        amenities: ["Wi-Fi", "Điều hòa", "Tủ lạnh", "Máy giặt", "Vệ sinh riêng", "Bếp", "Tủ quần áo"],
        area: 42,
        phone: "0945678912",
        available: true
    },
    {
        id: 17,
        name: "Phòng trọ sinh viên Giáp Bát",
        price: 1700000,
        location: "Hoàng Mai",
        address: "Số 5, Ngõ 189 Giáp Bát, Hoàng Mai, Hà Nội",
        trustScore: 70,
        image: "images/room5.jpg",
        description: "Phòng trọ sinh viên khu vực Giáp Bát, không gian nhỏ gọn nhưng đầy đủ tiện nghi cơ bản. Gần bến xe, thuận tiện di chuyển đến các trường đại học.",
        amenities: ["Wi-Fi", "Quạt", "Vệ sinh chung", "Để xe"],
        area: 15,
        phone: "0967891235",
        available: true
    },
    {
        id: 18,
        name: "Phòng trọ cao cấp Kim Ngưu",
        price: 3200000,
        location: "Hai Bà Trưng",
        address: "Số 45, Ngõ 168 Kim Ngưu, Hai Bà Trưng, Hà Nội",
        trustScore: 84,
        image: "images/room6.jpg",
        description: "Phòng trọ cao cấp tại Kim Ngưu, mới xây dựng, đầy đủ nội thất, không gian rộng rãi. Cách ĐH Bách Khoa khoảng 10 phút đi xe máy, gần chợ và siêu thị.",
        amenities: ["Wi-Fi", "Điều hòa", "Vệ sinh riêng", "Tủ quần áo", "Để xe"],
        area: 25,
        phone: "0934567892",
        available: true
    },
    {
        id: 19,
        name: "Phòng trọ Định Công",
        price: 2300000,
        location: "Hoàng Mai",
        address: "Số 8, Ngõ 72 Định Công, Hoàng Mai, Hà Nội",
        trustScore: 78,
        image: "images/room1.jpg",
        description: "Phòng trọ khu vực Định Công, không gian thoáng mát có cửa sổ. Khu vực yên tĩnh, an ninh tốt, gần các trường đại học và trung tâm thương mại.",
        amenities: ["Wi-Fi", "Điều hòa", "Vệ sinh chung", "Để xe"],
        area: 20,
        phone: "0956781235",
        available: true
    },
    {
        id: 20,
        name: "Studio apartment cao cấp Lê Thanh Nghị",
        price: 5800000,
        location: "Bách Khoa, Hai Bà Trưng",
        address: "Số 15, Ngõ 38 Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng, Hà Nội",
        trustScore: 96,
        image: "images/room2.jpg",
        description: "Căn hộ studio cao cấp ngay gần ĐHBKHN, thiết kế sang trọng với đầy đủ nội thất hiện đại. Bảo vệ 24/7, dịch vụ dọn phòng, phù hợp với sinh viên năm cuối hoặc người đi làm.",
        amenities: ["Wi-Fi", "Điều hòa", "Tủ lạnh", "Máy giặt", "Vệ sinh riêng", "Bếp", "Smart TV", "Ban công"],
        area: 48,
        phone: "0987654322",
        available: true
    }
];

// DOM Elements
const roomContainer = document.getElementById('room-container');
const searchInput = document.getElementById('search-input');
const priceMinInput = document.getElementById('price-min');
const priceMaxInput = document.getElementById('price-max');
const locationFilter = document.getElementById('location-filter');
const wifiFilter = document.getElementById('wifi-filter');
const acFilter = document.getElementById('ac-filter');
const balconyFilter = document.getElementById('balcony-filter');
const privateWcFilter = document.getElementById('private-wc-filter');
const kitchenFilter = document.getElementById('kitchen-filter');
const ratingFilter = document.getElementById('rating-filter');
const applyFilterButton = document.getElementById('apply-filter');
const viewToggles = document.querySelectorAll('.view-toggle');
const roomDetailModal = new bootstrap.Modal(document.getElementById('roomDetailModal'));
const contactConfirmModal = new bootstrap.Modal(document.getElementById('contactConfirmModal'));
const contactButton = document.getElementById('contact-button');
const interestedButton = document.getElementById('interested-button');

// Current view state (grid or list)
let currentView = 'grid';
// Current selected room ID for modal
let currentRoomId = null;

// Initialize the application
function init() {
    // Display all rooms initially
    displayRooms(roomsData);
    
    // Setup event listeners
    setupEventListeners();
}

// Setup all event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Apply filter button
    applyFilterButton.addEventListener('click', applyFilters);
    
    // View toggle buttons
    viewToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const view = toggle.getAttribute('data-view');
            changeView(view);
            
            // Update active state on buttons
            viewToggles.forEach(btn => btn.classList.remove('active'));
            toggle.classList.add('active');
        });
    });
    
    // Contact and interested buttons in modal
    contactButton.addEventListener('click', handleContact);
    interestedButton.addEventListener('click', handleInterested);
}

// Handle search input
function handleSearch() {
    applyFilters();
}

// Apply all filters
function applyFilters() {
    const searchText = searchInput.value.toLowerCase();
    const minPrice = priceMinInput.value ? parseInt(priceMinInput.value) : 0;
    const maxPrice = priceMaxInput.value ? parseInt(priceMaxInput.value) : Infinity;
    const selectedLocation = locationFilter.value;
    const minRating = parseFloat(ratingFilter.value);
    
    // Convert minimum rating to minimum trust score
    const minTrustScore = minRating * 20; // Convert 0-5 scale to 0-100
    
    // Filter rooms based on criteria
    const filteredRooms = roomsData.filter(room => {
        // Filter by search text
        const matchesSearch = room.name.toLowerCase().includes(searchText) || 
                            room.location.toLowerCase().includes(searchText) ||
                            room.address.toLowerCase().includes(searchText);
        
        // Filter by price range
        const matchesPrice = room.price >= minPrice && room.price <= maxPrice;
        
        // Filter by location
        const matchesLocation = selectedLocation === '' || room.location.includes(selectedLocation);
        
        // Filter by amenities
        const hasWifi = !wifiFilter.checked || room.amenities.includes('Wi-Fi');
        const hasAc = !acFilter.checked || room.amenities.includes('Điều hòa');
        const hasBalcony = !balconyFilter.checked || room.amenities.includes('Ban công');
        const hasPrivateWc = !privateWcFilter.checked || room.amenities.includes('Vệ sinh riêng');
        const hasKitchen = !kitchenFilter.checked || room.amenities.includes('Bếp');
        
        // Filter by trust score instead of rating
        const matchesTrust = room.trustScore >= minTrustScore;
        
        return matchesSearch && matchesPrice && matchesLocation && 
               hasWifi && hasAc && hasBalcony && hasPrivateWc && 
               hasKitchen && matchesTrust;
    });
    
    // Display filtered rooms
    displayRooms(filteredRooms);
}

// Display rooms in the container
function displayRooms(rooms) {
    // Clear the container
    roomContainer.innerHTML = '';
    
    // Check if any rooms match the filter
    if (rooms.length === 0) {
        roomContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="alert alert-info">
                    <h4>Không tìm thấy phòng trọ</h4>
                    <p>Không có phòng trọ nào phù hợp với tiêu chí tìm kiếm của bạn.</p>
                    <p>Vui lòng thử lại với các tiêu chí khác.</p>
                </div>
            </div>
        `;
        return;
    }
    
    // Add list-view class to container if needed
    if (currentView === 'list') {
        roomContainer.classList.add('list-view');
    } else {
        roomContainer.classList.remove('list-view');
    }
    
    // Create HTML for each room
    rooms.forEach(room => {
        // Create column with appropriate width based on view
        const colDiv = document.createElement('div');
        colDiv.className = currentView === 'grid' ? 'col-md-6 col-lg-4 mb-4' : 'col-12 mb-3';
        
        // Format price
        const formattedPrice = formatPrice(room.price);
        
        // Determine trust score class based on the score
        const trustScoreClass = getTrustScoreClass(room.trustScore);
        
        // Create room card HTML
        colDiv.innerHTML = `
            <div class="room-card" data-id="${room.id}">
                <div class="room-img-container">
                    <img src="${room.image}" alt="${room.name}">
                    <div class="trust-score ${trustScoreClass}">${room.trustScore}</div>
                    <div class="room-price">${formattedPrice} VNĐ/tháng</div>
                </div>
                <div class="room-info">
                    <h5 class="room-name">${room.name}</h5>
                    <p class="room-location">
                        <i class="fas fa-map-marker-alt"></i> ${room.location}
                    </p>
                    <div class="room-details">
                        <div class="room-amenities">
                            ${room.amenities.includes('Wi-Fi') ? '<i class="fas fa-wifi" title="Wi-Fi"></i>' : ''}
                            ${room.amenities.includes('Điều hòa') ? '<i class="fas fa-snowflake" title="Điều hòa"></i>' : ''}
                            ${room.amenities.includes('Vệ sinh riêng') ? '<i class="fas fa-toilet" title="Vệ sinh riêng"></i>' : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add click event to show room details
        const roomCard = colDiv.querySelector('.room-card');
        roomCard.addEventListener('click', () => showRoomDetails(room.id));
        
        // Append to container
        roomContainer.appendChild(colDiv);
    });
}

// Show room details in modal
function showRoomDetails(roomId) {
    const room = roomsData.find(room => room.id === roomId);
    if (!room) return;
    
    // Store current room ID
    currentRoomId = roomId;
    
    // Get modal elements
    const modalTitle = document.getElementById('roomDetailModalLabel');
    const modalContent = document.getElementById('roomDetailContent');
    
    // Set modal title
    modalTitle.textContent = room.name;
    
    // Format price
    const formattedPrice = formatPrice(room.price);
    
    // Determine trust score class based on the score
    const trustScoreClass = getTrustScoreClass(room.trustScore);
    
    // Generate amenities badges
    const amenitiesBadges = room.amenities.map(amenity => {
        let icon;
        switch (amenity) {
            case 'Wi-Fi': icon = 'fas fa-wifi'; break;
            case 'Điều hòa': icon = 'fas fa-snowflake'; break;
            case 'Ban công': icon = 'fas fa-tree'; break;
            case 'Vệ sinh riêng': icon = 'fas fa-toilet'; break;
            case 'Vệ sinh chung': icon = 'fas fa-restroom'; break;
            case 'Tủ lạnh': icon = 'fas fa-temperature-low'; break;
            case 'Máy giặt': icon = 'fas fa-tshirt'; break;
            case 'Bếp': icon = 'fas fa-utensils'; break;
            case 'Tủ quần áo': icon = 'fas fa-tshirt'; break;
            case 'Smart TV': icon = 'fas fa-tv'; break;
            case 'Quạt': icon = 'fas fa-fan'; break;
            case 'Để xe': icon = 'fas fa-motorcycle'; break;
            default: icon = 'fas fa-check';
        }
        return `<span class="amenity-badge"><i class="${icon}"></i> ${amenity}</span>`;
    }).join('');
    
    // Set modal content
    modalContent.innerHTML = `
        <div class="position-relative">
            <img src="${room.image}" alt="${room.name}" class="room-detail-img">
            <div class="trust-score trust-score-large ${trustScoreClass}" style="position: absolute; top: 15px; right: 15px;">
                ${room.trustScore}
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-md-6">
                <h5>Chi tiết phòng</h5>
                <p><i class="fas fa-map-marker-alt"></i> <strong>Địa chỉ:</strong> ${room.address}</p>
                <p><i class="fas fa-money-bill-wave"></i> <strong>Giá thuê:</strong> ${formattedPrice} VNĐ/tháng</p>
                <p><i class="fas fa-expand-arrows-alt"></i> <strong>Diện tích:</strong> ${room.area} m²</p>
                <p><i class="fas fa-phone"></i> <strong>Liên hệ:</strong> ${room.phone}</p>
                <p>
                    <i class="fas fa-shield-alt"></i> <strong>Độ tin cậy:</strong> 
                    <span>${room.trustScore}/100</span>
                </p>
            </div>
            <div class="col-md-6">
                <h5>Tiện ích</h5>
                <div>${amenitiesBadges}</div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h5>Mô tả</h5>
                <p>${room.description}</p>
            </div>
        </div>
    `;
    
    // Show modal
    roomDetailModal.show();
}

// Function to determine trust score class based on the score value
function getTrustScoreClass(score) {
    if (score >= 85) return 'trust-score-high';
    if (score >= 70) return 'trust-score-medium';
    return 'trust-score-low';
}

// Handle contact button click
function handleContact() {
    const room = roomsData.find(room => room.id === currentRoomId);
    if (!room) return;
    
    // Hide room detail modal and show confirmation
    roomDetailModal.hide();
    setTimeout(() => {
        contactConfirmModal.show();
    }, 500);
}

// Handle interested button click
function handleInterested() {
    const room = roomsData.find(room => room.id === currentRoomId);
    if (!room) return;
    
    // Hide room detail modal and show confirmation
    roomDetailModal.hide();
    setTimeout(() => {
        contactConfirmModal.show();
    }, 500);
}

// Change view between grid and list
function changeView(view) {
    currentView = view;
    const currentRooms = getCurrentlyDisplayedRooms();
    displayRooms(currentRooms);
}

// Get currently displayed rooms based on filters
function getCurrentlyDisplayedRooms() {
    const searchText = searchInput.value.toLowerCase();
    const minPrice = priceMinInput.value ? parseInt(priceMinInput.value) : 0;
    const maxPrice = priceMaxInput.value ? parseInt(priceMaxInput.value) : Infinity;
    const selectedLocation = locationFilter.value;
    const minRating = parseFloat(ratingFilter.value);
    const minTrustScore = minRating * 20; // Convert 0-5 rating to 0-100 trust score
    
    return roomsData.filter(room => {
        const matchesSearch = room.name.toLowerCase().includes(searchText) || 
                          room.location.toLowerCase().includes(searchText) ||
                          room.address.toLowerCase().includes(searchText);
        
        const matchesPrice = room.price >= minPrice && room.price <= maxPrice;
        const matchesLocation = selectedLocation === '' || room.location.includes(selectedLocation);
        
        const hasWifi = !wifiFilter.checked || room.amenities.includes('Wi-Fi');
        const hasAc = !acFilter.checked || room.amenities.includes('Điều hòa');
        const hasBalcony = !balconyFilter.checked || room.amenities.includes('Ban công');
        const hasPrivateWc = !privateWcFilter.checked || room.amenities.includes('Vệ sinh riêng');
        const hasKitchen = !kitchenFilter.checked || room.amenities.includes('Bếp');
        
        const matchesTrust = room.trustScore >= minTrustScore;
        
        return matchesSearch && matchesPrice && matchesLocation && 
               hasWifi && hasAc && hasBalcony && hasPrivateWc && 
               hasKitchen && matchesTrust;
    });
}

// Utility functions

// Format price with commas
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Generate HTML for rating stars (no longer used, keeping for reference)
function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    let starsHTML = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Add half star if needed
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Debounce function for search input
function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);