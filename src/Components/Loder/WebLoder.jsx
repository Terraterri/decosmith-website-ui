import React from "react";
import { Vortex } from "react-loader-spinner";
const WebLoder = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="spinner-container">
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={["red", "green", "blue", "yellow", "orange", "purple"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WebLoder;
