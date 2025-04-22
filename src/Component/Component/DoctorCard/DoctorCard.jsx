import React from "react";
import { Link } from "react-router";

const DoctorCard = ({doctor}) => {

const { image,id, experience,Available,registration_number,doctor_name,education} = doctor || [];

  return (
    <div>
      <div className="card bg-base-100 shadow-lg">
        <figure>
          <img className="w-2/3" src={image} />
        </figure>
        <div className="card-body">
          <span className="flex gap-4">
            <div className="badge badge-outline  bg-green-500 text-white border-green-500">
              {Available}
            </div>
            <div className="badge badge-outline bg-blue-500 text-white border-blue-500">
              {experience} experience
            </div>
          </span>

          <h2 className="card-title">{doctor_name}</h2>
          <h3 className="border-b-2 py-4 border-dashed">{education}</h3>
          <h3>Reg No:{registration_number}</h3>
          <Link to={`/viewdetails/${id}`} className="card-actions justify-end">
            <button
              className="btn btn-primary bg-white 
             text-blue-500 rounded-2xl w-full"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
