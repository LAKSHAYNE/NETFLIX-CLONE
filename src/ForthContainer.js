import React from 'react'
import {Button ,Row,Col} from 'react-bootstrap'
import './ForthContainer.css'
function ForthContainer() {
    return (
        <div className="forth__container">
            <Row className="content">
                <Col className="written__content" md={6}>
                    <h1 className="title">Watch everywhere.</h1>
                    <h2 className="desc">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                </Col>
                <Col className="animation__content" md={6}>
                    <img className="photos" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
                    <div className="video__div">
                        <video className="video"  autoPlay playsInline muted loop>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                            type="video/mp4"
                             />
                        </video>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ForthContainer
