import React from "react";
import Navbar from "../Component/Header/Navbar";
import Footer from "../Component/Footer/Footer";
import { Outlet, useLocation, useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";
import CountUp from "react-countup";

import doctorImg from "../../assets/success-doctor.png";
import reviewImg from "../../assets/success-review.png";
import patientsImg from "../../assets/success-patients.png";
import staffsImg from "../../assets/success-staffs.png";

const Root = () => {
  const location = useLocation();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const isHomePage = location.pathname === "/";
  const hideFooterOnContact = location.pathname === "/contact";

  return (
    <>
      <Navbar />

      {/* Spinner placed below navbar */}
      {isLoading && (
        <div className="w-full py-4 text-center">
          <span className="loading loading-bars loading-xs"></span>
        </div>
      )}

      <div className="min-h-[calc(100vh-279px)]">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 xl:px-24">
          <Outlet />
        </div>
      </div>

      {isHomePage && (
        <div className="text-center py-4 text-lg font-semibold text-green-800">
          <h1 className="text-2xl font-bold">
            We Provide Best Medical Services
          </h1>
          <p>
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
          <div className="grid grid-cols-2 mx-3 sm:grid-cols-2 md:grid-cols-4 gap-6 md:mx-10 lg:mx-20 mt-6">
            <div className="bg-white p-4 shadow rounded">
              <img className="w-10 mx-auto" src={doctorImg} alt="Doctor" />
              <h1 className="font-bold text-3xl text-green-800">
                <CountUp
                  end={199}
                  duration={2}
                  enableScrollSpy
                  scrollSpyDelay={300}
                />
                +
              </h1>
              <p>Total Doctors</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <img className="w-10 mx-auto" src={reviewImg} alt="Review" />
              <h1 className="font-bold text-3xl text-green-800">
                <CountUp
                  end={467}
                  duration={2}
                  enableScrollSpy
                  scrollSpyDelay={300}
                />
                +
              </h1>
              <p>Total Reviews</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <img className="w-10 mx-auto" src={patientsImg} alt="Patients" />
              <h1 className="font-bold text-3xl text-green-800">
                <CountUp
                  end={1900}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyDelay={300}
                />
                +
              </h1>
              <p>Patients</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <img className="w-10 mx-auto" src={staffsImg} alt="Staffs" />
              <h1 className="font-bold text-3xl text-green-800">
                <CountUp
                  end={300}
                  duration={2}
                  enableScrollSpy
                  scrollSpyDelay={300}
                />
                +
              </h1>
              <p>Total Staffs</p>
            </div>
          </div>
        </div>
      )}

      {!hideFooterOnContact && <Footer />}

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
