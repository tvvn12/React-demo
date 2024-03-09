import React from "react";
import videoHomePage from "../../asset/video-homepage.mp4";
const HomePage = () => {
  return (
    <div>
      <video width={750} height={500}>
        <source src={videoHomePage} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePage;
