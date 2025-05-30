function Navbar() {
  return (
    <nav className='fixed top-0 w-full py-4 px-10 bg-[#DAD7CD] z-20 shadow-sm border-b border-[#ccc] 2xl:py-6'>
        <ul className='flex justify-center md:justify-end gap-8 text-[#2D2D2D] text-base sm:text-xl font-[Carlito]'>
            <li><a href='#home' className='hover:text-[#E07A5F]'>Home</a></li>
            <li><a href='#about' className='hover:text-[#E07A5F]'>About Me</a></li>
            <li><a href='#projects' className='hover:text-[#E07A5F]'>Projects</a></li>
            <li><a href='#contact' className='hover:text-[#E07A5F]'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
