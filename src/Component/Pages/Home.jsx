import React, { useState } from 'react';
import Hero from '../Component/MIDoutLet/Hero';
import { useLoaderData } from 'react-router';
import BelowHero from '../Component/MIDoutLet/BelowHero';

const Home = () => {
  const data = useLoaderData();
  const [doctors, setDoctors] = useState(data);


  const handleSearch = (e, text) => {
    e.preventDefault();
    
    if(text === '') return setDoctors(data)

    const searchDoctor = data.filter(
      (doctor) =>
        doctor.doctor_name.toLowerCase().includes(text.toLowerCase()) ||
        doctor.specialist.toLowerCase().includes(text.toLowerCase())
       
    );

    setDoctors(searchDoctor); 
  };

  return (
    <div>
      <Hero handleSearch={handleSearch}></Hero>
      <BelowHero doctors={doctors}></BelowHero>
    </div>
  );
};

export default Home;
