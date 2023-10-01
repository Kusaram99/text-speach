import React, { useEffect, useRef } from 'react'
import { UseContext } from '../TextToVoiceProvider'

const TextArea = () => {
  const { voiceSettings, setVoiceSettings } = UseContext();

  // textarea on change handler
  const onChangeHandler = (e) => {
    setVoiceSettings({ ...voiceSettings, text: e.target.value })
  }
  const ref = useRef(null);
  useEffect(() => {
    console.log("ref: ", ref.current.value);
    setVoiceSettings({...voiceSettings, text: ref.current.value})
  }, []);

  return (
    <div className='my-6'>
      <textarea
        ref={ref}
        defaultValue="Hi, if you are tired of reading books then now you are on the right platform, I will help you to convert text to voice in any language. You just have to copy-paste the content here"
        className='w-full h-48 rounded-lg px-4 py-3 outline-none shadow-lg border-x-4 border-x-sky-400 bg-green-50'
        onChange={onChangeHandler}></textarea>
    </div>
  )
}

export default TextArea