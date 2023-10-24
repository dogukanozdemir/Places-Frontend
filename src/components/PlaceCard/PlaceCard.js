import './PlaceCard.css';

export function PlaceCard({ name, rating, type }) {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="card-title"><b>{name}</b></h3>
                <p className="card-rating"><b>Rating:</b> {rating}</p>
                <p className="card-type"><b>Type:</b> {type}</p>
            </div>
        </div>
    );
}

