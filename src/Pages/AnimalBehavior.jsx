import React from 'react'
import { useParams } from "react-router-dom";
import { Animaldetails } from './Data';

export default function AnimalBehavior() {
    const routeParams = useParams();
    let animal = Animaldetails.find(x => x.name === routeParams.name)
    return (
        <div className='p-4 text-center'>
            <h1>Animal Behavior {routeParams.name}</h1>
            {animal &&
                <div>
                    <img src={animal.image} alt="" />
                    <p className='p-4'>{animal.behavior}</p>
                </div>}
        </div>
    )
}
