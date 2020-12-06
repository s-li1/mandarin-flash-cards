import React from 'react';
import '../App.css';
import './Card.css';
import Header from '../Header';

const Card = ({english, hanzi, pinyin}) => (
    <div>
        <Header/>
        <div className="card">
            <div className="front">
                <div className="english">{english}</div>
            </div>
            <div className="back">
                <div className="hanzi">{hanzi}</div>
                <div className="pinyin">{pinyin}</div>
            </div>
        </div>
    </div>
);

export default Card;