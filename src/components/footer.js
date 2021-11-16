import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillLinkedIn,
    AiFillMail,
    AiFillPhone
} from "react-icons/ai";


function footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md={4} className="footer-name">
                    <h3>Designed and Developed by</h3>
                </Col>
                <Col md={4} className="footer-name">
                    <h3>4th MT/N\ {year} </h3>
                </Col>
                <Col md={4} className="footer-body">
                    <ul className="footer-social-links">
                        <li className="social-icons">
                            <a href="https://www.linkedin.com/in/dominique-nikki-mounce-20327a205/"
                                target="_blank"
                                rel="github-link"
                                style={{ color:"white" }}>
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://github.com/Nmounce"
                                target="_blank"
                                rel="linkedin-link"
                                style={{ color:"white" }}>
                                <AiFillLinkedIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="mailto:"
                                target="_blank"
                                rel="email-link"
                                style={{ color:"white" }}>
                                <AiFillMail />
                            </a>
                        </li>
                        <li style={{ color:"white" }}>
                            <AiFillPhone />
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default footer;