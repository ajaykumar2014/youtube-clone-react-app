import React from 'react';
import { Avatar } from '@material-ui/core';

const VideoCard = ({
  image,
  title,
  channel,
  view,
  timestamp,
  authorImg,
  authorName,
}) => {
  return (
    <div className="video__card">
      <img src={image} className="card__image" alt="images" />
      <div className="card_info">
        <Avatar alt={authorName} src={authorImg} className="avatar_image" />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {view} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
