import "./MapContainer.css";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "1000px",
  height: "600px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export function MapContainer() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  return isLoaded ? (
    <div className="map-container">
      <h2>Location</h2>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <MarkerF position={center} />
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}
