import React from 'react'

const Select = () => {
  return (
    <div className='mr-7'>
      <select
        defaultValue="Language"
        className='px-4 py-3 rounded-lg outline-0 border-2 border-x-sky-400 bg-green-50 shadow-lg'>
        <option className='px-2 py-3 rounded-lg' value="--Select Language--" disabled={true}> Select Voice </option>
        <option className='px-2 py-3 rounded-lg' value="Value-2">Value-2</option>
        <option className='px-2 py-3 rounded-lg' value="Value-3">Value-3</option>
        <option className='px-2 py-3 rounded-lg' value="Value-4">Value-4</option>
      </select>
    </div>
  )
}

export default Select