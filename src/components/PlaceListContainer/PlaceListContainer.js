import './PlaceListContainer.css';
import {PlaceCard} from '../PlaceCard/PlaceCard'

export function PlaceListContainer() {
    return (
        <div className='list-container'>
            <h2>Places</h2>
            <div className='card-list'>
                <PlaceCard name="Pure Black Coffee" rating="4.7" type="Café"/>
                <PlaceCard name="Pure Black Coffee" rating="4.7" type="Café"/>
                <PlaceCard name="Pure Black Coffee" rating="4.7" type="Café"/>
            
            </div>
        </div>
    )
}