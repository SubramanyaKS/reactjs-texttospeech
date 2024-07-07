import { useEffect, useState } from 'react';

export const useSpeeched = (text: string, rate: number = 1, pitch: number = 1) => {
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);

        u.rate = rate; // Set the rate
        u.pitch = pitch; // Set the pitch

        setUtterance(u);

        return () => {
            synth.cancel();
        };
    }, [text, rate, pitch]);

    // function to handle the play or when we want to play the voice
    const handlePlay = () => {
        const synth = window.speechSynthesis;

        if (isPaused) {
            synth.resume();
        } else {
            synth.speak(utterance!);
        }

        setIsPaused(false);
    };

    // function to pause the speech
    const handlePause = () => {
        const synth = window.speechSynthesis;

        synth.pause();

        setIsPaused(true);
    };
    
    // function to stop the speech
    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        setIsPaused(false);
    }

    return { handlePause, handleStop, handlePlay, isPaused };
}
