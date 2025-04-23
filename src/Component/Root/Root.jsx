import React from "react";
import Navbar from "../Component/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Footer/Footer";
import { ToastContainer } from "react-toastify";


const Root = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-279px)]">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 xl:px-24">
          <Outlet />
        </div>
      </div>
      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
};

export default Root;
