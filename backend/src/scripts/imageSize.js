const axios = require('axios');


(async () => {
  const roomImages = [
    'https://i.postimg.cc/sxNWykHh/490899179-3176031669212652-3823758644167278364-n.jpg',
    'https://i.postimg.cc/05WDpS5y/490715169-3176031675879318-3696369309830022704-n.jpg',
    'https://i.postimg.cc/8PxvYV68/490919926-3176031699212649-7224704188281478044-n.jpg'
  ];

  for (let i = 0; i < roomImages.length; i++) {
    try {
      let currentScore = 0;
      const response = await axios.get(roomImages[i], { responseType: 'arraybuffer' });
      const sizeInKBytes = response.headers['content-length'] / 1024 || 0;
      if (sizeInKBytes >= 5 && sizeInKBytes <= 15) currentScore = 0.5;
      if (sizeInKBytes > 15) currentScore = 1;
      console.log('🚀 ~ currentScore:', currentScore);
  
    } catch (error) {
      console.log('🚀 ~ error:', error)
      continue;
    }
  }
})()
