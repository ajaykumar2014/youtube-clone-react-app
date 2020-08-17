import React from 'react';
import SideBarRow from './sidebar-row';
import './style.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const SideBar = () => {
  return (
    <div className="left__sidebar">
      <SideBarRow Icon={HomeIcon} title="Home"></SideBarRow>
      <SideBarRow Icon={WhatshotIcon} title="Trending"></SideBarRow>
      <SideBarRow Icon={SubscriptionsIcon} title="Subscriptions"></SideBarRow>
      <hr />
      <SideBarRow Icon={HistoryIcon} title="History"></SideBarRow>
      <SideBarRow Icon={VideoLibraryIcon} title="Library"></SideBarRow>
      <SideBarRow Icon={WatchLaterIcon} title="Watch Later"></SideBarRow>
      <SideBarRow Icon={ThumbUpIcon} title="Like Videos"></SideBarRow>
    </div>
  );
};

export default SideBar;
