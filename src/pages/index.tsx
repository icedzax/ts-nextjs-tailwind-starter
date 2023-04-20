import * as React from 'react';

import Layout from '@/components/layout/Layout';
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

      <main className='snap-y'>
        <section className="bg-[url('/images/bg.png')] bg-cover bg-center snap-center">
          <div className='layout relative flex min-h-screen  flex-col items-center justify-center text-center'>
            <Vercel className='text-5xl' />
            <h1 className='mt-4 text-slate-100'>
              จัดทีมผู้กล้า พิชิตสงครามแห่งโชคชะตา
            </h1>

            <footer className='absolute bottom-2 text-gray-700 py-4'>
              <p className='text-slate-100 py-2'>
                ผู้กล้าที่ลงทะเบียน 999,999,999
              </p>

              <NextImage
                // className='w-96'
                src='/images/btnPreRegister.png'
                width='680'
                height='151'
                alt='Icon'
                onClick={() => alert('x')}
              />
              <div className='my-4 flex justify-center gap-3 '>
                <NextImage
                  useSkeleton
                  // className='w-32 md:w-40'
                  src='/images/google-play-badge.png'
                  width='269'
                  height='84'
                  alt='Icon'
                />
                <NextImage
                  useSkeleton
                  // className='w-32 md:w-40'
                  src='/images/app-store-badge.png'
                  width='269'
                  height='84'
                  alt='Icon'
                />
              </div>
            </footer>
          </div>
        </section>
        <section className="bg-[url('/images/pre/bg.png')] bg-cover bg-center snap-center">
          <div className='layout relative flex min-h-screen  flex-col items-center justify-center text-center'>
            <NextImage
              className=''
              src='/images/pre/frame-text-1.png'
              width='813'
              height='92'
              alt='Icon'
            />

            <NextImage
              className=' -my-4'
              src='/images/pre/pretext.png'
              width='914'
              height='228'
              alt='Icon'
            />
            <NextImage
              className='-my-4'
              src='/images/pre/frame-text.png'
              width='813'
              height='92'
              alt='Icon'
            />
            <div className='w-full flex lg:justify-end justify-center '>
              <NextImage
                className=''
                src='/images/pre/Reward.png'
                width='813'
                height='92'
                alt='Icon'
              />
            </div>
          </div>
          <footer className='absolute bottom-0 invisible sm:visible'>
            <NextImage
              className=' w-full aspect-auto '
              src='/images/pre/npc.png'
              width='800'
              height='800'
              alt='Icon'
            />
          </footer>
          <div className='absolute bg-black bg-opacity-40 text-center bottom-1 text-white w-screen py-2'>
            <p>
              หากจำนวนการลงทะเบียนล่วงหน้าถึงตามเป้าหมาย
              รางวัลทั้งหมดจะถูกส่งให้ผู้เล่นระบบมือถือทุกคนหลังเปิดเซิฟเวอร์อย่างเป็นทางการ
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
