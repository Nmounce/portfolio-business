import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import introImage from "../../assets/images/introImage.png";
import {
    AiFillGithub,
    AiFillLinkedIn,
    AiFillMail,
    AiFillPhone
} from "react-icons/ai";

function intro() {
    return (
        <Container fluid className="home-intro-container" id="intro">
            <div>
                <img src={introImage} className="home-intro-image" alt="company bio"></img>
            </div>
            <Row>
                <Col md={12} className="home-intro-social">
                    <h1>Get Connected</h1>
                    <ul className="home-intro-social-links">
                        <li className="social-icons">
                            <a href="https://www.linkedin.com/in/dominique-nikki-mounce-20327a205/"
                                target="_blank"
                                rel="github-link"
                                className="icon-colour home-social-icons">
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://github.com/Nmounce"
                                target="_blank"
                                rel="linkedin-link"
                                className="icon-colour home-social-icons">
                                <AiFillLinkedIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="mailto:"
                                target="_blank"
                                rel="email-link"
                                className="icon-colour home-social-icons">
                                <AiFillMail />
                            </a>
                        </li>
                        <li className="social-icons home-social-icons">
                            <AiFillPhone />
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
