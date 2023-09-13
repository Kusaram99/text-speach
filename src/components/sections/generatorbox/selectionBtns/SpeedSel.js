import React from 'react'
import { UseContext } from '../../TextToVoiceProvider';

const SpeedSel = () => {
    // usecontext to consumer
    const { setVoiceSettings, voiceSettings } = UseContext();

    //     0.25
    // 0.5
    // 0.75
    // 1
    // 1.25
    // 1.5
    // 1.75
    // 2
    // speed values
    const speadData = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

    // speed handler function
    const speedHandler = (e) => {
        // update speech speed
        setVoiceSettings({ ...voiceSettings, rate: e.target.value });
    }

    return (
        <div className='mr-5'>
            <select
                defaultValue="speed"
                className='px-4 py-3 rounded-lg outline-0 border-x-4 border-x-sky-400 bg-green-50 shadow-lg'
                onChange={speedHandler}>
                <option className='px-2 py-3 rounded-lg' value="speed" disabled={true}>Speed</option>
                {speadData.length && speadData.map((item, ind) =>
                    <option
                        key={ind}
                        className='px-2 py-3 rounded-lg'
                        value={item}>
                        {item}
                    </option>
                )}
            </select>
        </div>
    )
}

export default SpeedSel