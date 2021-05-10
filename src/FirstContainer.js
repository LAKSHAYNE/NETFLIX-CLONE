import React from "react";
import "./FirstContainer.css";
import LanguageIcon from "@material-ui/icons/Language";
import { Button,Row,Col } from "react-bootstrap";

function FirstContainer() {
  return (
    <div className="first__container">
      <div className="background__imgDiv">
        <img
          className="background__image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a33204b-893d-4792-8494-b9d6cbc73848/8ed3a98a-e2c2-488d-9583-93634199485d/IN-en-20210502-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>
      <div className="header">
        <img
          className="header__logo"
          src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png"
        />
        <div className="header__options ">
          <Button
            style={{
              backgroundColor: "transparent",
              borderColor: "white",
              borderRadius: "2px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <LanguageIcon style={{ verticalAlign: "middle" }} /> English
          </Button>
          <Button
            className="signIn"
            variant="primary"
            style={{ backgroundColor: "#e50914" }}
          >
            LOGIN
          </Button>
        </div>
      </div>
      <div className="middle__part">
        <h1 className="heading">Unlimited movies, TV</h1>
        <h1 className="heading">shows and more.</h1>
        <h2 className="heading">Watch anywhere. Cancel anytime.</h2>
        <h3 className="heading">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <Row className="email__inputDiv">
          <Col md={9}>
            <input
              type="text"
              placeholder="Email Address"
              className="email__input"
            />
          </Col>
          <Col md={3}>
            <Button
              className="getStarted__button"
              variant="primary"
              style={{ backgroundColor: "#e50914" }}
            >
              Get Started &#62;
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FirstContainer;
