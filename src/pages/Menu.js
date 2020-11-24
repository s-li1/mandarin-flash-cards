import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
    
    return (
        <div className="container">
            <div className="hsk-level">
                <Link to="/hsk-level/1" className="hsk1">
                    <button>HSK 1</button>
                </Link>
                <Link to="/hsk-level/2" className="hsk2">
                    <button>HSK 2</button>
                </Link>
                <Link to="/flashcard" className="hsk3">
                    <button>HSK 3</button>
                </Link>
                <div class="break"></div>
                <Link to="/flashcard" className="hsk4">
                    <button>HSK 4</button>
                </Link>
                <Link to="/flashcard" className="hsk5">
                    <button>HSK 5</button>
                </Link>
                <Link to="/flashcard" className="hsk6">
                    <button>HSK 6</button>
                </Link>
            </div>
        </div>
    )
}
