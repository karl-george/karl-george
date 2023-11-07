import Link from 'next/link';

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  return (
    <nav className='fixed z-10 top-0 left-0 w-full bg-bgWhite'>
      <div className='flex justify-between items-center container py-6 px-4 md:px-8 box-shadow: 0px -8px 26px -1px rgba(0, 0, 0, 0.25) mx-auto'>
        {/* Logo */}

        <div className='text-xl font-semibold'>
          <Link href={'/'}>Karl George</Link>
        </div>
        {/* Nav Links */}
        <ul className='flex-row hidden md:flex gap-12'>
          <li className='link'>
            <Link href={'/'}>Home</Link>
          </li>
          <li className='link'>
            <Link href={'#about'}>About</Link>
          </li>
          <li className='link'>
            <Link href={'#projects'}>Projects</Link>
          </li>
          <li className='link'>
            <Link href={'#contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
