import React from 'react'
import { images } from '../assets/images'
import "./FunFacts.css"
import TextToSpeech from './TextToSpeach'
export default function FunFacts() {
    return (
        <div className='container fun-facts my-5'>
            <div className="row">
                <h1>Fun Facts About Jaguar</h1>
                <TextToSpeech text=
                    'The word " jaguar" comes from a Native American word "yajuar”, meaning "he who kills with one leap".Jaguars have eyesight that is six times better than that of humans at night and in darker conditions thanks to a layer of tissue at the back of their eyes that reflects light.Jaguars that are black with spots are sometimes called panthers. They are actually jaguars.Jaguars wave their tails above water to attract fish.The jaguar can dive into the water to catch prey.Jaguars living in forests are smaller and darker and smaller than those in open areas.Unlike other felines, the jaguar, when eating prey, starts at the neck and chest.'
                />
                <div className="col-6">
                    <ul>
                        <li>The word "jaguar" comes from a Native American word "yajuar”, meaning "he who kills with one leap".</li>
                        <li>Jaguars have eyesight that is six times better than that of humans at night and in darker conditions thanks to a layer of tissue at the back of their eyes that reflects light.</li>
                        <li>Jaguars that are black with spots are sometimes called panthers. They are actually jaguars.</li>
                        <li>Jaguars wave their tails above water to attract fish.</li>
                        <li>The jaguar can dive into the water to catch prey.</li>
                        <li>Jaguars living in forests are smaller and darker and smaller than those in open areas.</li>
                        <li>Unlike other felines, the jaguar, when eating prey, starts at the neck and chest.</li>
                    </ul>
                </div>
                <div className="col-6">
                    <img src={images.funFacts} style={{ width: "100%" }} />
                </div>
            </div>
        </div>
    )
}
