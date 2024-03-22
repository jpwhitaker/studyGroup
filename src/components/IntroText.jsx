import { Poppins } from 'next/font/google'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import { EmailSignUp } from './EmailSignUp';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '500', '600']
})

export const IntroText = () => {
  return (
    <>
      <div className={`relative ${poppins.className} bg-white mb-20`}>

        <div className=' flex justify-end'>
          <div className="w-1/3 bg-[#0d1230]">
            <p className="text-white text-[0.85rem] sm:text-[1rem] md:text-[1.5rem] xl:text-[2rem] 2xl:text-[3rem] p-8 font-semibold leading-tight " >
              <span className='text-[#00ff84]'>{'{HNL}'}</span><br />PROGRAMMING<br />STUDY GROUP
            </p>
          </div>
          <img src="./study-group-blur.jpg" className="w-2/3 object-cover" />
        </div>



        <div className="bg-white rounded-b-xl mb-20 px-8 text-[1.2rem]">
          <ul className="mb-6  text-2xl mt-12 space-y-3 text-slate-600 font-thin">
            <li className="flex items-center ">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#0d1230] mr-4">
                <ArrowRightCircleIcon className="w-8 h-8 text-[#00ff84]" aria-hidden="true" />
              </div>

              Do you want to learn new programming skills?
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#0d1230] mr-4">
                <ArrowRightCircleIcon className="w-8 h-8 text-[#00ff84]" aria-hidden="true" />
              </div>
              Do you buy online courses and never finished them?</li>
            <li className="flex items-center">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#0d1230] mr-4">
                <ArrowRightCircleIcon className="w-8 h-8 text-[#00ff84]" aria-hidden="true" />
              </div>
              Do you want to collaborate with intelligent, curious and driven people?</li>
          </ul>
          <p className='text-slate-600 font-extralight'>
            <span className='text-2xl font-bold'>Then come join us!</span>
            <br />
            We&apos;re a friendly group of people who want to learn together.
            <br />
            Every couple of months we select a new course to follow and meet once a week until we&apos;re done.
            <br />
            The meetups will always be free, but we will be using paid tutorials.
          </p>
        </div>
        <div className="flex justify-center mb-20">
        <EmailSignUp />
        </div>
      </div>


    </>
  )
}