import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, likes, messages, shares, channel, description, song }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video_player"
        onClick={handleVideoPress}
        ref={videoRef}
        src={url}
      ></video>

      <VideoSidebar likes={likes} shares={shares} messages={messages} />
      <VideoFooter channel={channel} song={song} description={description} />
    </div>
  );
}

export default Video;
