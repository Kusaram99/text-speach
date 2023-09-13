import { useState, useEffect } from 'react';

const useTextToVoice = () => {
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        const handleVoicesChanged = () => {
            const allVoices = window.speechSynthesis.getVoices();
            setVoices(allVoices);
            // console.log(allVoices);
        };

        // Initialize voices and listen for the 'voiceschanged' event
        handleVoicesChanged();
        window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);

        // Clean up the event listener when the component unmounts
        return () => {
            window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
        };
    }, []);

    // text to voice generator function
    const generateSpeech = (text, selectedVoice, rate = 1) => {
        // const allVoices = window.speechSynthesis.getVoices();
        // console.log("generateSpeech function", text," ",allVoices[0]," ",rate)
        const utterance = new SpeechSynthesisUtterance();
        utterance.voice = selectedVoice;    // 
        utterance.rate = rate;              //speed  
        utterance.text = text;              //speech's text
        window.speechSynthesis.speak(utterance); // Trigger the speech synthesis engine to speak the provided text.
    };
 
    // return voices array and functions for generate voice
    return {
        voices,
        generateSpeech,
    };
};

export default useTextToVoice;
