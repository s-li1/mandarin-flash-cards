import React from 'react'
import { HiOutlineArrowNarrowLeft as ArrowLeft} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './App.css';
export default function Header() {
    return (
        <div className="head">
            <Link to="/menu" className="back-btn">
                <ArrowLeft className='back-icon'/>
            </Link>
            <h1>Learning the Hanzi</h1>
        </div>
    )
}
