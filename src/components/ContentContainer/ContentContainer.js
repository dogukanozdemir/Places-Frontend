import React, { useState } from 'react';
import "./ContentContainer.css";
import { PlaceListContainer } from "../PlaceListContainer/PlaceListContainer";
import { MapContainer } from "../MapContainer/MapContainer";

export function ContentContainer() {
  return (
    <div className="content-container">
      <PlaceListContainer />
      <MapContainer />
    </div>
  );
}
