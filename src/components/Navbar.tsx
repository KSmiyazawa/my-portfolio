import React from 'react'

function Navbar() {
  return (
    <nav className='fixed top-0 w-full p-4 bg-[#DAD7CD]'>
        <ul className='flex justify-end gap-8 text-[#2D2D2D]'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About Me</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
