import { useContext } from 'react';
import './PlaceCard.css';
import { PlacesContext } from '../../store/PlacesContext';

export function PlaceCard({ place }) {

    const[state,dispatch] = useContext(PlacesContext)

    const locateCard = () => {
        dispatch({
            type: 'locate',
            payload: place
        })
    } 

    return (
        <div className="card" onClick={locateCard}>
            <div className="card-content">
                <h3 className="card-title"><b>{place.name}</b></h3>
                <p className="card-rating"><b>Rating:</b> {place.rating}</p>
                <p className="card-type"><b>Type:</b> {place.type}</p>
            </div>
        </div>
    );
}

