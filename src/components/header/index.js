import React from 'react';
import './style.css';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../logo.png';

const Header = () => {
  return (
    <div className="header__app">
      <div className="header__left">
        <MenuIcon />
        <img src={logo} alt="YouTube" className="header__logo" />
      </div>
      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="input__search_botton" />
      </div>
      <div className="header__right">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
