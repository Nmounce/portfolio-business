import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Logo from "../../assets/images/logo-home.png";
import Particle from "../particle";
import Intro from "./intro";
import Type from "./type";

function ShowHomePage() {
    return (
        <section>
            <Container fluid className="home-container" id="home">
                <Particle />
                <Container className='home-content'>
                    <Row>
                        <Col md={7} className="home-header">
                            <img src={Logo} alt="logo" className="img-fluid" />
                        </Col>
                        <Col md={3} style={{textAlign: "left"}}>
                            <Type />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Intro />
        </section>
    )
}

export default ShowHomePage;