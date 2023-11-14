import { Code, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 900;

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='relative group'>
      <Image
        src={project.image}
        width={500}
        height={500}
        alt={project.name}
        className='rounded-2xl border-1 border shadow-[0_8px_10px_-1px_rgba(0,0,0,0.20)]'
      />
      <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-bgDark bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
        <Link
          href={project.codeLink}
          className='w-14 h-14 mr-2 border-2 border-black relative rounded-full group/link hover:border-accent'
          rel='noreferrer'
          target='_blank'
        >
          <Code className='w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-accent' />
        </Link>
        <Link
          href={project.liveLink}
          className='w-14 h-14 mr-2 border-2 border-black relative rounded-full group/link hover:border-accent'
          rel='noreferrer'
          target='_blank'
        >
          <Eye className='w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-accent' />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
