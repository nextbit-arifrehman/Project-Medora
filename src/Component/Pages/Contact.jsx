import React from "react";

const Classic404Page = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "bold",
          color: "#343a40",
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          color: "#6c757d",
          marginTop: "20px",
        }}
      >
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => window.location.replace("/")}
        style={{
          marginTop: "30px",
          padding: "12px 20px",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Classic404Page;
