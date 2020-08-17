import React from 'react';

import Header from './components/header';
import SideBar from './components/sidebar/index';
import { RecommendedVideos } from './components/videoJs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="app___page">
        <SideBar></SideBar>
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
