import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";




const ViewDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  // const oneDoctor = data.find((doctor) => doctor.id === parseInt(id));
  const oneDoctor = data.find((doctor) => doctor.id === Number(id));

  if (!oneDoctor) {
    return (
      <div className="flex flex-col items-center p-20 mt-10 justify-center  text-center bg-white">
        <h1 className="text-2xl font-bold text-red-500">No Doctor Found</h1>
        <p className="text-gray-600 mt-2">
          We couldn't find a doctor with this ID.
        </p>
        <h3 className=" pb-4 mt-4 text-lg text-gray-800">
          Invalid ID: <span className="text-blue-600 font-semibold">{id}</span>
        </h3>
         <Link to ='/'><button className="  btn bg-blue-600 text-white">View All Doctors</button></Link>
      </div>
    );
  }


  const {
    doctor_name,
    fee,
    education,
    specialty_name,
    designation,
    workplace,
    availability,
    image,
  } = oneDoctor;

  const handleBookAppointment = () => {
    const appointment = {
      doctorName: doctor_name,
      fee,
      education,
    };

    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    const isAlreadyBooked = storedAppointments.some(
      (item) => item.doctorName === doctor_name
    );

    if (isAlreadyBooked) {
      toast.warning(
        `Appointment with Dr. ${doctor_name} is already scheduled for today!`,
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
      return;
    }
    storedAppointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(storedAppointments));

    toast.success(`Appointment with Dr. ${doctor_name} booked successfully!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <>
      <div className="md:rounded-2xl shadow-xl bg-white my-3 py-6 flex flex-col items-center justify-center text-center px-3">
        <h1 className="text-2xl font-bold mb-3">Doctor’s Profile Details</h1>
        <p className="max-w-full text-base">
          A compelling doctor profile serves as your virtual handshake with
          prospective patients. It provides them with insight into your
          qualifications, specialties, and approach to patient care. An
          effective profile can help you stand out in a crowded marketplace,
          leading to increased patient inquiries and trust.
        </p>
      </div>

      <div className="hero bg-base-200 p-0 mb-3 md:rounded-3xl">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img
            src={image}
            className="max-w-xs md:h-76 rounded-lg shadow-xl"
            alt={doctor_name}
          />
          <div>
            <h1 className="text-xl font-bold pb-3">{doctor_name}</h1>
            <h2 className="font-black text-xl pb-3">{education}</h2>
            <p className="font-medium text-gray-500 pb-1">Specialty:</p>
            <h3 className="pb-2 font-semibold">{specialty_name}</h3>
            <p className="font-medium text-gray-500 pb-1">Designation:</p>
            <h3 className="pb-2 font-semibold">{designation}</h3>
            <p className="font-medium text-gray-500 pb-1">Working at:</p>
            <h3 className="pb-2 font-semibold">{workplace}</h3>

            {availability && (
              <div className="w-full overflow-x-auto">
                <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
                  <h2 className="font-bold whitespace-nowrap text-center text-sm">
                    Available:
                  </h2>
                  <div className="flex gap-2 flex-wrap">
                    {availability.map((day, index) => (
                      <span
                        key={index}
                        className="badge badge-outline text-xs text-white bg-green-500 border-blue-400"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <p className="pb-2 text-xl">
              <span className="font-bold">Consultation Fee:</span> {fee}
            </p>
          </div>
        </div>
      </div>

      <div className="md:rounded-2xl mb-2 py-2 flex flex-col text-center bg-white shadow-md mx-auto px-6">
        <h1 className="font-bold text-xl pb-1">Book an Appointment</h1>
        <ul className="flex justify-between text-sm md:text-lg">
          <li className="font-medium">Availability</li>
          <li className="badge badge-outline bg-green-400 text-white md:py-2">
            Doctor Available Today
          </li>
        </ul>
        <p className="bg-[#ffffff] text-yellow-400 py-2 text-sm md:text-base">
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </p>
        <Link to="/mybookings">
          <button
            onClick={handleBookAppointment}
            className="btn bg-blue-500 rounded-xl text-white text-sm md:text-base mt-3"
          >
            Book Appointment Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default ViewDetails;
