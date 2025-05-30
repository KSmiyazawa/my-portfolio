function Home() {
    return (
        <section id='home' className='flex items-center justify-center gap-10 p-10'>
            <div className='text-[#2D2D2D]'>
                <h1 className='text-7xl'>
                    Hello, I am <span className='text-[#E07A5F]'>Karen Saki</span>
                </h1>
                <p className="mt-4 text-md">
                    I'm a full-stack software developer based in Tokyo, Japan, building modern web applications with TypeScript, React, and Node.js.
                </p>
            </div>
            
            <div className='bg-[url(/profile-photo.png)] bg-cover bg-center h-100 w-100 rounded-full'></div>
        </section>
    )
}

export default Home
