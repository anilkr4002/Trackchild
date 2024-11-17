const Location = require('../models/Location');
const { SOCKET_EVENTS } = require('../config/constants');

exports.updateLocation = async (req, res) => {
  try {
    const { latitude, longitude, accuracy, wifiAccessPoint } = req.body;

    const location = new Location({
      userId: req.user._id,
      latitude,
      longitude,
      accuracy,
      locationType: wifiAccessPoint ? 'WiFi' : 'GPS',
      wifiAccessPoint,
      indoorLocation: !!wifiAccessPoint,
    });

    await location.save();

    req.app.get('io').emit(`${SOCKET_EVENTS.LOCATION_UPDATE}-${req.user._id}`, location);
    res.json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
