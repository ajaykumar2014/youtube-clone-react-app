import React, { useState, useEffect } from 'react';
import './style.css';
import VideoCard from './VideoCard';
import videos from './data/video-img.json';
import title from './data/title.json';
import faker from 'faker';

// document.querySelectorAll('a#video-title.yt-simple-endpoint.style-scope.ytd-grid-video-renderer').forEach(e=>console.log(e.title))

const youtubeVideosJson = () => {
  videos.map((img, index) =>
    console.log('videos', img, index, title[index], faker.company.companyName())
  );

  return videos.map((img, index) => ({
    id: faker.random.uuid(),
    image: img,
    title: title[index],
    channel: faker.company.companyName(),
    view: faker.random.number() + 'K ',
  }));
};

export const RecommendedVideos = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(youtubeVideosJson());
  }, []);
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
