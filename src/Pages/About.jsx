import React from 'react'
import { images } from '../assets/images'
import TextToSpeech from './TextToSpeach'


export default function About() {
    return (
        <div className='p-4 text-center'>
            <h1>About Jaguar</h1>
            <img src={images.jaguar5} className="my-5" />
            <p>The jaguar has a compact body, a wide head, and powerful jaws. The coat is usually yellow and tan, but colors can range from black to reddish brown. The spots on its coat are more defined and black on its head and neck, becoming larger rosette-shaped patterns on the sides and back. Jaguars living in forests are often darker and considerably smaller than those living in open areas, possibly due to the smaller numbers of large, herbivorous prey in forest areas. Jaguars have powerful jaws with the third-highest bite force of all felids, after the tiger and the lion</p>
            <TextToSpeech text="The jaguar has a compact body, a wide head, and powerful jaws. The coat is usually yellow and tan, but colors can range from black to reddish brown. The spots on its coat are more defined and black on its head and neck, becoming larger rosette-shaped patterns on the sides and back. Jaguars living in forests are often darker and considerably smaller than those living in open areas, possibly due to the smaller numbers of large, herbivorous prey in forest areas. Jaguars have powerful jaws with the third-highest bite force of all felids, after the tiger and the lion" />
        </div>
    )
}
