import React from 'react';
import './style.css';
import VideoCard from './VideoCard';
import me from '../../me.jpg';
export const RecommendedVideos = ({ data }) => {
  //youtubeVideosJson();
  return (
    <div className="right-section">
      <h2> Recommended </h2>
      <div className="video_rec_list">
        {data &&
          data.map((d) => {
            return (
              <VideoCard
                image={d.image}
                title={d.title}
                channel={d.channel}
                view={d.view}
                authorImg={me}
                authorName="Ajay Kumar Gupta"
              ></VideoCard>
            );
          })}
        {/* <VideoCard
          image="https://i.ytimg.com/vi/qfd52B2DJ6g/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD28_-88s9nfsmq5fcD-pNHGTb33Q"
          title=""
          channel=""
          view=""
        />
        <VideoCard image="https://i.ytimg.com/vi/bgpaVpKg4gc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD2NC0RxOumW1exwmeotaFaEy8w7Q" />
        <VideoCard image="https://i.ytimg.com/vi/hBu0w1-y7mQ/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC6AGWY1160FBSxELo30aq7dY3uXg" />
        <VideoCard image="https://i.ytimg.com/vi/f9PAkQLBIt8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBqRPbVcFX7j2W3cQTwNR92h0fY5Q" /> */}
      </div>
    </div>
  );
};
