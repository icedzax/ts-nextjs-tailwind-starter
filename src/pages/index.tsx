import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className="bg-[url('/images/bg.png')] bg-repeat-round">
          <div className='layout relative flex min-h-screen  flex-col items-center justify-center  text-center'>
            <Vercel className='text-5xl' />
            <h1 className='mt-4 text-slate-100'>
              จัดทีมผู้กล้า พิชิตสงครามแห่งโชคชะตา
            </h1>

            <footer className='absolute bottom-2 text-gray-700 py-4'>
              <p className='text-slate-100'>ผู้กล้าที่ลงทะเบียน 999,999,999</p>
              <ButtonLink className='mt-6' href='/components' variant='light'>
                ลงทะเบียนล่วงหน้า
              </ButtonLink>
              <div className='flex'>
                <NextImage
                  useSkeleton
                  className='w-32 md:w-40'
                  src='/images/google-play-badge.png'
                  width='180'
                  height='180'
                  alt='Icon'
                />
                <NextImage
                  useSkeleton
                  className='w-32 md:w-40'
                  src='/images/google-play-badge.png'
                  width='180'
                  height='180'
                  alt='Icon'
                />
              </div>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
