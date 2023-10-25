import React from 'react';
import "./PlaceListContainer.css";
import { PlaceCard } from "../PlaceCard/PlaceCard";

export function PlaceListContainer({ placesData, onCardClick }) {

  return (
    <div className="list-container">
      <h2>Places</h2>
      <div className="card-list">
        {placesData.length === 0 ? (
          <h2>No Results</h2>
        ) : (
          placesData.map((place, index) => (
            <PlaceCard
              key={index}
              name={place.name}
              rating={place.rating}
              type={place.type}
              onClick={() => onCardClick(place)}
            />
          ))
        )}
      </div>
    </div>
  );
}