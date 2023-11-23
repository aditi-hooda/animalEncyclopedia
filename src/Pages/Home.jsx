import React from 'react'
import { images } from '../assets/images'
import { Animaldetails } from './Data'
import { Link } from "react-router-dom";
import './Home.css'
import Slider from './Slider';
import Sound from './Sound';
import TextToSpeech from './TextToSpeach';

export default function Home() {
    return (
        // <div class="side">
        //     <h1>Animals</h1>
        //     <div className='container'>
        //         <div className="row">
        //             {Animaldetails && Animaldetails.map(details => {
        //                 return (
        //                     <div className="col-6 mt-3">
        //                         <h2>
        //                             {details.name}
        //                         </h2>
        //                         <Link to={details.redirect} params={{ name: details.name }}>
        //                             <img src={details.image} />
        //                         </Link>
        //                         <p>Scientific Name: {details.ScientificName}</p>
        //                         <Link to={details.redirect} params={{ name: details.name }}>
        //                             Click to know more </Link>
        //                     </div>
        //                 )
        //             })}
        //         </div>
        //     </div>
        //     {/* <h5>Photo of Jaguar:</h5>
        //     <div class="fakeimg">
        //         <img src={images.jaguarHome} />
        //     </div>

        //     <p>About Jaguar </p>
        //     <h5>The jaguar (Panthera onca) is a large cat species and the only living member of the genus Panthera native to
        //         the Americas. With a body length of up to 1.85 m (6 ft 1 in) and a weight of up to 158 kg (348 lb), it is the
        //         biggest cat species in the Americas and the third largest in the world.</h5> */}


        // </div>
        <div>
            <div className='home-slider-container my-5'>
                <Slider class="home-slider" slides={Animaldetails[0].slides} />
            </div>
            <div className="container">
                <div className="row">
                    <h1 className='mainTitle'>
                        Jaguar
                    </h1>
                    <p>Jaguars are the largest of South America's big cats and the third largest cats in the world. Their fur is usually tan or orange with black spots, called "rosettes" because they are shaped like roses. Some jaguars are so dark they don't seem to have spots.</p>
                </div>
            </div>

            <div className="funFacts container my-5">
                <div className="row">
                    <div className="col-7 ms-3">
                        <p style={{ display: 'flex' }}><p className="Title">COMMON NAME: </p> <p className='Content'> Jaguar</p></p>
                        <p style={{ display: 'flex' }}><p className="Title">SCIENTIFIC NAME: </p> <p className='Content'> Panthera onca</p></p>
                        <p style={{ display: 'flex' }}><p className="Title">TYPE: </p> <p className='Content'> Mammals</p></p>
                        <p style={{ display: 'flex' }}><p className="Title">DIET: </p> <p className='Content'> Carnivores</p></p>
                        <p style={{ display: 'flex' }}><p className="Title">GROUP NAME: </p> <p className='Content'> Parade</p></p>
                        <p style={{ display: 'flex' }}><p className="Title">AVERAGE LIFE SPAN IN THE WILD:</p> <p className='Content'> Up to 16 years</p></p>
                        <p style={{ display: 'flex' }}><p className="Title">SIZE: </p> <p className='Content'> Aroun 5 feet and 7 inches</p></p>
                        <p style={{ display: 'flex' }}><p className="Title">WEIGHT: </p> <p className='Content'> 100 to 120 kg</p></p>
                    </div>
                    <div className="col-3 section-img">
                        <img src={images.jaguar1} />
                    </div>
                </div>
            </div>

            <h2 className='justify-content-center align-items-center d-flex'>Let's <h1 className='ps-2'>ROAR</h1></h2>
            <div className="container my-5">
                <div className="row">
                    <div className="col-6">
                        <img src={images.jaguarSound} style={{ width: "450px" }} />
                        <div className='mt-2'><Sound track={images.jaguarrors} /></div>
                    </div>

                    <div className="col-6">
                        <img src={images.babyJaguar} style={{ width: "450px" }} />
                        <div className='mt-2'><Sound track={images.BABYJAG} /></div>
                    </div>
                </div>
                <div className="row">
                    <h1>
                        Where can we find Jaguars Mostly?
                    </h1>
                    <p>Jaguars are widely distributed, inhabiting New Mexico and southern Arizona south toward northeastern Brazil and northern Argentina. Populations have been drastically reduced or in some areas and even eliminated, including the United States, El Salvador, and large parts of Mexico. Jaguars like thick, moist tropical lowland forests with plenty of cover, but can be found in reed thickets, scrubland, coastal forests, thickets, and swamps. They are superb swimmers and are usually found living near water: rivers, slow-moving streams, watercourses, lagoons, and swamps.</p>
                    <TextToSpeech text="Jaguars are widely distributed, inhabiting New Mexico and southern Arizona south toward northeastern Brazil and northern Argentina. Populations have been drastically reduced or in some areas and even eliminated, including the United States, El Salvador, and large parts of Mexico. Jaguars like thick, moist tropical lowland forests with plenty of cover, but can be found in reed thickets, scrubland, coastal forests, thickets, and swamps. They are superb swimmers and are usually found living near water: rivers, slow-moving streams, watercourses, lagoons, and swamps." />
                    <img className='Map' src='https://i.natgeofe.com/k/d561f335-db3b-4659-80fc-c19b4034f038/jaguar-range-map.jpg?w=1280&h=720' />
                </div>
            </div>
        </div>
    )
}
