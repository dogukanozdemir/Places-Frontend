import React, { useContext } from "react";
import { getPlacesInRadius } from "../../store/Api";
import "./PlaceListContainer.css";
import { PlaceCard } from "../PlaceCard/PlaceCard";
import { PlacesContext } from "../../store/PlacesContext";
import {
  useQuery,
} from "react-query";

export function PlaceListContainer() {

  const[state, dispatch] = useContext(PlacesContext)

  const { isLoading, isError, data, error } = useQuery(
    ["places", state.search],
    () => getPlacesInRadius(state.search),
    {
      enabled: !!state.search,
      initialData: [],
    }
  );

  return (
    <div className="list-container">
      <h2>Places</h2>
      <div className="card-list">
        {data.length === 0 ? (
          <h2>No Results</h2>
        ) : (
          data.map((place, index) => (
            <PlaceCard
              key={index}
              place={place}
            />
          ))
        )}
      </div>
    </div>
  );
}
