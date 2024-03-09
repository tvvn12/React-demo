import React from "react";
import videoHomePage from "../../asset/video-homepage.mp4";
const HomePage = () => {
  return (
    <div>
      <video autoPlay loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePage;
