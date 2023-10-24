import "./ContentContainer.css";
import { PlaceListContainer } from "../PlaceListContainer/PlaceListContainer";
import { MapContainer } from "../MapContainer/MapContainer";
export function ContentContainer({placesData}) {
  return (
    <div className="content-container">
      <PlaceListContainer placesData={placesData} />
      <MapContainer />
    </div>
  );
}
