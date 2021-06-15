import React from 'react'
import "./SearchContainer.css"
import {Col} from "react-bootstrap"

function SearchContainer(props) {
    return (
        <Col lg={3} md={4} sm={12} className="search__contaniner">
            <img src={props.image}/>
            <h5>{props.title}</h5>
            <p>{props.desc}</p>
        </Col>
    )
}

export default SearchContainer
