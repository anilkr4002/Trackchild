module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'jwt_secret_key',
    JWT_EXPIRE: process.env.JWT_EXPIRE || '24h',
    SOCKET_EVENTS: {
      LOCATION_UPDATE: 'location-update',
      ALERT: 'alert',
      CONNECT: 'connection',
      DISCONNECT: 'disconnect',
    },
  };
  