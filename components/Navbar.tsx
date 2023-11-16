import Link from 'next/link';
import MobileMenu from './MobileMenu';

interface NavbarProps {}

const navLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Skills',
    href: '#skills',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

function Navbar({}: NavbarProps) {
  return (
    <nav className='fixed z-10 top-0 left-0 w-full bg-bgWhite shadow-[0_-8px_26px_-1px_rgba(0,0,0,0.25)]'>
      <div className='flex justify-between items-center container py-6 px-4 md:px-8 mx-auto'>
        {/* Logo */}
        <div className='text-xl font-semibold'>
          <Link href={'/'}>Karl George</Link>
        </div>
        {/* Mobile Menu */}
        <div className='block md:hidden '>
          <MobileMenu navLinks={navLinks} />
        </div>
        {/* Nav Links */}
        <ul className='flex-row hidden md:flex gap-12'>
          {navLinks.map((link, idx) => (
            <li className='link' key={idx}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
