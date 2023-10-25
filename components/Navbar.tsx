import Link from 'next/link';

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  return (
    <nav>
      <div className='flex justify-between items-center container py-6 px-4 md:px-8'>
        {/* Logo */}
        <div></div>
        {/* Nav Links */}
        <div className=''>
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
      </div>
    </nav>
  );
}

export default Navbar;
