import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./ThirdContainer.css";

function ThirdContainer() {
  return (
    <div className="third__container">
      <Row className="content flex-row-reverse">
        <Col md={6} className="description__container">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favourites easily and always have something to watch.
          </h2>
        </Col>
        <Col md={6} className="image__container">
          <div className="image__div">
            <img
              className="iphone__img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            />
          </div>
          <div className="downloading__card">
            <img
              className="sthings__img"
              alt=""
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
            />
            <div className="written__content">
              <h5 style={{ marginBottom: "1px" }}>Stranger Things</h5>
              <p style={{ marginBottom: "1px" }}>Downloading...</p>
            </div>
            <img
              className="DownloadingCircle"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ThirdContainer;
