import ButtonGroup from '../components/ButtonGroup'

function Projects() {
  return (
    <section id='projects' className='flex flex-col items-center justify-center'>
      <h1 className='font-[Radley] text-center text-5xl text-[#E07A5F] border-b-4 border-[#81B29A] pb-2 m-10 w-fit'>Projects</h1>

      {/* Arcane Kitchen */}
      <div className='flex relative gap-30 h-150'>
        <div className=' bg-[#81B29A] basis-xl p-20 h-full'>
          <img src='/arcane-kitchen.png' className='absolute -left-20 top-1/2 -translate-y-1/2 h-9/10'/>
        </div>
        <div className='flex-1 flex flex-col justify-center gap-5 p-10'>
          <h2 className='font-[Radley] text-4xl text-[#2D2D2D]'>Arcane Kitchen</h2>
          <p className='font-[Carlito] text-xl text-[#2D2D2D]'>A fantasy RPG-themed meal planning app that makes healthy eating fun and engaging. Built with React, TypeScript, and Node.js, and uses OpenAI for recipe parsing and intelligent ingredient substitutions.</p>
          <ButtonGroup appLink='https://www.arcane-kitchen.com/' githubLink='https://github.com/Arcane-Kitchen'/>
        </div>
      </div>

      {/* WiseTogether */}
      <div className='flex h-120'>
        <div className='flex flex-col justify-center gap-5 p-10 basis-xl'>
          <h2 className='font-[Radley] text-4xl text-[#2D2D2D]'>WiseTogether</h2>
          <p className='font-[Carlito] text-xl text-[#2D2D2D]'>A couples budgeting app that helps partners manage and track their finances together. Built with React, TypeScript, and Node.js, and uses OCR and OpenAI for receipt parsing and automatic expense categorization.</p>
          <ButtonGroup appLink='https://wisetogether.onrender.com/' githubLink='https://github.com/KSmiyazawa/WiseTogether-frontend'/>
        </div>
        <div className=' bg-[#81B29A] flex flex-1 p-10 h-full items-center justify-center'>
          <img src='/wise-together.png' className='h-4/5'/>
        </div>
      </div>

    </section>
  )
}

export default Projects
