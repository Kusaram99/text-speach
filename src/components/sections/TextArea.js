import React from 'react'

const TextArea = () => {
  return (
    <div className='my-6'>
        <textarea 
        defaultValue="Add your text here" 
        className='w-full h-48 rounded-lg px-4 py-3 outline-none shadow-lg border-2 border-x-sky-400 bg-green-50'></textarea>
    </div>
  )
}

export default TextArea