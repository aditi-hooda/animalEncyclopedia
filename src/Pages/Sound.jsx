import React, { useRef, useState } from 'react'
import { images } from '../assets/images';

export default function Sound(props) {
    const [audioStatus, changeAudioStatus] = useState(false);
    const myRef = useRef();

    const startAudio = () => {
        myRef.current.play();

        changeAudioStatus(true);
    };

    const pauseAudio = () => {
        myRef.current.pause();
        changeAudioStatus(false);
    };

    return (
        <>
            <audio
                ref={myRef}
                src={props.track}
            />
            {audioStatus ? (
                <img src={images.mute} onClick={pauseAudio} style={{
                    width: "100px",
                    height: "100px"
                }} />
            ) : (
                <img src={images.audio} onClick={startAudio} style={{
                    width: "100px",
                    height: "100px"
                }} />
            )}
        </>
    );
}
