import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const oneDoctor = data.find((doctor) => doctor.id === parseInt(id));

  const {
    doctor_name,
    fee,
    education,
    specialty_name,
    experience,
    designation,
    workplace,
    availability,
    Available,
    registration_number,
    image,
  } = oneDoctor || {};

  console.log(oneDoctor);

  return (
    <div className="hero bg-base-200 min-h-screen py-10">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img
          src={image}
          className="max-w-sm rounded-lg shadow-2xl w-full"
          alt={doctor_name}
        />
        <div>
          <h1 className="text-2xl font-bold pb-4">{doctor_name}</h1>
          <h2 className="font-black text-2xl pb-4">{education}</h2>
          <p className="font-medium text-gray-500 pb-1">Specialty:</p>
          <h3 className="pb-3 font-semibold">{specialty_name}</h3>
          <p className="font-medium text-gray-500 pb-1">Designation:</p>
          <h3 className="pb-3 font-semibold">{designation}</h3>
          <p className="font-medium text-gray-500 pb-1">Working at:</p>
          <h3 className="pb-3 font-semibold">{workplace}</h3>
          <p className="pb-2">
            <span className="font-medium">Reg No:</span> {registration_number}
          </p>

          <p className="pb-2">
            <span className="font-bold">Experience:</span> {experience}
          </p>
          {/* Available status */}
          <p className="pb-2">
            <span className="font-bold">Status: </span>
            <span
              className={`badge ${
                Available === "Available" ? "badge-success" : "badge-error"
              }`}
            >
              {Available}
            </span>
          </p>
          {/* Availability Days */}
          {availability && (
            <div className=" w-full overflow-x-auto">
              <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
                <h2 className="font-bold whitespace-nowrap text-center">
                  Available:
                </h2>
                <div className="flex gap-2 flex-wrap">
                  {availability.map((day, index) => (
                    <span
                      key={index}
                      className="badge badge-outline text-sm text-white bg-green-500 border-blue-400"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          <p className="pb-2 text-2xl">
            <span className="font-bold">Consultation Fee:</span> {fee}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
