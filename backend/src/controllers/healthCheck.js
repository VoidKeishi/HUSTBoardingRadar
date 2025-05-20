const healthCheckServer = async (req, res, next) => {
  res.json({ 'health': 'OK' });
}

module.exports = {
  healthCheckServer,
};
