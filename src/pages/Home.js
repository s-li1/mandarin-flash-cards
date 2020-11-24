import React from 'react';
import { Link } from 'react-router-dom';
import StartButton from '../Button/Button';
import './Home.css';
import sitting from '../images/sitting.png';

export default function Home() {
    
    return (
        <div className="container">
            <div className="text">
                <h1>Mandarin Flash Cards</h1>
                <p>Learn Chinese Mandarin</p>
            </div>
            <img src={sitting} alt="Logo" className="img" />
            <Link to="/hsk-level/1">
                <StartButton className="startBtn" label="Begin"/>
            </Link>
        </div>
    )
}
