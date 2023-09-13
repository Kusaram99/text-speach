import React from 'react'
import VoicesSel from './VoicesSel'
import SpeedSel from './SpeedSel'

const SelectBtns = () => {
  return (
    <div className='flex flex-wrap items-center'>
        <VoicesSel/>
        <SpeedSel/>
    </div>
  )
}

export default SelectBtns


