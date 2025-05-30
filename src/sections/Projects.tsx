import ButtonGroup from '../components/ButtonGroup'

function Projects() {
  return (
    <section id='projects' className='flex flex-col items-center justify-center'>
      <h1 className='font-[Radley] text-center text-3xl sm:text-5xl text-[#E07A5F] border-b-4 border-[#81B29A] pb-2 mb-6 sm:my-10 w-fit'>Projects</h1>

      {/* Arcane Kitchen */}
      <div className='flex max-md:flex-col md:relative md:gap-5 lg:gap-15 xl:gap-30 md:h-120 lg:h-130 xl:h-150 2xl:h-170 2xl:gap-15'>
        <div className=' bg-[#81B29A] md:basis-sm lg:basis-lg xl:basis-xl 2xl:basis-2xl p-5 md:p-20 h-full'>
          <img src='/arcane-kitchen.png' className='md:absolute md:-left-20 md:top-1/2 md:-translate-y-1/2 md:h-3/4 lg:h-8/9 xl:h-9/10'/>
        </div>
        <div className='flex-1 flex flex-col justify-center gap-2 sm:gap-5 p-10 pt-5 sm:pt-10 sm:pb-15 sm:px-20 md:px-15 lg:px-10 2xl:p-30'>
          <h2 className='font-[Radley] text-2xl sm:text-4xl text-[#2D2D2D]'>Arcane Kitchen</h2>
          <p className='font-[Carlito] text-base sm:text-xl text-[#2D2D2D] text-justify'>A fantasy RPG-themed meal planning app that makes healthy eating fun and engaging. Built with React, TypeScript, and Node.js, and uses OpenAI for recipe parsing and intelligent ingredient substitutions.</p>
          <ButtonGroup appLink='https://www.arcane-kitchen.com/' githubLink='https://github.com/Arcane-Kitchen'/>
        </div>
      </div>

      {/* WiseTogether */}
      <div className='flex max-md:flex-col-reverse md:h-90 lg:h-110 xl:h-120 w-full 2xl:h-140'>
        <div className='flex flex-col justify-center gap-2 sm:gap-5 p-10 pt-5 sm:pt-10 sm:pb-15 sm:px-20 md:px-15 md:py-0 md:basis-md lg:basis-lg xl:basis-xl lg:px-10 2xl:p-30 2xl:basis-2xl'>
          <h2 className='font-[Radley] text-2xl sm:text-4xl text-[#2D2D2D]'>WiseTogether</h2>
          <p className='font-[Carlito] text-base sm:text-xl text-[#2D2D2D] text-justify'>A couples budgeting app that helps partners manage and track their finances together. Built with React, TypeScript, and Node.js, and uses OCR and OpenAI for receipt parsing and automatic expense categorization.</p>
          <ButtonGroup appLink='https://wisetogether.onrender.com/' githubLink='https://github.com/KSmiyazawa/WiseTogether-frontend'/>
        </div>
        <div className=' bg-[#81B29A] flex flex-1 p-10 h-full items-center justify-center'>
          <img src='/wise-together.png' className='h-4/5 md:max-lg:h-2/3'/>
        </div>
      </div>

    </section>
  )
}

export default Projects
