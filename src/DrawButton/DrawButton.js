import React from 'react';
import './DrawButton.css';

export default function DrawButton(props) {
    function drawCard() {
        props.drawCard();
    }
    return(
        <div className="buttonContainer">
            <button className="btn" onClick={drawCard}>Draw Card</button>
        </div>
    )
}
