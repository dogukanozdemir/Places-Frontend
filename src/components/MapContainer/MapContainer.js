import React, { useContext} from "react";
import "./MapContainer.css";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { PlacesContext } from "../../store/PlacesContext";

const containerStyle = {
  width: "1000px",
  height: "600px",
};

export function MapContainer() {

  const [state] = useContext(PlacesContext);
  const center = state.locate
    ? { lat: state.locate.latitude, lng: state.locate.longitude }
    : { lat: 41, lng: 29 };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  return isLoaded ? (
    <div className="map-container">
      <h2>Location</h2>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        {center && <Marker position={center} />}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}
