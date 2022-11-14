import React, { useContext } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

// material ui
import Tooltip from "@mui/material/Tooltip";

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

// context
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import {
  ENABLE_DARK_THEME,
  ENABLE_LIGHT_THEME,
  AUTOMATIC_THEME,
  LOGOUT,
} from "../../context/actions.type";

const Sidebar = () => {
  const { dispatch } = useContext(ThemeContext);
  const authContext = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">redash</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">SERVICES</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <UsersIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <ProductsIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <OrdersIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <DeliveryIcon className="icon" />
              <span>Delivery</span>
            </li>
          </Link>
          <p className="title">UPDATES</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <StatsIcon className="icon" />
              <span>Stats</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <NotificationsIcon className="icon" />
              <span>Notifications</span>
            </li>
          </Link>
          <p className="title">UTILITY</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <SystemHealthIcon className="icon" />
              <span>System Health</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <LogsIcon className="icon" />
              <span>Logs</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <ProfileIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link
            to="/"
            className="logout"
            onClick={() => {
              authContext.dispatch({ type: LOGOUT });
            }}
          >
            <li>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <p className="bottom-title">THEMES</p>
      <div className="bottom">
        <Tooltip title="Light Theme" arrow>
          <div
            className="theme-option"
            onClick={() => dispatch({ type: ENABLE_LIGHT_THEME })}
          ></div>
        </Tooltip>
        <Tooltip title="Dark Theme" arrow>
          <div
            className="theme-option"
            onClick={() => dispatch({ type: ENABLE_DARK_THEME })}
          ></div>
        </Tooltip>
        <Tooltip title="Automatic" arrow>
          <div
            className="theme-option"
            onClick={() => dispatch({ type: AUTOMATIC_THEME })}
          >
            <div></div>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
