import { SiGithub } from 'react-icons/si';
import { TbBrandLinkedin } from 'react-icons/tb';
import ContactIntentCard from '../components/ContactIntentCard';
import Reveal from '../components/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="text-accent-light dark:text-accent-dark text-sm font-medium mb-2">
            ¿Hablamos?
          </p>
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
            Trabajemos juntos
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-10">
            Elegí qué necesitás y te escribo directo por WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactIntentCard />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center border border-text-secondary-light/20 dark:border-text-secondary-dark/20 text-text-secondary-light dark:text-text-secondary-dark hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-light/20 dark:hover:shadow-accent-dark/20 transition-all duration-300"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center border border-text-secondary-light/20 dark:border-text-secondary-dark/20 text-text-secondary-light dark:text-text-secondary-dark hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-light/20 dark:hover:shadow-accent-dark/20 transition-all duration-300"
            >
              <TbBrandLinkedin className="w-5 h-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}