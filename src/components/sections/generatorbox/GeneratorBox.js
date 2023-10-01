import React from 'react'
import Heading from './Heading'
import SelectBtns from './selectionBtns/SelectBtns'
import TextArea from './TextArea' 
import { useState } from 'react'
import GenerateBtn from './GenerateBtn'
import Alert from './Alert' 

const GeneratorBox = () => { 
    const [alertData, setAlertData] = useState({ alert: null }); 

    return (
        <section className='my-12 relative'>
            {alertData.alert && <Alert message={alertData.message} />}
            <div className="w-full lg:w-10/12 m-auto px-5 sm:px-12 py-5  rounded-lg bg-slate-200">
                <div>
                    <Heading />
                    <SelectBtns />
                    <TextArea />
                    <GenerateBtn alertObj={{ alertData, setAlertData }} /> 
                </div>
            </div>
        </section>
    )
}

export default GeneratorBox