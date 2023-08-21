import React from 'react'

const OpenMenu = ({toggleNav}) => {
    return (
        <div className='md:hidden'>
            <span 
            className="material-symbols-outlined"
            onClick={toggleNav}>
                menu_open
            </span>
        </div>
    )
}

export default OpenMenu