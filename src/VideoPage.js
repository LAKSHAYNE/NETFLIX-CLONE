import React from "react";
import { useParams } from "react-router";
import "./VideoPage.css";
import ReactPlayer from "react-player";
import Header from "./Header";
import Footer from "./Footer";

function VideoPage() {
  let { anime, url } = useParams();
  console.log(url);
  return (
    <div className="video__page">
    <Header/>
      <div style={{marginTop:"10px"}} className="player__container">
        <ReactPlayer
          url={"https://" + url.replace("%2F", "/")}
          playing={true}
          controls={true}
          light={true}
          pip={false}
        />
        <div className="buttons__area">
            
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default VideoPage;
