import React from 'react'
import Heading from './Heading'
import SelectBtns from './selectionBtns/SelectBtns'
import TextArea from './TextArea'
import Music from './Music'
import GenerateBtn from './GenerateBtn'

const GeneratorBox = () => {
    return (
        <section className='my-12'>
            <div className="w-full lg:w-10/12 m-auto px-5 sm:px-12 py-5  rounded-lg bg-slate-200">
                <div>
                    <Heading />
                    <SelectBtns/>
                    <TextArea/>
                    <GenerateBtn/>
                    <Music/>
                </div>
            </div>
        </section>
    )
}

export default GeneratorBox