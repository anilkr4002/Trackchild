const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  accuracy: Number,
  altitude: Number,
  speed: Number,
  timestamp: { type: Date, default: Date.now },
  locationType: { type: String, enum: ['GPS', 'WiFi'], required: true },
  wifiAccessPoint: String,
  indoorLocation: Boolean,
});

module.exports = mongoose.model('Location', LocationSchema);
