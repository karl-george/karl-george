'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <ul
      ref={ref}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[500px] md:w-full md:max-w-none mx-auto'
    >
      {projects.map((project: Project, index: number) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial='initial'
          animate={isInView ? 'animate' : 'initial'}
          transition={{ duration: 0.3, delay: index * 0.4 }}
        >
          <ProjectCard project={project} key={project._id} />
        </motion.div>
      ))}
    </ul>
  );
}

export default Projects;
