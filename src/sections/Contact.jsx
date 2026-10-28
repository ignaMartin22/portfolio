import { SiGithub } from 'react-icons/si';
import { TbBrandLinkedin } from 'react-icons/tb';
import ContactIntentCard from '../components/ContactIntentCard';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import { useLanguage } from '../i18n/useLanguage';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-light dark:text-accent-dark mb-3">
            {t('contact.kicker')}
          </p>
          <div className="mb-4">
            <SectionTitle>{t('contact.title')}</SectionTitle>
          </div>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-10">
            {t('contact.intro')}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactIntentCard />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://github.com/ignaMartin22"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand btn-ghost w-12 h-12 p-0 justify-center"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ignacio-martin-6492142b2"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand btn-ghost w-12 h-12 p-0 justify-center"
            >
              <TbBrandLinkedin className="w-5 h-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}