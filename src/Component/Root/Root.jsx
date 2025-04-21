import React from 'react';
import Navbar from '../Component/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-279px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;