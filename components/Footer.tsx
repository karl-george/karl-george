import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <footer className='bg-slate-800 text-white'>
      <div className='container flex flex-row items-center justify-center p-4 gap-24'>
        <div>
          <p>Karl George © 2023</p>
        </div>
        <div className='flex flex-row gap-4'>
          <Link
            href='https://github.com/karl-george'
            target='_blank'
            referrerPolicy='no-referrer'
            className='hover:text-accent'
          >
            <Github />
          </Link>
          <Link
            href='https://www.linkedin.com/in/karlgeorge87/'
            target='_blank'
            referrerPolicy='no-referrer'
            className='hover:text-accent'
          >
            <Linkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
