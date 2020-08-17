import React, { useState, useEffect } from 'react';

import Header from './components/header';
import SideBar from './components/sidebar/index';
import { RecommendedVideos } from './components/videoJs';
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

const youtubeVideos = youtubeVideosJson();
function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(youtubeVideos);
  const onSeachHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query && query.length > 0) {
      setData((data) =>
        data.filter(
          (d) => d.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
        )
      );
    } else {
      setData(youtubeVideos);
    }
  }, [query]);

  return (
    <div className="App">
      <Header onSearchEvent={onSeachHandler}></Header>
      <div className="app___page">
        <SideBar></SideBar>
        <RecommendedVideos data={data} />
      </div>
    </div>
  );
}

export default App;
