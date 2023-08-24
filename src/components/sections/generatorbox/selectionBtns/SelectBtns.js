import React from 'react'
import Select from './Select'
import Slow from './Slow'

const SelectBtns = () => {
  return (
    <div className='flex flex-wrap items-center'>
        <Select/>
        <Slow/>
    </div>
  )
}

export default SelectBtns