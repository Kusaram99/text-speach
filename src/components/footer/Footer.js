import React from 'react'

const Footer = () => {
    return (
        <footer className='py-5 px-3'>
            <div className='flex justify-center items-center'>
                <a
                className='flex justify-center items-center'
                    href='https://github.com/rampawara99/text-speach'
                    target='_blank'>
                    <i className="lab la-github text-3xl"></i>
                </a>
                <span className='mx-3'>|</span>
                <p>Created by Kusaram Pawara</p>
            </div>
        </footer>
    )
}

export default Footer