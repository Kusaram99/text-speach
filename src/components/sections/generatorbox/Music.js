import React from 'react';

const Music = () => {


    return (
        <div className='my-12'>
            <h1 className='font-black text-sky-600 my-5'>Generated Audio</h1>
            <div className='flex items-center flex-wrap'>
                <audio controls className='grow mr-3 my-3 rounded-lg border-x-4 border-x-sky-400 bg-green-50 shadow-lg'>
                    <source src="/sample.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <a 
                href="/sample.mp3" 
                download
                className="px-5 py-3 rounded-lg border-x-4 border-x-sky-600 text-sky-50 bg-sky-400 hover:bg-sky-600 shadow-lg">Download Audio</a>
            </div>

        </div>
    )
}

export default Music