const { CLIENT_URLS } = require('./index');

const corsConfig = {
  origin: function (origin, callback) {
    if (CLIENT_URLS.includes(origin) !== -1 || !origin) {
      callback(null, true)
    }else
    callback(new Error("Not allowed by CORS"))
  },
  optionsSuccessStatus: 204,
  credentials: true,
}

module.exports = corsConfig;
