import Image from 'next/image';

export const revalidate = 900;

interface SkillIconProps {
  skill: Skill;
}

function SkillIcon({ skill }: SkillIconProps) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-row justify-center items-center gap-20'>
        <div className='w-20 h-20 relative'>
          <Image
            src={skill.image}
            alt={skill.title}
            fill
            className='object-contain'
          />
        </div>
      </div>
      <p>{skill.title}</p>
    </div>
  );
}

export default SkillIcon;
