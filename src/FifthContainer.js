import React from 'react'
import {Row,Col} from "react-bootstrap"
import "./FifthContainer.css"
function FifthContainer() {
    return (
        <div className="fifth__container">
            <Row className="content flex-row-reverse">
                <Col md={6} className="written__content">
                    <h1>Create profiles for children.</h1>
                    <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
                </Col>
                <Col md={6} className="animation">
                    <div className="animation">
                        <img className="child__img" src="https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FifthContainer
