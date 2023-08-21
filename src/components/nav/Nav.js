import React, { useState, useEffect } from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import OpenMenu from './OpenMenu'

const Nav = () => {

  // create state variable
  const [toggle, setToggle] = useState(false);
  // toggle nav function

  // console.log(window.outerWidth)
  // console.log(window.innerWidth)

  const toggleNav = () => {
    setToggle(!toggle);
    console.log("calling")
    console.log(toggle)
  }

  // toggle handling for small device
  useEffect(() => {
    if (window.outerWidth <= 767) setToggle(true);
  }, []);

  return (
    <header className='my-5'>
      <div className='w-full lg:w-10/12 m-auto'>
        <div className='relative flex justify-between py-5 px-12 bg-slate-200 rounded-lg'>
          <LeftSide />
          <RightSide toggleNav={toggleNav} toggle={toggle} />
          <OpenMenu toggleNav={toggleNav} />
        </div>
      </div>
    </header>
  )
}

export default Nav