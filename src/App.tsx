import Navbar from './components/Navbar'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Home from './sections/Home'
import Projects from './sections/Projects'

function App() {

  return (
    <div className='bg-[#F5F5F4] h-full'>
      <Navbar />
      <main className='pt-16'>
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
