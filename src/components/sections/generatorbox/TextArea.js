import React from 'react'
import { UseContext } from '../TextToVoiceProvider'

const TextArea = () => {
  const { voiceSettings, setVoiceSettings } = UseContext();

  // textarea on change handler
  const onChangeHandler = (e) => { 
    setVoiceSettings({ ...voiceSettings, text: e.target.value })
  }

  return (
    <div className='my-6'>
      <textarea
        defaultValue="Write here"
        className='w-full h-48 rounded-lg px-4 py-3 outline-none shadow-lg border-x-4 border-x-sky-400 bg-green-50'
        onChange={onChangeHandler}></textarea>
    </div>
  )
}

export default TextArea