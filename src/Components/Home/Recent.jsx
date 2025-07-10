import React from "react";

const Recent = () => {
  return (
    <>
      <div class="section video-banner">
        <h2 class="videotitle text-uppercase ">
          Our Recent <span class="videohead">Interior Work</span>
        </h2>
        <div class="banner-content">
          <video width="320" height="240" controls>
            <source src="assets/video/video.mp4" type="video/mp4"></source>
            <source src="assets/video/video.mp4" type="video/ogg"></source>
          </video>
        </div>
      </div>
    </>
  );
};

export default Recent;
