const mongoose = require('mongoose');
const { MONGO_URI, DB_NAME } = require('../configs');

mongoose.set('strictQuery', true);

mongoose.connect(MONGO_URI, {
  dbName: DB_NAME
});

mongoose.connection.on('error', (err) => {
  console.log(`Connect error to MongoDB: ${MONGO_URI}'`);
  console.log(`Error stack: ${err}`);
  process.exit(1);
});

mongoose.connection.once('open', () => {
  console.log(`Connected to MongoDB: ${MONGO_URI}`);
});
