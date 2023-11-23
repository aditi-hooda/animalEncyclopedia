import React from 'react'
import { images } from '../assets/images'
import TextToSpeech from './TextToSpeach'

export default function Lifestyle() {
    return (
        <div className='container my-5'>
            <h1>Habits and Lifestyle</h1>
            <div className="row mt-5">
                <div className="col-6">
                    <img src={images.jaguar9} alt="" style={{ width: "100%" }} />
                </div>
                <div className="col-6">
                    <TextToSpeech text="The jaguar is a solitary creature aside from the first couple of years, spent with their mother. Males are very territorial, with their home range overlapping that of several females, but are prepared to defend it fiercely from other males. They are dependent on water, particularly during the dry season, seeking relief from the heat. They are very good swimmers and are very fast when moving through the water, especially when pursuing their prey. They have been recorded moving between islands and the shore. Jaguars are also good at climbing trees but do so less often than cougars. Near dusk and dawn, they are most active, tending to rest during the mid-morning and afternoon. When resting they lie under thick vegetation in deep shade or under large rocks or in caves. When hunting, jaguars use a stalk-and-ambush strategy. They will slowly walk down forest paths, listening for and stalking prey before rushing or ambushing. The jaguar attacks from cover and usually from a target's blind spot with a quick pounce. The ambush may include leaping into the water after prey, as a jaguar is quite capable of carrying a large kill while swimming. The jaguar's powerful bite allows it to pierce the carapaces of turtles and tortoises, and to employ an unusual killing method: it bites directly through the skull of mammalian prey between the ears to deliver a fatal blow to the brain. In order to communicate with each other jaguars roar or grunt for long-distance communication. Chuffing is produced by individuals when greeting, during courting, or by a mother comforting her cubs. Cubs have been recorded bleating, gurgling, and mewing." />
                    <p>The jaguar is a solitary creature aside from the first couple of years, spent with their mother. Males are very territorial, with their home range overlapping that of several females, but are prepared to defend it fiercely from other males. They are dependent on water, particularly during the dry season, seeking relief from the heat. They are very good swimmers and are very fast when moving through the water, especially when pursuing their prey. They have been recorded moving between islands and the shore. Jaguars are also good at climbing trees but do so less often than cougars. Near dusk and dawn, they are most active, tending to rest during the mid-morning and afternoon. When resting they lie under thick vegetation in deep shade or under large rocks or in caves. When hunting, jaguars use a stalk-and-ambush strategy. They will slowly walk down forest paths, listening for and stalking prey before rushing or ambushing. The jaguar attacks from cover and usually from a target's blind spot with a quick pounce. The ambush may include leaping into the water after prey, as a jaguar is quite capable of carrying a large kill while swimming. The jaguar's powerful bite allows it to pierce the carapaces of turtles and tortoises, and to employ an unusual killing method: it bites directly through the skull of mammalian prey between the ears to deliver a fatal blow to the brain. In order to communicate with each other jaguars roar or grunt for long-distance communication. Chuffing is produced by individuals when greeting, during courting, or by a mother comforting her cubs. Cubs have been recorded bleating, gurgling, and mewing.</p>
                </div>
            </div>
        </div>
    )
}
