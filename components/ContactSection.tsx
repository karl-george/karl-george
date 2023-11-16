'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

interface ContactSectionProps {}

function ContactSection({}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <section className='py-28 bg-bgDark' id='contact'>
      <div className='container'>
        <div className='mb-20'>
          <h3 className='text-5xl font-bold text-center'>Contact</h3>
        </div>
        <div className='flex flex-col lg:flex-row gap-24 lg:gap-12 w-full justify-center items-center'>
          {/* Content */}
          <div>
            <h3 className='text-xl font-bold mb-3'>Get In Touch</h3>
            <p className='text-lg max-w-md'>
              If you have a project that you want to get started, think you need
              my help with something, or just fancy saying hey, then get in
              touch.
            </p>
            {/* Socials */}
            <div className='mt-4 flex flex-row gap-4'>
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
          {/* Form */}
          <form
            className='flex flex-col w-96'
            action={process.env.GET_FORM}
            method='POST'
          >
            <div>
              <input
                type='text'
                id='name'
                name='name'
                required
                placeholder='Name'
                className='border border-gray-400 p-3 focus:none outline-none w-96 mb-4 rounded-xl'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type='email'
                id='email'
                name='email'
                required
                placeholder='Email'
                className='border border-gray-400 p-3 focus:none outline-none w-96 mb-4 rounded-xl'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <textarea
                id='message'
                name='message'
                required
                placeholder='Message'
                className='border border-gray-400 p-3 focus:none outline-none w-96 mb-4 rounded-xl'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='bg-accent hover:bg-accent/60 text-white py-3 px-5 w-fit rounded-xl self-end'
            >
              Send Message
            </button>
            {emailSubmitted && (
              <p className='mt-2 text-sm text-green-500'>
                Thank you for your message!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
