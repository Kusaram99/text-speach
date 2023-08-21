import React from 'react'

const Slow = () => {
    return (
        <div className='mr-5'>
            <select
                defaultValue="slow"
                className='px-4 py-3 rounded-lg outline-0 border-2 border-x-sky-400 bg-green-50 shadow-lg'>
                <option className='px-2 py-3 rounded-lg' value="slow" disabled={true}>Speed</option>
                <option className='px-2 py-3 rounded-lg' value="Value-2">0.5</option>
                <option className='px-2 py-3 rounded-lg' value="Value-3">0.8</option>
                <option className='px-2 py-3 rounded-lg' value="Value-2">1</option>
                <option className='px-2 py-3 rounded-lg' value="Value-3">1.5</option>
                <option className='px-2 py-3 rounded-lg' value="Value-3">2</option>
            </select>
        </div>
    )
}

export default Slow