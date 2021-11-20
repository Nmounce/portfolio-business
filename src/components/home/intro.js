import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
// import introImage from "../../assets/images/introImage.png";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillMail
} from "react-icons/ai";



function Intro() {

    return (
        <Container fluid className="home-intro-container">
            <Row>
                <Col md={12} className="home-intro-social">
                    <ul className="home-intro-social-links">
                        <li className="social-icons">
                            <a href="https://github.com/Nmounce"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons">
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://www.linkedin.com/in/dominique-nikki-mounce-20327a205/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons">
                                <AiFillLinkedin />
                            </a>
                        </li>
                        <li className="social-icons">
                        <a href="mailto:nikkicancode@gmail.com" class="js-track" data-track-action="email submission"
                    data-track-category="contact"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons">
                                <AiFillMail />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Intro;