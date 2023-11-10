import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Link from 'next/link';

interface MobileMenuProps {
  navLinks: {
    title: string;
    href: string;
  }[];
}

function MobileMenu({ navLinks }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='w-6 h-6' />
      </SheetTrigger>
      <SheetContent>
        <ul className='mt-12 flex flex-col items-center text-lg gap-y-6 text-textMain'>
          {navLinks.map((link, idx) => (
            <li className='link' key={idx}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
