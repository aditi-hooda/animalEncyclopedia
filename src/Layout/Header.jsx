import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import { images } from '../assets/images';

export default function Header() {
    return (
        <div class="navbar">
            <div className='text-start'>
                <Link to="/" className='Logo'><img src={images.logo} />Jaguar</Link>
                {/* <Link to="About">About</Link> */}
            </div>
            <div className="text-end">
                <Link to="About">About</Link>
                <Link to="Diet">Diet</Link>
                <Link to="Mating">Mating</Link>
                <Link to="Lifestyle">Lifestyle</Link>
                <Link to="FunFacts">Fun Facts</Link>
                <Link to="ColorPages">Coloring Sheets</Link>
            </div>
        </div>
    )
}
