import React from 'react';
import '../App.css';
import './Card.css';
import { HiOutlineArrowNarrowLeft as ArrowLeft} from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Card = ({english, hanzi, pinyin}) => (
    <div>
        <div className="head">
            <Link to="/menu" className="back-btn">
                <ArrowLeft className='back-icon'/>
            </Link>
            <h1>Learning the Hanzi</h1>
        </div>
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