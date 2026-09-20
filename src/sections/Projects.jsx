import { proyectos } from '../data/proyectos';
import ProjectRow from '../components/ProjectRow';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
export default function Projects() {
  return (
<section id="projects" className="py-24 px-6 sm:px-10 lg:px-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-20 pb-4">
            <SectionTitle>Proyectos</SectionTitle>
          </div>
        </Reveal>

        <div className="space-y-24">
          {proyectos.map((project, i) => (
            <Reveal key={project.name} delay={0.1}>
              <ProjectRow project={project} reverse={i % 2 !== 0} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}