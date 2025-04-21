import React from 'react';
import { NavLink } from 'react-router';
import Logo from '../../../assets/logo.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const clickActive = ({ isActive }) =>
        isActive
          ? 'link link-hover text-black border-b-2 border-black border-dashed'
          : 'link link-hover text-gray-700';



    return (
        <footer className="footer footer-horizontal footer-center  text-base-content rounded p-4">
          
          <div to='/' className="text-2xl flex items-center"><img 
          className='w-7 h-7' src={Logo} alt="" /><span 
          className='font-extrabold text-3xl'>Phudu</span></div>
         
        <nav className="grid grid-flow-col gap-4 list-none text-xl font-medium border-b pb-4 ">
        <li><NavLink to="/" className={clickActive}>Home</NavLink>   </li>               
      <li> <NavLink to="/mybookings" className={clickActive}>My-Bookings</NavLink></li>
      <li><NavLink to="/blogs" className={clickActive}>Blogs</NavLink></li>
      <li><NavLink to="/contact" className={clickActive}>Contact Us</NavLink></li>
        </nav>
        
        {/* social media icon  */}

        <nav>
          <div className="grid grid-flow-col gap-4 items-center">
            <a href="https://www.facebook.com/nextbit.arifrehman" target="_blank" >
             <FaFacebook size="22px" />
           </a>
           <a href="https://twitter.com" target="_blank" >
             <FaTwitter size="22px" />
           </a>
           <a href="https://linkedin.com" target="_blank">
             <FaLinkedin size="22px" />
           </a>
           <a href="https://www.youtube.com/@jawed" target="_blank">
             < FaYoutube  size="22px" />
           </a>
          
           </div>
        </nav>

      </footer>
    );
};

export default Footer;