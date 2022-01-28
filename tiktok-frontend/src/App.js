import "./App.css";
import Video from "./Video";
import axios from "./axios";
import React, { useState, useEffect } from "react";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ url, likes, messages, shares, channel, description, song }) => (
            <Video
              url={url}
              likes={likes}
              shares={shares}
              messages={messages}
              channel={channel}
              song={song}
              description={description}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
