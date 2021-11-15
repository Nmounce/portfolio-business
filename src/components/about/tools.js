import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
    SiVisualstudiocode,
    SiHeroku,
    SiInsomnia,
    SiCodepen,
    SiCanva
} from 'react-icons/si';


function toolStack() {
    return (
        <Row style={{}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHeroku />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiInsomnia/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiCodepen/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiCanva/>
            </Col>
        </Row>
    );
}

export default toolStack;