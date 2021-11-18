import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import homeBanner from "../../assets/images/4MHero.png";
import Particle from "../particle";
import Intro from "./intro";
import TypeWriter from "./type";

function showHomePage() {
    return (
        <section>
            <Container fluid className="home-container" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <img src={homeBanner} alt="logo" className="img-fluid" />
                        </Col>
                        <Col md={5} style={{textAlign: "right"}}>
                            <TypeWriter />
                        </Col>
                    </Row>
                 </Container>
            </Container>
            <Intro />
        </section>
    )
}

export default showHomePage;