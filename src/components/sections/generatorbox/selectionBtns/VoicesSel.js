import React from 'react'
import useTextToVoice from '../../useTextToVoice'
import { UseContext } from '../../TextToVoiceProvider';

const VoicesSel = () => {
  // iterating usecontext values
  const { voiceSettings, setVoiceSettings } = UseContext();
  // iterating voicess
  const { voices } = useTextToVoice();

  // voice handler function
  const voiceHandler = (value) => {
    setVoiceSettings({ ...voiceSettings, selectedVoice: value.target.value });
  }

  return (
    <div className='mr-7'>
      <select
        defaultValue="default"
        className='px-4 py-3 my-1 rounded-lg outline-none border-x-4 border-x-sky-400 bg-green-50 shadow-lg'
        onChange={voiceHandler}>
        <option
          className='px-2 py-3 rounded-lg'
          value="default"
          disabled={true}> Select Voice
        </option>
        {voices.length > 0 ?
          voices.map((elem, ind) => (
            <option key={ind} value={elem.name}>
              {elem.name.split(' ').length > 3 ? elem.name.split(' ').slice(-3).join(' ') : elem.name.split(' ').slice(-2).join(' ')}
            </option>
          )) :
          <option disabled>
            Voices Not Found!
          </option>}
      </select>
    </div>
  )
}

export default VoicesSel