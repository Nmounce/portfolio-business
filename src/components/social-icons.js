import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import {Button} from "react-bootstrap";
import '../css/social-icons.css';
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillMail
} from "react-icons/ai";


function SocialIcons() {

    return (
        <Container fluid className="home-intro-container">
            <Row>
                <Col md={12} className="home-intro-social">
                    <Button class="social-icons" variant='primary' href='https://github.com/Nmounce' target='_blank' rel='noreferrer'>
                        <AiFillGithub />
                    </Button>
                    <Button class="social-icons" variant='primary' href='https://www.linkedin.com/in/dominique-nikki-mounce-20327a205/' target='_blank' rel='noreferrer'>
                        <AiFillLinkedin />
                    </Button>
                    <Button class="social-icons js-track" variant='primary' href='mailto:nikkicancode@gmail.com' target='_blank' data-track-action='email submission' data-track-category="contact" rel='noreferrer'>
                        <AiFillMail />
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default SocialIcons;