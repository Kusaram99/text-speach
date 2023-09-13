import React from 'react'

const Alert = ({ message }) => {
  return (
    <div id='alertMessage'>
      <div className='px-3 py-3 rounded-md bg-red-400 mx-auto'>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Alert