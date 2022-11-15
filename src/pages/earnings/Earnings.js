import React from "react";
import "./earnings.scss";

// components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Earnings = () => {
  return (
    <div className="earnings">
      <Sidebar />
      <div className="earnings-container">
        <Navbar />
        Earnings
      </div>
    </div>
  );
};

export default Earnings;
