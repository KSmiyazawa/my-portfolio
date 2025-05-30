import Navbar from './components/Navbar'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Home from './sections/Home'
import Projects from './sections/Projects'

function App() {

  return (
    <div className='bg-[#F5F5F4] w-full h-full'>
      <Navbar />
      <main className='pt-16 text-[#2D2D2D]'>
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
