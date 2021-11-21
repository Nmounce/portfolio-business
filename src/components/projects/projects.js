import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCard";
import Particle from "../particle";
import '../../css/projects.css';

import photo1 from "../../assets/project-images/photo1.png";
import photo2 from "../../assets/project-images/photo2.png";
import photo3 from "../../assets/project-images/photo3.png";
import photo4 from "../../assets/project-images/photo4.png";
import photo5 from "../../assets/project-images/photo5.png";
import photo6 from "../../assets/project-images/photo6.png";
import photo7 from "../../assets/project-images/photo7.png";
import photo8 from "../../assets/project-images/photo8.png";
import photo9 from "../../assets/project-images/photo9.png";

function Projects() {
    return (
        <Container className="project-container">
            <Particle />
            <Container>
                <div className="project-section">
                    <img className="project-header" src="../../assets/images/project-header.png" alt="projects"/>
                    <div className="project-cards">
                        <Row style={{justifyContent: 'center'}}>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo1}
                                        title='title'
                                        text='text'
                                        subText='subtext'
                                    link='link'
                                    link2="link"
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo2}
                                        title='title'
                                        text='text'
                                        subText='subtext'
                                        link='link'
                                        link2="link"
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo3}
                                        title='title'
                                        text='text'
                                        subText='subtext'
                                        link1='link'
                                        link2="link"
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo4}
                                        title='title'
                                        text='text'
                                        subText='subtext'
                                    link='link'
                                    link2="link"
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo5}
                                        title='title'
                                        text='text'
                                        subText='subtext'
                                        link='link'
                                        link2="link"
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo6}
                                        title='title'
                                        text='text'
                                        subText='subtext'
                                        link1='link'
                                        link2="link"
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo7}
                                        title='title'
                                        text='text'
                                        subText='subtext'
                                    link='link'
                                    link2="link"
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo8}
                                        title='title'
                                        text='text'
                                        subText='subtext'
                                        link='link'
                                        link2="link"
                                    />
                            </Col>
                            <Col md={4}>
                                    <ProjectCard
                                        imgPath={photo9}
                                        title='title'
                                        text='text'
                                        subText='subtext'
                                        link1='link'
                                        link2="link"
                                    />
                            </Col>
                        </Row>
                    </div>
                </div>
                </Container>
        </Container>
    )
}

export default Projects;




// This app was part of the UC Davis Full Stack Development Coding Bootcamp program assignments.