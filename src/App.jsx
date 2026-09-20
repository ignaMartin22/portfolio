import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import SpideyScrollCompanion from './components/SpideyScrollCompanion'
import Projects from './sections/Projects'
import WebPattern from './components/WebPattern'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import SectionDivider from './components/SectionDivider'
import ScrollProgress from './components/ScrollProgress'
import TechMarquee from './components/TechMarquee'

function App() {
  return (
    <>
      <ScrollProgress />
      <WebPattern />
      <Navbar />
      <SectionDivider />
      <SpideyScrollCompanion />
      <main>
        <Hero />
        <SectionDivider />
        <TechMarquee />
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