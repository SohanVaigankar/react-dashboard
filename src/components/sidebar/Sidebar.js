import React from "react";
import "./sidebar.scss";

// material icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import UsersIcon from "@mui/icons-material/PeopleAlt";
import ProductsIcon from "@mui/icons-material/Store";
import OrdersIcon from "@mui/icons-material/ShoppingCart";
import DeliveryIcon from "@mui/icons-material/LocalShipping";
import StatsIcon from "@mui/icons-material/Analytics";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SystemHealthIcon from "@mui/icons-material/MonitorHeart";
import LogsIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
import ProfileIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">AdminPanel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <UsersIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <ProductsIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <OrdersIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">UPDATES</p>
          <li>
            <StatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">UTILITY</p>
          <li>
            <SystemHealthIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <LogsIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <ProfileIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <p className="bottom-title">THEMES</p>
      <div className="bottom">
        <div className="theme-option"></div>
        <div className="theme-option"></div>
        <div className="theme-option"></div>
      </div>
    </div>
  );
};

export default Sidebar;
