import React, { useState } from 'react';
import "./ContentContainer.css";
import { PlaceListContainer } from "../PlaceListContainer/PlaceListContainer";
import { MapContainer } from "../MapContainer/MapContainer";

export function ContentContainer({ placesData }) {
  const [selectedCardInfo, setSelectedCardInfo] = useState(null);


  const handleCardClick = (place) => {
    setSelectedCardInfo(place);
  };
  return (
    <div className="content-container">
      <PlaceListContainer placesData={placesData} onCardClick={handleCardClick} />
      <MapContainer selectedLocation={selectedCardInfo} />
    </div>
  );
}
