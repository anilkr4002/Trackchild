import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ locations, center, zoom = 13 }) => (
  <MapContainer center={center || [51.505, -0.09]} zoom={zoom} className="h-full w-full">
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />
    {locations.map((location, index) => (
      <Marker
        key={index}
        position={[location.latitude, location.longitude]}
      >
        <Popup>
          {location.indoorLocation ? `Indoor: ${location.wifiAccessPoint}` : 'Outdoor Location'}
          <br />
          Last updated: {new Date(location.timestamp).toLocaleString()}
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default Map;
