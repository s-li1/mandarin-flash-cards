import React from 'react';
import './Button.css';

export default function Button(props) {
    return(
        <div className="buttonContainer">
            <button className="btn" onClick={props.handleClick}>{props.label}</button>
        </div>
    )
}
