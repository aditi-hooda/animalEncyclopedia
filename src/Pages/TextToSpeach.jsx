import React, { useState, useEffect } from "react";
import { images } from "../assets/images";

const TextToSpeech = ({ text }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState(null);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);

        setUtterance(u);

        return () => {
            synth.cancel();
        };

    }, [text]);


    const handlePlay = () => {
        const synth = window.speechSynthesis;

        if (isPaused) {
            synth.resume();
        }

        synth.speak(utterance);

        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;

        synth.pause();

        setIsPaused(true);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        setIsPaused(false);
    };

    return (
        <div className="text-to-speach">
            <img onClick={handlePlay} src={images.play} />
            <img onClick={handlePause} src={images.pause} />
            <img onClick={handleStop} src={images.stop} />
        </div>
    );
};

export default TextToSpeech;