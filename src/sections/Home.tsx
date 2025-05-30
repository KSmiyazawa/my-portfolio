function Home() {
    return (
        <section id='home' className='flex max-md:flex-col-reverse items-center justify-center gap-5 md:gap-10 p-10 sm:p-20 lg:p-10 2xl:px-30'>
            <div className='text-[#2D2D2D] flex-1'>
                <h1 className='text-4xl max-md:text-center lg:text-5xl xl:text-6xl font-[Radley]'>
                    <span className='italic'>Hello</span>, I am <span className='text-[#E07A5F] shiny-text text-5xl lg:text-6xl xl:text-7xl'>Karen Saki</span>
                </h1>
                <p className="mt-2 md:mt-4 text-base text-justify sm:text-xl font-[Carlito]">
                    I'm a full-stack software developer based in Tokyo, Japan, building modern web applications with TypeScript, React, and Node.js.
                </p>
            </div>
            
            <div className='flex items-center justify-center md:basis-xs xl:basis-md 2xl:basis-lg'>
                <img src='/avatar.png' className='w-4/5 md:h-full aspect-auto'/>
            </div>
        </section>
    )
}

export default Home
