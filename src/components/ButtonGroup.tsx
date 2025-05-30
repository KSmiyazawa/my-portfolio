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
            className='w-1/3 p-2 h-10 bg-[#E07A5F] text-white text-center rounded'
        >
            View App
        </a>
        <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className='w-1/3 p-2 h-10 border-1 border-[#E07A5F] text-[#E07A5F] text-center rounded'
        >
            View Code
        </a>
    </div>
  )
}

export default ButtonGroup
