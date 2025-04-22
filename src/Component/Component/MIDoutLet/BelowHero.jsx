import React, {  useEffect, useState } from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';
import { Link } from 'react-router';



const BelowHero = ({doctors}) => {
  
  const [showall,setshowall]=useState(false)
  const [showDoc, setshowDoc] = useState([])

  useEffect(() => {
    if(showall){
      setshowDoc(doctors)
    } 
    else{
        setshowDoc(doctors.slice(0, 6));
    }

  }, [doctors,showall]);



    return (
      <div className="py-5 ">
        <div className="flex flex-col text-center py-7 ">
          <h1 className="md:text-5xl font-bold ">Our Best Doctors</h1>
          <p className="md:text-xl font-medium py-6">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            <span className="md: inline-block">
              routine checkup or urgent consultation, book appointments in
              minutes and receive quality care you can trust.
            </span>
          </p>
        </div>
        <div
          className="grid grid-cols-1 
             md:grid-cols-2 lg:grid-cols-3 gap-7 mb-7 "
        >
          {showDoc.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>
          ))}
        </div>
        <Link className="flex justify-center">
          <button
            onClick={() =>{
              setshowall(prv => !prv)
              if(showall) window.scrollTo({ top: 0, behavior: "smooth" });

            } }
            

            className="rounded-2xl btn btn-accent bg-blue-600 font-bold text-white w-1/5" >
            {showall ? "Show less Doctors" : "Show All Doctors"}
          </button>
        </Link>
      </div>
    );
};

export default BelowHero;