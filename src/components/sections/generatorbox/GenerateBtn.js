import React from 'react'
import { UseContext } from '../TextToVoiceProvider';
import useTextToVoice from '../useTextToVoice';

const GenerateBtn = ({ alertObj }) => {
  // iterate function of useTextToVoice hooks
  const { voices, generateSpeech} = useTextToVoice();

  // iterate context api values
  const { voiceSettings } = UseContext();
  // iterating alert values
  const { alertData, setAlertData } = alertObj;

  // generator button handler
  const generatorBtn = async() => { 
    // console.log(voices)
    // check voiceSettings all properties are selected or not
    if (!voiceSettings.selectedVoice) {
      setAlertData({ ...alertData, message: "Please select the voice", alert: true });
      hideAlert();
    } else {
      const { text, selectedVoice, rate } = voiceSettings;
      const voiceObj = voices.find(voice => voice.name === selectedVoice);
      // console.log(voices[0]);
      console.log("inBtn: ", voiceObj)
       generateSpeech(text, voiceObj, rate) ; 
    }
  }

  // alert message handler
  const hideAlert = () => {
    setTimeout(() => setAlertData({ ...alertData, alert: null }), 3000)
  }

  return (
    <div className='text-center my-8'>
      <button
        onClick={generatorBtn}
        className='px-10 py-4 rounded-lg border-x-4 border-x-sky-600 text-sky-50 bg-sky-400 hover:bg-sky-600 font-black shadow-lg'>
        Generate</button>
    </div>
  )
}

export default GenerateBtn