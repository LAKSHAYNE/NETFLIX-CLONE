import React from "react";
import "./SecondContainer.css";
import { Button, Row, Col } from "react-bootstrap";

function SecondContainer() {
  return (
    <div className="second__container">
      <Row className="content">
        <Col className="description" md={6}>
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h2>
        </Col>
        <Col className="animation__container" md={6}>
          <div className="animation">
          <img
            className="TVimage"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          />
          <div className="videoDiv">
            <video className="sac_video" autoPlay playsInline muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SecondContainer;
