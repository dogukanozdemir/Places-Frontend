import './InputContainer.css'
import {Button} from '../Button/Button'
import {Textbox} from '../Textbox/Textbox'

export function InputContainer() {
    return (
        <div className='input-container'>
            <Textbox header="Latitude:"/>
            <Textbox header="Longitude:"/>
            <Textbox header="Radius"/>
            <Button className="input-container-button" text="Search"/>
        </div>
    );
}