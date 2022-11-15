import React, { useContext } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

// material ui
import Tooltip from "@mui/material/Tooltip";

// material icons
import {
  Dashboard,
  Store as ProductsIcon,
  ShoppingCart as OrdersIcon,
  PeopleAlt as UsersIcon,
  AccountBalanceWallet as Wallet,
  CalendarMonth,
  Logout,
  Person,
  Settings,
  Article as Activity, Calculate
} from "@mui/icons-material";

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
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <Dashboard className="icon" />
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
          <Link to="/earnings" style={{ textDecoration: "none" }}>
            <li>
              <Wallet className="icon" />
              <span>Earnings</span>
            </li>
          </Link>
          <p className="title">UPDATES</p>
          <Link to="/calender" style={{ textDecoration: "none" }}>
            <li>
              <CalendarMonth className="icon" />
              <span>Calender</span>
            </li>
          </Link>
          <p className="title">UTILITY</p>
          <Link to="/calculators" style={{ textDecoration: "none" }}>
            <li>
              <Calculate className="icon" />
              <span>Calculators</span>
            </li>
          </Link>
          <Link to="/activity" style={{ textDecoration: "none" }}>
            <li>
              <Activity className="icon" />
              <span>Activity</span>
            </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <Settings className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <Person className="icon" />
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
              <Logout className="icon" />
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
