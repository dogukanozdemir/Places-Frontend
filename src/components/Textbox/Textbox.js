import './Textbox.css'


export function Textbox({header}) {
    return (
        <div className='text-box'>
            <label>{header}</label>
            <input type='text' className='text-input'></input>
        </div>
    );
}