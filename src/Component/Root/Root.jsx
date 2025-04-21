import React from 'react';
import Navbar from '../Component/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';
import Hero from '../Component/MIDoutLet/Hero';
import Home from '../Pages/Home';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-279px)]'>
            <div className='max-w-screen-2xl mx-auto px-8 md:px-16 xl:px-24'>
            <Outlet></Outlet>
            </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;