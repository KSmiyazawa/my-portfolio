function Home() {
    return (
        <section id='home' className='flex items-center justify-center gap-10 p-10'>
            <div className='text-[#2D2D2D] flex-1'>
                <h1 className='text-7xl font-[Radley]'>
                    <span className='italic'>Hello</span>, I am <span className='text-[#E07A5F] shiny-text'>Karen Saki</span>
                </h1>
                <p className="mt-4 text-xl font-[Carlito]">
                    I'm a full-stack software developer based in Tokyo, Japan, building modern web applications with TypeScript, React, and Node.js.
                </p>
            </div>
            
            <div className='flex items-center justify-center basis-xs'>
                <img src='/avatar.png' className='h-full aspect-auto'/>
            </div>
        </section>
    )
}

export default Home
