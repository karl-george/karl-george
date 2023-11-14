import { getProjects } from '@/sanity/actions';
import ProjectCard from './ProjectCard';

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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[500px] md:w-full md:max-w-none mx-auto'>
          {projects.map((project: Project) => (
            <ProjectCard project={project} key={project._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
