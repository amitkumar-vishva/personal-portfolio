import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Experience from "./components/Experience/Experience"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"

function App() {
  return (
    <>   
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Contact/>
    </>
  )
}

export default App
