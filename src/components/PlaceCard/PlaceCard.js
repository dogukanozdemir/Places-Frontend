import './PlaceCard.css';


export function PlaceCard({name,rating,type,onClick}) {
    return (
        <div className='card' onClick={onClick}>
            <h2>{name}</h2>
            <div className='place-detail'>
                <h3>{rating}</h3>
                <h3>{type}</h3>
            </div>
        </div>
    );
}

