import Image from 'next/image';

interface HeroProps {}

function Hero({}: HeroProps) {
  return (
    <section className='bg-bgDark mt-[76px]'>
      <div className='container'>
        <div className='min-h-[94vh] grid grid-cols-1 lg:grid-cols-12 items-center max-w-7xl mx-auto place-items-end py-48 space-y-20 lg:space-y-0'>
          {/* Text */}
          <div className='col-span-7 space-y-6 lg:space-y-4 mx-auto text-center lg:text-left'>
            <h2 className='text-5xl lg:text-6xl font-bold text-textMain'>
              Hello, I<span>&#39;</span>m
            </h2>
            <h1 className='text-7xl lg:text-[90px] font-bold text-textMain'>
              Karl George
            </h1>
            <h2 className='text-5xl lg:text-6xl font-bold text-textMain'>
              Web Developer
            </h2>
          </div>
          {/* Image */}
          <div className='col-span-5 mx-auto'>
            <div>
              <Image
                src='/hero-img.png'
                width={450}
                height={450}
                alt='hero'
                className='rounded-full border-4 border-black object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
