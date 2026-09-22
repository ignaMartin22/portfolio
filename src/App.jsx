import { MotionConfig } from 'motion/react'
import LanguageProvider from './i18n/LanguageProvider'
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
import Services from './sections/Services'
import Stats from './sections/Stats'
import Testimonials from './sections/Testimonials'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
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
          <Stats />
          <SectionDivider />
          <Services />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Testimonials />
          <SectionDivider />
          <Contact />
        </main>
      </LanguageProvider>
    </MotionConfig>
  );
}

export default App