interface ButtonGroupProps {
    appLink: string,
    githubLink: string,
}

function ButtonGroup({ appLink, githubLink }: ButtonGroupProps) {
  return (
    <div className='flex gap-5'>
        <a 
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className='px-8 py-2 bg-[#E07A5F] font-[Carlito] text-lg text-white text-center rounded transform transition-all duration-200 hover:scale-105'
        >
            View App
        </a>
        <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className='px-8 py-2 border-1 border-[#E07A5F] font-[Carlito] text-lg text-[#E07A5F] text-center rounded transform transition-all duration-200 hover:scale-105'
        >
            View Code
        </a>
    </div>
  )
}

export default ButtonGroup
