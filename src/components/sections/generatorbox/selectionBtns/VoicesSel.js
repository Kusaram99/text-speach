import React, { useEffect } from 'react'
import useTextToVoice from '../../useTextToVoice'

const VoicesSel = () => {
  const { voices } = useTextToVoice();

  // console.log("voices: ", voices)
  useEffect(() => {
    // getVoices();
  }, [])

  return (
    <div className='mr-7'>
      <select
        defaultValue="default"
        className='px-4 py-3 my-1 rounded-lg outline-none border-x-4 border-x-sky-400 bg-green-50 shadow-lg'>
        <option
          className='px-2 py-3 rounded-lg'
          value="default"
          disabled={true}> Select Voice
        </option>
        {voices.length > 0 ?
          voices.map((elem, ind) => (
            <option key={ind} value={elem.name}>{elem.name}</option>
          )) :
          <option disabled>
            Voices Not Found!
          </option>}
      </select>
    </div>
  )
}

export default VoicesSel