import { getProjects } from '@/sanity/actions';
import ProjectCard from './ProjectCard';
import Projects from './Projects';

interface ProjectSectionProps {}

async function ProjectSection({}: ProjectSectionProps) {
  const projects = await getProjects();

  return (
    <section className='py-28 bg-bgDark' id='projects'>
      <div className='container'>
        <div className='mb-20'>
          <h3 className='text-5xl font-bold text-center'>Projects</h3>
        </div>
        {/* Projects Grid */}
        <Projects projects={projects} />
      </div>
    </section>
  );
}

export default ProjectSection;
