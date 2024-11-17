import React from 'react';

const AlertList = ({ alerts }) => (
  <div className="space-y-2">
    {alerts.map((alert, index) => (
      <div
        key={index}
        className={`p-4 rounded-md ${alert.read ? 'bg-gray-100' : 'bg-red-100'}`}
      >
        <p className="font-bold">{alert.message}</p>
        <small className="text-gray-600">{new Date(alert.timestamp).toLocaleString()}</small>
      </div>
    ))}
  </div>
);

export default AlertList;
