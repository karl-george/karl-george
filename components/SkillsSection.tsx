import { getSkills } from '@/sanity/actions';
import SkillIcon from './SkillIcon';

interface SkillsSectionProps {}

async function SkillsSection({}: SkillsSectionProps) {
  const skills = await getSkills();

  return (
    <section className='py-28' id='skills'>
      <div className='container'>
        <div className='mb-20'>
          <h3 className='text-5xl font-bold text-center'>Skills</h3>
        </div>
        {/* Skills */}
        <div className='flex flex-row items-center justify-center gap-6 flex-wrap'>
          {skills.map((skill: Skill) => (
            <SkillIcon skill={skill} key={skill._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
