import React from "react";
import "./FloatingContainer.css";
import {Row,Col} from "react-bootstrap";
function FloatingContainer(props) {
  return (
    <div style={{width:"100%"}}>
      <Row className="floating__container" style={{marginRight:"10px",marginLeft:"10px"}}>
      <Col md={6}>
      <img
        className="container__img"
        src={props.image}
      />
      </Col>
      <Col md={6} className="container__disc">
        <h3>{props.heading}</h3>
        <p>{props.desc}</p>
      </Col>
    </Row>
    </div>
  );
}

export default FloatingContainer;
