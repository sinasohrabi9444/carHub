import React, { useRef } from 'react';

const VideoPlayer = ({ videoSrc , autoPlay , loop ,className}) => {
  const videoRef = useRef(null);

  return (
    <div style={{ textAlign: 'center' }}>
      <video
      loop
      autoPlay
        ref={videoRef}
        src={videoSrc}
        width="600"
        controls
        className={className}
        style={{ border: '1px solid #ccc' }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
