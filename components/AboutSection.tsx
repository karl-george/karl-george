interface AboutSectionProps {}

function AboutSection({}: AboutSectionProps) {
  return (
    <section>
      <div className='m-14'>
        <h3 className='text-5xl font-bold text-center'>About</h3>
      </div>
      <div className='flex flex-col lg:flex-row'>
        {/* <Image /> */}
        <div>
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
