import React from "react";

const Recent = () => {
  return (
    <>
      <div class="section video-banner pt-5">
   
          <div className="title white text-center">
                  <h2>Our Recent Interior Work</h2>
                </div>
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
