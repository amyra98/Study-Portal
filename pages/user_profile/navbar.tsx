/*import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';


import IonIcon from '@reacticons/ionicons';
const UserProfileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-1 md:w-auto w-full flex justify-between">

          <div className={`text-3xl md:hidden  duration-500 ${open ? "rotate-0" : "rotate-360"}`} onClick={() => setOpen(!open)}>
            <IonIcon name={`${open ? "close" : "menu"}`}></IonIcon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[poppins]">
          <li>
            <Link href="/"  color="inherit" className="py-7  hover:text-berry active:text-berry font-medium tracking-wider px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/departments" className="py-7  hover:text-berry active:text-berry px-3 font-medium tracking-wider inline-block">
              Departments
            </Link>
          </li>
          <li>
            <Link href="/about" className="py-7  hover:text-berry active:text-berry font-medium tracking-wider px-3 inline-block">
              About Us
            </Link>
          </li>
         
        </ul>
       

      
       
        <ul
          className={`
        md:hidden items-center fixed w-full top-0 overflow-y-auto bottom-0 py-24 
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <div className='bg-berry text-center justify-between text-blush h-full'>
          <li >
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li >
            <Link href="/" className="py-7 px-3 inline-block">
              Departments
            </Link>
          </li>
          <li >
            <Link href="/" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
         
         
          <button className='border text-white px-6 py-2 my-7 rounded-xl'>
            Login
        </button>
         
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default UserProfileNavbar;
/*const UserProfile = () => {
  return (
    
        
<nav className="flex justify-center bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className=" flex justify-center container flex flex-wrap items-center justify-between mx-auto">
  
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="Navlist">
    <div className=" flex justify-center  m-10 hidden w-full md:block md:w-auto " id="navbar-default">
      <ul className=" flex justify-center  flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className=" mt-20 underline underline-offset-8 no-underline hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mr-15 ml-40 ">Personal Information</a>
        </li>
        <li>
          <a href="#" className=" mt-20 underline underline-offset-8 no-underline hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mr-15 ml-20">My Courses</a>
        </li>
        <li>
          <a href="#" className="mt-20 underline underline-offset-8 no-underline hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mr-15 ml-20">Change Password</a>
        </li>
        
      </ul>
    </div>
  </div>
  </div>
</nav>*/
import { useState } from "react";

export default function UserProfileNavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="bg-berry  shadow shadow-gray-300 w-100 px-8 md:px-auto">
	<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		
		<div className="text-indigo-500 md:order-1">
			
			
				
		</div>
		<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul className="flex font-semibold justify-between">
                
				<li className="underline underline-offset-8 no-underline hover:underline font-[poppins]  md:px-20 mr:7 md:py-2 text-indigo-500 font-medium"><a href="pages\user_profile\mycourses.tsx">My Courses</a></li>
				<li className="underline underline-offset-8 no-underline hover:underline font-[poppins] md:px-20 mr:7 md:py-2 hover:text-indigo-400 font-medium "><a href="pages\user_profile\changepassword.tsx">Change Password</a></li>
				<li className="underline underline-offset-8 no-underline hover:underline font-[poppins] md:px-20 mr:7 md:py-2 hover:text-indigo-400 font-medium"><a href="pages\user_profile\personalinfo.tsx">Personal Information </a></li>
				
			</ul>
		</div>
		<div className="order-2 md:order-3">
			
		</div>
	</div>
</nav>
   );
}

        /*<nav classNameName="w-full bg-purple-500 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold text-white">LOGO</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Blog</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">About US</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="javascript:void(0)">Contact US</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                    <a
                        href="javascript:void(0)"
                        className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign in
                    </a>
                    <a
                        href="javascript:void(0)"
                        className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </a>
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <a
                        href="javascript:void(0)"
                        className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign in
                    </a>
                    <a
                        href="javascript:void(0)"
                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </nav>
    );
}*/


