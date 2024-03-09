import React from "react";
import videoHomePage from "../../asset/video-homepage.mp4";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <video autoPlay loop muted>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">There's a better way to ask</div>
        <div className="title-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          repudiandae nulla ullam, veritatis necessitatibus hic rerum veniam?
          Minus laboriosam rem, quas, voluptatem rerum sit fugiat quidem
          consectetur doloribus temporibus labore!
        </div>
        <div className="title-2">
          <button>Get started. It's free</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
