import React from 'react'
import TextToSpeech from './TextToSpeach'
import "./Mating.css"
import { images } from '../assets/images'
export default function Mating() {
    return (
        <div className='container mating my-5'>
            <div className="row">
                <h1>Mating Habits of Jaguar</h1>
                <div className="col-6 mating-details mt-5">
                    <div className="row ">
                        <div className="col-6 title">MATING BEHAVIOR</div>
                        <div className="col-6 content">Polygyny</div>
                    </div>
                    <div className="row">
                        <div className="col-6 title">REPRODUCTION SEASON</div>
                        <div className="col-6 content">December-March</div>
                    </div>
                    <div className="row">
                        <div className="col-6 title">PREGNANCY DURATION</div>
                        <div className="col-6 content">91-111 days</div>
                    </div>
                    <div className="row">
                        <div className="col-6 title">BABY CARRYING</div>
                        <div className="col-6 content">2-3 cubs</div>
                    </div>
                    <div className="row">
                        <div className="col-6 title">INDEPENDENT AGE</div>
                        <div className="col-6 content">2 years</div>
                    </div>
                    <div className="row">
                        <div className="col-6 title">BABY NAME</div>
                        <div className="col-6 content">cub</div>
                    </div>
                    <img src={images.Mating} alt="" style={{
                        borderRadius: "20% 80% 20% 30%",
                        width: "50%"
                    }} />

                    <img src={images.babyJaguar1} style={{
                        borderRadius: "50%",
                        marginLeft: "10px"
                    }} />
                </div>
                <div className="col-6">
                    <p>Jaguars are polygynous meaning that males mate with more than one female during the breeding season. Mating usually increases from December through March. Throughout the mating season, females will call loudly to attract males into their territory. Females generally give birth to between 2 to 3 cubs, following a 91 -111-day gestation period. Once the cubs are born, females will not tolerate a male in her territory, being very protective of the cubs. The young are born with closed eyes but open them after 2 weeks. They are weaned at the age of 3 months but remain in the birth den for 6 months before leaving to accompany their mother on hunts. The young remain with their mothers for up to 2 years of age. Females become reproductively mature between 12 and 24 months, and males when they are 24 to 36 months old.</p>
                    <TextToSpeech text="Jaguars are polygynous meaning that males mate with more than one female during the breeding season. Mating usually increases from December through March. Throughout the mating season, females will call loudly to attract males into their territory. Females generally give birth to between 2 to 3 cubs, following a 91 -111-day gestation period. Once the cubs are born, females will not tolerate a male in her territory, being very protective of the cubs. The young are born with closed eyes but open them after 2 weeks. They are weaned at the age of 3 months but remain in the birth den for 6 months before leaving to accompany their mother on hunts. The young remain with their mothers for up to 2 years of age. Females become reproductively mature between 12 and 24 months, and males when they are 24 to 36 months old." />
                </div>
            </div>
        </div>
    )
}
