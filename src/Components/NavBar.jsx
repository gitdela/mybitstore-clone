import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import BrandName from '../Assets/logo.svg';
import BrandNameSmall from '../Assets/logo-blue-sm.webp';
import google from '../Assets/google-play.webp';
import app from '../Assets/app-store.webp';
import iphone from '../Assets/iphone.webp';

const NavBar = () => {
  const [nav, setNav] = useState(true);
  const links = [
    {
      id: 1,
      link: 'Search Offer',
    },
    {
      id: 2,
      link: 'OTC/Bulk Trade',
    },
    {
      id: 3,
      link: 'Become an Affiliate',
    },
    {
      id: 4,
      link: 'Blog',
    },
  ];
  return (
    <div className='relative bg-gradient-to-r from-slate-200 via-indigo-300 to-indigo-300'>
      <div className='px-4 max-w-screen-xl py-4 mx-auto flex justify-between items-center'>
        <img src={BrandName} />
        <ul className='hidden md:flex'>
          {links.map(({ id, link }) => (
            <li key={id} className='px-3 cursor-pointer whitespace-nowrap'>
              <a href=''>{link}</a>
            </li>
          ))}
        </ul>
        <div className='hidden md:flex'>
          <button className='px-4 py-2 border-solid'>Log In</button>
          <button className='p-2.5 bg-customBlue text-white rounded justify-center items-center inline-flex'>
            Create a free account
          </button>
        </div>
        <div
          className='cursor-pointer pr-3 md:hidden z-20'
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>
        {!nav && (
          <ul className='bg-white flex flex-col absolute top-3 w-11/12 rounded-md z-10'>
            <div className='px-3 pt-2 pb-4'>
              <img src={BrandNameSmall} className='w-1/12' />
            </div>
            {links.map(({ id, link }) => (
              <li key={id} className='px-3 py-3 cursor-pointer'>
                <a href=''>{link}</a>
              </li>
            ))}
            <div className='my-4'>
              <button className='bg-customBlue w-fit ml-3 my-3 py-3 px-2 text-white rounded justify-center items-center whitespace-nowrap inline-flex'>
                Create a free account
              </button>
              <p className='ml-3'>
                <span className='text-gray-500'>Existing customer?</span>{' '}
                <span className='text-black'>Log In</span>
              </p>
            </div>
          </ul>
        )}
      </div>
      <div className='relative px-4 md:max-w-screen-xl mx-auto mt-10 text-center'>
        <h1 className='text-4xl my-4 md:hidden'>
          A better way to <br /> buy bitcoin
        </h1>
        <h1 className='hidden md:block text-6xl font-medium my-4'>
          A better way to buy bitcoin
        </h1>
        <p className='text-sm mb-6'>
          Mybitstore is the convenient and easy way to buy and sell
          cryptocurrencies
        </p>
        <div className='mx-auto'>
          <a
            href='#'
            className='bg-blue-100 flex w-fit mx-auto px-2 py-1 rounded-full text-customBlue text-sm'
          >
            Buy, sell and convert Bitcoin now
            <span className='flex justify-center items-center'>
              <MdOutlineKeyboardArrowRight size={20} className='ml-1' />
            </span>
          </a>
        </div>
        <div>
          <p className='my-4 text-sm md:text-base'>
            Fast and easy way to purchase cryptos using our P2P escrow system
            across the world using over 250 payment methods.
          </p>
          <div className='w-3/4 mx-auto flex justify-center gap-4 items-center pt-6 pb-24'>
            <a href=''>
              <img src={google} className='w-25' />
            </a>
            <a href=''>
              <img src={app} className='w-25' />
            </a>
          </div>
        </div>
        <div className='flex justify-center items-center absolute mt-[-90px] w-11/12 z-11'>
          <img src={iphone} className='' />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
