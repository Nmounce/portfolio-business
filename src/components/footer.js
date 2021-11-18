import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillMail,
    AiFillPhone
} from "react-icons/ai";


function Footer() {
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
                                rel="noreferrer"
                                style={{ color:"white" }}>
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://github.com/Nmounce"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color:"white" }}>
                                <AiFillLinkedin />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="mailto:"
                                target="_blank"
                                rel="noreferrer"
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

export default Footer;