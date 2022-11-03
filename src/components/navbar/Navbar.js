import React, { useContext } from "react";
import "./navbar.scss";

// icons
import {
  LanguageOutlined as LanguageIcon,
  SearchOutlined as SearchIcon,
  DarkModeOutlined as DarkModeIcon,
  LightModeOutlined as LightModeIcon,
  FullscreenExitOutlined as MinimizeScreenIcon,
  NotificationsNoneOutlined as NotificationIcon,
  ChatBubbleOutlineOutlined as ChatsIcon,
  ListOutlined as MoreIcon,
} from "@mui/icons-material";

// context
import { ThemeContext } from "../../context/ThemeContext";
import { TOGGLE_THEME } from "../../context/actions.type";

const Navbar = () => {
  const { isDarkModeEnabled, dispatch } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="searchbar">
          <input type="text" placeholder="search..." />
          <SearchIcon />
        </div>
        <div className="nav-items">
          <div className="item">
            <LanguageIcon className="navbar-list-icon" />
            <span>English</span>
          </div>
          <div
            className="item"
            onClick={() => dispatch({ type: TOGGLE_THEME })}
          >
            {isDarkModeEnabled ? (
              <LightModeIcon className="navbar-list-icon" />
            ) : (
              <DarkModeIcon className="navbar-list-icon" />
            )}
          </div>
          <div className="item">
            <MinimizeScreenIcon className="navbar-list-icon" />
          </div>
          <div className="item">
            <NotificationIcon className="navbar-list-icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatsIcon className="navbar-list-icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MoreIcon className="navbar-list-icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="profile pic"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
