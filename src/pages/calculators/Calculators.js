import React from "react";
import "./calculators.scss";

// components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Calculators = () => {
  return (
    <div className="calculators">
      <Sidebar />
      <div className="calculators-container">
        <Navbar />
        Calculators
      </div>
    </div>
  );
};

export default Calculators;
