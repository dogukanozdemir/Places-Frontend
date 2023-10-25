import { useReducer,createContext } from "react";

const initialState = {
  search: undefined,
  locate: undefined,
};

function placesReducer(state, action) {
  switch (action.type) {
    case "search":
      return {
        ...state,
        search: action.payload,
      };

    case "locate":
      return {
        ...state,
        locate: action.payload,
      };
    default:
      return state;
  }
}

export function usePlacesReducer() {
  return useReducer(placesReducer, initialState)
}

export const PlacesContext = createContext(null)
