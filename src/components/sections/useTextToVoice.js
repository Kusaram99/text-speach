import { useState, useEffect } from 'react';

const useTextToVoice = () => {
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        const handleVoicesChanged = () => {
            const allVoices = window.speechSynthesis.getVoices();
            setVoices(allVoices);
        };

        // Initialize voices and listen for the 'voiceschanged' event
        handleVoicesChanged();
        window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);

        // Clean up the event listener when the component unmounts
        return () => {
            window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
        };
    }, []);

    const generateSpeech = (text, selectedVoice, rate, volume) => {
        const utterance = new SpeechSynthesisUtterance();
        utterance.voice = selectedVoice;
        utterance.rate = rate;
        utterance.volume = volume;
        utterance.text = text;
        window.speechSynthesis.speak(utterance);
    };

    return {
        voices, 
        generateSpeech,
    };
};

export default useTextToVoice;
