import React from "react";
import "./calender.scss";

// components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Calender = () => {
  return (
    <div className="calender">
      <Sidebar />
      <div className="calender-container">
        <Navbar />
        Calender
      </div>
    </div>
  );
};

export default Calender;
