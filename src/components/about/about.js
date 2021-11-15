import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import particle from "../particle";
import aboutCard from "./aboutCard";
import laptopImg from "../../assets/about.png";
import tech from "./tech";
import tools from "./tools";

function About() {
    return (
        <Container fluid className="about-section" >
            <particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={7} style={{}}>
                        <h1>Title goes here <strong className="strong">Other</strong></h1>
                        <aboutCard />
                    </Col>
                    <Col md={5} style={{}} className="about-image">
                        <img src={laptopImg} alt="about" className="img-fluid" />
                    </Col>
                </Row>
                <h1 className="hex-header"> The
                    <strong className="strong">Skills</strong>
                </h1>
                <techStack />

                <h1 className="hex-header"> The
                    <strong className="strong">Tools</strong>
                </h1>
                <toolStack />

                <github />
            </Container>
        </Container>
    );
}

export default About;
