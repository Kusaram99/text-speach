import React, { createContext, useContext, useState } from 'react';

const TextToVoiceContext = createContext();

const TextToVoiceProvider = ({ children }) => {
    const [voiceSettings, setVoiceSettings] = useState({
        text: 'Write here...',
        selectedVoice: null,
        rate: 1.0,
        volume: 1.0,
    });

    return (
        <TextToVoiceContext.Provider value={{ voiceSettings, setVoiceSettings }}>
            {children}
        </TextToVoiceContext.Provider>
    );
};

export const UseContext = () => {
    const context = useContext(TextToVoiceContext);
    if (!context) {
        throw new Error('useTextToVoice must be used within a TextToVoiceProvider');
    }
    return context;
};

export default TextToVoiceProvider;
