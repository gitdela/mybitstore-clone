import React from 'react';
import Brandname from '../Assets/logo.svg';
import google from '../Assets/google-play.webp';
import app from '../Assets/app-store.webp';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='w-full py-8 mt-8 px-2 md:max-w-screen-lg md:mx-auto'>
      <div className='md:flex'>
        <div className='mx-auto md:mx-0'>
          <img src={Brandname} className='pb-6' />
          <div className='flex space-x-4'>
            <a href=''>
              <BsTwitter size={25} className='text-blue-500' />
            </a>
            <a href=''>
              <BsInstagram size={25} className='text-purple-500' />
            </a>
            <a href=''>
              <BsYoutube size={25} className='text-red-500' />
            </a>
            <a href=''>
              <BsFacebook size={25} className='text-blue-700' />
            </a>
          </div>
          <div className='flex my-4 mb-12 space-x-2 w-3/4'>
            <img src={google} className='w-1/2' alt='' />
            <img src={app} className='w-1/2' alt='' />
          </div>
        </div>
        <div className='space-y-8 md:flex md:justify-between md:space-y-0 md:space-x-6'>
          <div>
            <h3 className='font-bold'>PRODUCT</h3>
            <ul className='text-gray-500 space-y-2'>
              <li>
                <a href='#'>Buy & Sell Bitcoin</a>
              </li>
              <li>
                <a href='#'>Buy & Sell USDT</a>
              </li>
              <li>
                <a href='#'>OTC Trade</a>
              </li>
              <li>
                <a href='#'>Become an Affiliate</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold'>HELP</h3>
            <ul className='text-gray-500 space-y-2'>
              <li>
                <a href='#'>Support</a>
              </li>
              <li>
                <a href='#'>FAQ</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
              <li>
                <a href='#'>Fees & Rates</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold'>COMPANY</h3>
            <ul className='text-gray-500 space-y-2'>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Privacy</a>
              </li>
              <li>
                <a href='#'>User Terms</a>
              </li>
              <li>
                <a href='#'>Reward Terms</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold'>LEGAL</h3>
            <ul className='text-gray-500 space-y-2'>
              <li>
                <a href='#'>Reward Terms</a>
              </li>
              <li>
                <a href='#'>Risk Policy</a>
              </li>
              <li>
                <a href='#'>KYC & AML Policy</a>
              </li>
              <li>
                <a href='#'>Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='mt-2' />
      <p className='py-4 text-center'>
        2023 Mybitstore, Inc. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
