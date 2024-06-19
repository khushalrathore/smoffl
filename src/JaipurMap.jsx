// src/JaipurMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const JaipurMap = () => {
  const position = [26.9124, 75.7873]; // Latitude and Longitude of Jaipur

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Jaipur, Rajasthan
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default JaipurMap;
