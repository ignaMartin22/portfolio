import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import SpideyScrollCompanion from './components/SpideyScrollCompanion'
import Projects from './sections/Projects'
import WebPattern from './components/WebPattern'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import SectionDivider from './components/SectionDivider'

function App() {
  return (
    <>
      <WebPattern />
      <Navbar />
      <SectionDivider />
      <SpideyScrollCompanion />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </main>
    </>
  );
}

export default App
