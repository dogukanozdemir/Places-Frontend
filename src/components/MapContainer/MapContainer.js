import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import "./MapContainer.css";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "1000px",
  height: "600px",
};

export function MapContainer({ selectedLocation }) {
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });

  useEffect(() => {
    if (selectedLocation) {
      setCenter({ lat: selectedLocation.latitude, lng: selectedLocation.longitude });
    }
  }, [selectedLocation]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  return isLoaded ? (
    <div className="map-container">
      <h2>Location</h2>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {center && <Marker position={center} />}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}
