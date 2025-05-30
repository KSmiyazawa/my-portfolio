import ButtonGroup from '../components/ButtonGroup'

function Projects() {
  return (
    <section id='projects' className='flex-col items-center justify-center gap-10'>
      <h1 className='text-center text-5xl text-[#E07A5F] border-b-4 border-[#81B29A] pb-2 m-10'>Projects</h1>

      {/* Arcane Kitchen */}
      <div className='flex relative gap-30 h-150'>
        <div className=' bg-[#81B29A] basis-xl p-20 h-full'>
          <img src='/arcane-kitchen.png' className='absolute -left-20 top-1/2 -translate-y-1/2 h-9/10'/>
        </div>
        <div className='text-[#2D2D2D] flex-1 flex flex-col ietms-center justify-center gap-5 p-10'>
          <h2 className='text-4xl'>Arcane Kitchen</h2>
          <p>A fantasy RPG-themed meal planning app that makes healthy eating fun and engaging. Built with React, TypeScript, and Node.js, and uses OpenAI for recipe parsing and intelligent ingredient substitutions.</p>
          <ButtonGroup appLink='https://www.arcane-kitchen.com/' githubLink='https://github.com/Arcane-Kitchen'/>
        </div>
      </div>
    </section>
  )
}

export default Projects
