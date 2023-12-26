import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';


const Map = () => {
  const position = [51.505, -0.09]
  return (
    <div className="leafletContainer">
      <MapContainer
        center={[43.38621, -79.83713]}
        zoom="13"
        scrollWheelZoom={false}
        style={{ height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      </MapContainer>
    </div>
  )
}

export default Map