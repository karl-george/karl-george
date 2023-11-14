import Image from 'next/image';

interface AboutSectionProps {}

function AboutSection({}: AboutSectionProps) {
  return (
    <section className='py-28' id='about'>
      <div className='container'>
        <div className='mb-20'>
          <h3 className='text-5xl font-bold text-center'>About</h3>
        </div>
        <div className='flex flex-col lg:flex-row gap-28 justify-center items-center'>
          {/* Image  */}
          <Image
            src='/about-img.jpg'
            width={450}
            height={450}
            alt='about'
            className='rounded-2xl'
          />
          {/* Content */}
          <div className='max-w-lg'>
            <p className='text-lg'>
              As a Junior Front-End Developer, I am experienced in using HTML,
              CSS, JavaScript, TypeScript, React, Tailwind and SCSS. I enjoy
              designing and developing responsive websites that offer a smooth
              user experience. My expertise lies in crafting dynamic, engaging
              interfaces through writing clean and optimized code and utilizing
              cutting-edge development tools and techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
