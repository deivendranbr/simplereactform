import React from 'react';
import './input.css';

const Inputbox = (props) => {
    return (
        <div className="input-item">
            <label>{props.label}</label>
            <input className="input" type={props.type} onChange={props.onChange} />
        </div>
    );
}

export default Inputbox;
