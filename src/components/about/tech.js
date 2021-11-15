import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
    DiNodejs, DiReact, DiMongodb, DiGit, DiJavascript1, DiMysql
} from "react-icons/di";
import {
    SiBootstrap, SiJquery, SiGraphql, SiPython
} from "react-icons/si";

function techStack() {
    return (
        <Row style={{}}>
            <Col xs={4} md={2} className="tech-icons">
                <<DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiPython/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < DiMongodb/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                < SiJquery/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiBootstrap />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGraphql />
            </Col>
        </Row>
    );
}

export default techStack;