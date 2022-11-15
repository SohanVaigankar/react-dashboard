import React from "react";
import "./activity.scss";

// components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Activity = () => {
  return (
    <div className="activity">
      <Sidebar />
      <div className="activity-container">
        <Navbar />
        Activity
      </div>
    </div>
  );
};

export default Activity;
