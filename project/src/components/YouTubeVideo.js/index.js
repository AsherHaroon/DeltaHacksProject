import React from 'react';

const YouTubeVideo = ({ videoId }) => {
  return (
    <div>
      <iframe
        title="youtube-video"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeVideo;