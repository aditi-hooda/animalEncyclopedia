import React from 'react'
import { images } from '../assets/images'
import TextToSpeech from './TextToSpeach'

export default function Diet() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 text-end"><img src={images.diet} style={{ width: "80%" }} /></div>
                <div className="col-6 d-flex align-items-center"><h1>I WILL EAT ALMOST ANYTHING</h1></div>
            </div>
            <div className="row mt-5">
                <div className="d-flex align-items-end"><h4>DIET</h4>
                    <h2 className='ps-2' style={{ color: "#c32929" }}>Carnivore</h2>
                </div>
                <p>
                    The jaguar's diet mostly consists of medium sized mammals, such as deer, capybara, tapirs and peccaries, which they silently stalk through the thick jungle. In water, jaguars hunt fish, turtles, and even small caiman. The jaguar is an aggressive and formidable hunter and is believed to eat over 80 different animal species.
                </p>
                <TextToSpeech text="The jaguar's diet mostly consists of medium sized mammals, such as deer, capybara, tapirs and peccaries, which they silently stalk through the thick jungle. In water, jaguars hunt fish, turtles, and even small caiman. The jaguar is an aggressive and formidable hunter and is believed to eat over 80 different animal species." />
                <img className='my-5' src={images.diet1} />
                <p>Jaguar hunt different kind of preys</p>
                <p>The Animals they Hunt are:</p>
                <ul className='ms-5' style={{ fontSize: "22px" }}>
                    <li>Monkeys</li>
                    <li>Turtles</li>
                    <li>Deer</li>
                    <li>Frog</li>
                    <li>Fish</li>
                    <li>Wild Pigs and many more</li>
                </ul>
            </div>
        </div>

    )
}
