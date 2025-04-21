
import React from 'react';
import { NavLink } from 'react-router';

const clickActive = ({ isActive }) =>
  isActive
    ? 'link link-hover text-black border-b-2 border-black border-dashed'
    : 'link link-hover text-gray-700';

const NavLinks = () => {
  return (
    <>
      <li><NavLink to="/" className={clickActive}>Home</NavLink>   </li>               
      <li> <NavLink to="/mybookings" className={clickActive}>My-Bookings</NavLink></li>
      <li><NavLink to="/blogs" className={clickActive}>Blogs</NavLink></li>
      <li><NavLink to="/contact" className={clickActive}>Contact Us</NavLink></li>
    </>
  );
};

export default NavLinks;
