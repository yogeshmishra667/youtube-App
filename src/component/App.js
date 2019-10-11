import React, { useState, useEffect } from "react";
import SearchBar from "../searchBar";
import youtube from "../API/youtube";
import VideoLIst from "./videoList";
import VideoDetail from "./videoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    this.onTermSubmit("ReactJs");
  }, []);

  async function onTermSubmit(term) {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }

  function onVideoSelect(video) {
    setSelectedVideo(video);
  }

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoLIst onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
