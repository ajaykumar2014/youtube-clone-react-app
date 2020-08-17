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
const SideBar = ({ toggle }) => {
  return (
    <div className="left__sidebar ">
      <div>
        <SideBarRow
          Icon={HomeIcon}
          title="Home"
          color="secondary"
          toggle={toggle}
        ></SideBarRow>
        <SideBarRow
          Icon={WhatshotIcon}
          title="Trending"
          toggle={toggle}
        ></SideBarRow>
        <SideBarRow
          Icon={SubscriptionsIcon}
          title="Subscriptions"
          toggle={toggle}
        ></SideBarRow>
        <hr />
        <SideBarRow
          Icon={HistoryIcon}
          title="History"
          toggle={toggle}
        ></SideBarRow>
        <SideBarRow
          Icon={VideoLibraryIcon}
          title="Library"
          toggle={toggle}
        ></SideBarRow>
        <SideBarRow
          Icon={WatchLaterIcon}
          title="Watch Later"
          toggle={toggle}
        ></SideBarRow>
        <SideBarRow
          Icon={ThumbUpIcon}
          title="Like Videos"
          toggle={toggle}
        ></SideBarRow>
      </div>
    </div>
  );
};

export default SideBar;
