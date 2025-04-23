import React from "react";

const Error = () => {
  return (
    <div
    
      className="flex items-center justify-center h-screen bg-gray-100"
    >
      <div className="text-center relative">
        <div
          className="w-28 h-52 bg-yellow-400 rounded-md mx-auto relative animate-bounce"
          style={{
            animation: "shake 0.1s infinite alternate",
            position: "relative",
          }}
        >
          <div
            className="absolute w-24 h-2 bg-gray-700"
            style={{ left: "-6rem", top: "90px", transform: "rotate(30deg)" }}
          ></div>
          <div
            className="absolute w-24 h-2 bg-gray-700"
            style={{ right: "-6rem", top: "90px", transform: "rotate(-30deg)" }}
          ></div>
          <div
            className="absolute w-5 h-5 rounded-full bg-yellow-300"
            style={{
              top: "80px",
              left: "calc(50% - 10px)",
              animation: "sparkFlash 0.3s infinite",
            }}
          ></div>
        </div>

        <h1 className="text-5xl font-bold text-red-500 mt-6">404 Error</h1>
        <p className="text-lg text-gray-600 mt-2">
          Oops! You got zapped. This page doesn’t exist.
        </p>

        {/* Keyframe styles */}
        <style>
          {`
            @keyframes shake {
              0% { transform: translateY(0px); }
              50% { transform: translateY(5px); }
              100% { transform: translateY(0px); }
            }

            @keyframes sparkFlash {
              0%, 100% { opacity: 0.2; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.4); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Error;
