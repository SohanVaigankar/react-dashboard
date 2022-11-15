import React from "react";
import "./settings.scss";

// components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Settings = () => {
  return (
    <div className="settings">
      <Sidebar />
      <div className="settings-container">
        <Navbar />
        Settings
      </div>
    </div>
  );
};

export default Settings;
