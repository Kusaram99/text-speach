import React from 'react'
import Heading from './Heading'
import Buttons from './buttons/Buttons'
import TextArea from './TextArea'

const SectionComp = () => {
    return (
        <section className='my-12'>
            <div className="w-full lg:w-10/12 m-auto px-12 py-5 bg-slate-200 rounded-lg">
                <div>
                    <Heading />
                    <Buttons/>
                    <TextArea/>
                </div>
            </div>
        </section>
    )
}

export default SectionComp