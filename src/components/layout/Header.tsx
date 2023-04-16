import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/#main', label: 'หน้าหลัก' },
  { href: '/#info', label: 'ข้อมูลเกม' },
  { href: '/#social', label: 'โซเชียลมีเดีย' },
  { href: '/#creators', label: 'ร่วมเป็นครีเอเตอร์' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-gray-800 bg-opacity-60 py-6'>
      <div className='layout flex h-14 items-center text-slate-100'>
        <nav className='w-full'>
          <ul className='flex items-center justify-between space-x-4'>
            <li>
              {' '}
              <UnstyledLink
                href='/'
                className='font-bold text-3xl hover:text-slate-200'
              >
                LOGO
              </UnstyledLink>
            </li>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-slate-200'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
            <li>
              <ButtonLink
                className='bg-gradient-to-t from-red-700 to-red-800 border border-slate-100 text-slate-100 rounded-xl px-10 hover:text-slate-200'
                href='/components'
                variant='light'
              >
                เข้าสู่ระบบ
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
