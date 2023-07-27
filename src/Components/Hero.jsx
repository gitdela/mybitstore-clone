import React from 'react';
import { IoIosTimer } from 'react-icons/io';
import { AiOutlineStar, AiFillLock } from 'react-icons/ai';
import { BsGraphUp, BsFillWalletFill, BsWallet } from 'react-icons/bs';
import man from '../Assets/man.webp';
import support from '../Assets/ssupportt.svg';

const Hero = () => {
  const whys = [
    {
      id: 1,
      child: (
        <>
          <IoIosTimer size={24} />
        </>
      ),
      head: 'Timely Support Response',
      para: 'Our support team is available all the time to assist you with all your requests and questions',
    },
    {
      id: 2,
      child: (
        <>
          <AiOutlineStar size={24} />
        </>
      ),
      head: 'Reputation Based System',
      para: 'Our rating system enables you to identify trusted traders to trade with.',
    },
    {
      id: 3,
      child: (
        <>
          <BsGraphUp size={24} />
        </>
      ),
      head: 'Competitive Low Fees',
      para: 'Start trading on Mybitstore and enjoy lower fees aon all your trades',
    },
    {
      id: 4,
      child: (
        <>
          <BsFillWalletFill size={24} />
        </>
      ),
      head: 'Secured Escrow Wallet',
      para: 'You can trade securely via P2P thanks to our reliable escrow service. If necessary, we offer excellent mediators to quickly resolve conflicts.',
    },
    {
      id: 5,
      child: (
        <>
          <BsWallet size={24} />
        </>
      ),
      head: 'Simple and Instant Withdrawals',
      para: 'Enjoy easy and instant withdrawals from Mybitstore wallet to other external wallets.',
    },
    {
      id: 6,
      child: (
        <>
          <AiFillLock size={24} />
        </>
      ),
      head: 'Get Free Wallet',
      para: 'Get a free bitcoin wallet with Mybitstore and enjoy your cryptocurrency experience.',
    },
  ];

  return (
    <section>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full bg-gradient-to-b from-indigo-200 to-blue-200 flex flex-col items-center rounded-tl-lg justify-center p-4'>
          <h1 className='text-2xl font-normal text-center my-2 tracking-wide md:text-4xl'>
            Your one-stop peer-to-peer marketplace
          </h1>
          <p className='text-lg text-center text-gray-600 md:text-2xl '>
            A secure peer-to-peer crypto exchange platform that connects crypto
            buyers and sellers to facilitate online and face-to-face crypto
            transactions. Now P2P is easier than ever!
          </p>
        </div>
        <div className='px-4 bg-gradient-to-b md:bg-gradient-to-r rounded-br-lg md:rounded-r-lg from-blue-200 to-white'>
          <img src={man} alt='' />
        </div>
      </div>
      <div className='relative bg-white   py-16 sm:py-24 lg:py-32'>
        <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-5xl xl:max-w-6xl '>
          <div>
            <h2 className='text-base font-semibold tracking-wider text-red-600 uppercase'>
              intuitive platform
            </h2>
            <p className='text-3xl font-extrabold mt-3 text-gray-900  tracking-tight sm:text-4xl'>
              Why you should choose Mybitstore for cryptocurrency trading
            </p>
            <p className=' text-xl mt-4 mx-auto text-gray-500'>
              An online marketplace that provides fast and secure ways to
              purchase bitcoin with both local and international payment
              methods. Here are reasons why you should choose our platform
            </p>
          </div>
        </div>
      </div>
      <div className='md:columns-3'>
        {whys.map(({ child, head, para }) => (
          <div className='flex justify-center items-center text-center p-6'>
            <div className=''>
              <div className='pt-6'>
                <div className='bg-gray-100 rounded-lg px-6 pb-8'>
                  <div className='-mt-6'>
                    <div className='flex items-center justify-center p-3'>
                      <span className='bg-indigo-500 p-4 text-white -mt-5 rounded-md'>
                        {child}
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium tracking-tight'>
                      <a href='#'>{head}</a>
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>{para}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full md:max-w-5xl xl:max-w-6xl mx-auto md:flex'>
        <div className='h-56 sm:h-72 md:left-0 md:h-full md:w-1/2'>
          <img src={support} className='' />
          {/* <div className=''></div> */}
        </div>
        <div className='mt-48 px-4'>
          <h2 className='uppercase text-base text-center md:text-left font-semibold tracking-wider'>
            Award Winning Support
          </h2>
          <p className='mt-2 text-center md:text-left  text-gray-700 text-3xl font-extrabold tracking-tight sm:text-4xl'>
            We're here to help
          </p>
          <p className='mt-3 text-center md:text-left text-base '>
            Your feedback is valuable to us. If you have problems with our
            platform, want to suggest a feature or report abuse, kindly use the
            form below
          </p>
          <div className='w-1/2 mx-auto'>
            <p>Visit the help center</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
