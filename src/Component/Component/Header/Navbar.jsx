import React from 'react';
import Logo from '../../../assets/logo.png';
import { NavLink } from 'react-router';
import NavlInko from '../Header/NavsubLink';


const Navbar = () => {
 
    return (
        <div className="navbar p-0 bg-gray-100 shadow-sm lg:px-16 lg:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
               <NavlInko></NavlInko>
            </ul>
          </div>
          
          <NavLink to='/' className="text-2xl flex items-center"><img 
          className='w-10 h-10' src={Logo} alt="" /><span 
          className='font-extrabold text-3xl'>Phudu</span></NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-medium">
          <NavlInko></NavlInko>
            
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-blue-600 text-white rounded-4xl btn-xs
           sm:btn-sm md:btn-md lg:btn-lg :btn-xl">Emergency</a>
        </div>
      </div>
    );
};

export default Navbar;