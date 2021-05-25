import React from 'react'
import "./FirstContainer.css"
import { Button,Row,Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import LanguageIcon from "@material-ui/icons/Language";

function Header() {
    return (
        <div className="header__wrapper">
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
          <Link to="/">
          <Button
            className="signIn"
            variant="primary"
            style={{ backgroundColor: "#e50914" }}
          >
            LOGIN
          </Button>
          </Link>
        </div>
      </div>
      </div>
    )
}

export default Header
