import React from 'react'

const RightSide = ({toggleNav, toggle}) => {
    

    return (
        <div className={`${toggle? 'hidden':''} md:block fixed w-full top-0 left-0 bg-slate-100 md:static md:bg-transparent md:h-auto md:w-auto`}>
            <div className='relative'>
                <ul className='flex justify-center list-none py-14 md:py-0 flex-col md:flex-row'>
                    <li className='md:ml-10 mt-4 md:mt-0 text-center'> <a href='#' className='no-underline'>Home</a></li>
                    <li className='md:ml-10 mt-4 md:mt-0 text-center'> <a href='#' className='no-underline'>Contact</a></li>
                </ul>
                <div className='md:hidden absolute top-10 right-10'>
                    <span 
                    className="material-symbols-outlined"
                    onClick={toggleNav}>
                        close
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RightSide