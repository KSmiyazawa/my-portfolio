import Navbar from './components/Navbar'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Home from './sections/Home'
import Projects from './sections/Projects'

function App() {

  return (
    <div className='w-full bg-[#F5F5F4]'>
      <Navbar />
      <main className='pt-16 text-[#2D2D2D]'>
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <footer className='bg-[#DAD7CD] text-[#6B705C] h-15 flex items-center justify-center'>
        <p>KAREN SAKI ©2025 </p>
      </footer>
    </div>
  )
}

export default App
