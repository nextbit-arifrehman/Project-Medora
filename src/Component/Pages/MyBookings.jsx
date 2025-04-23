import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import AppointmentsChart from "./AppointmentsChart";

const MyBookings = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleCancelAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    toast.warn("Appointment has been canceled.", {
      position: "top-right",
    });
  };

  return (
    <div className="p-4">
      {appointments.length === 0 ? (
        <div className="flex items-center justify-center h-[calc(100vh-190px)]">
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-2xl">
              You Have not Booked any Appointment yet
            </h1>
            <p className="text-xl mt-2">
              Our platform connects you with verified experienced doctors across
              various specialties—all at your convenience
            </p>
            <Link to="/" className="text-xl mt-4">
              <button className="btn bg-blue-500 text-white px-4 py-2 rounded">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>

          {appointments.length > 0 && <AppointmentsChart appointments={appointments} />}

          <div className="space-y-8 pt-8 ">
            <div className="flex flex-col text-center">
              <h1 className="text-2xl font-bold mb-2 pb-4">My Appointments</h1>
              <p>
                Our platform connects you with verified, experienced doctors
                across various specialties — all at your convenience.
              </p>
            </div>
            {appointments.map((appointment, index) => (
              <div
                key={index}
                className="p-4 border rounded-2xl shadow-sm bg-white"
              >
                <h2 className="font-bold">{appointment.doctorName}</h2>
                <ul className="flex justify-between mt-2 text-left">
                  <li>Education: {appointment.education}</li>
                  <li>Appointment Fee: {appointment.fee}</li>
                </ul>
                <button
                  onClick={() => handleCancelAppointment(index)}
                  className="w-full btn bg-white text-red-600 mt-4 py-2 rounded-2xl border-red-500"
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
