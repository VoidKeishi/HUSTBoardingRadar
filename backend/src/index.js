require('dotenv').config();
const cors = require('cors');
const express = require('express');

const corsConfig = require('./configs/cors');
const { PORT } = require('./configs');

const app = express();
app.use(cors(corsConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

require('./models');
