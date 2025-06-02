const axios = require('axios');


(async () => {
  const roomImages = [
    'https://i.postimg.cc/5b1mtPjn/490674539-1479879846730195-416531478379605353-n.jpg?dl=1',
    'https://i.postimg.cc/cssHgnfq/491218329-1479879863396860-2907599218046258333-n.jpg?dl=1',
  ];

  for (let i = 0; i < roomImages.length; i++) {
    try {
      let currentScore = 0;
      const response = await axios.get(roomImages[i], { responseType: 'arraybuffer' });
      const sizeInKBytes = response.headers['content-length'] / 1024 || 0;
      if (sizeInKBytes >= 5 && sizeInKBytes <= 15) currentScore = 0.5;
      if (sizeInKBytes > 15) currentScore = 1;
  
    } catch (error) {
      console.log('🚀 ~ error:', error)
      continue;
    }
  }
})()
