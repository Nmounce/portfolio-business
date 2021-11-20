import React, { useState } from "react";
import { Container, Card, Row, Col} from "react-bootstrap";
import Particle from "../particle";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import header from "../../assets/images/project-header.png";
import '../../css/projects.css';


import photo1 from "../../assets/project-images/photo1.png";


function useHover() {
    const [hovering, setHovering] = useState(false)
    const onHoverProps = {
        onMouseEnter: () => setHovering(true),
        onMouseLeave: () => setHovering(false),
    }
    return [hovering, onHoverProps]
    };


function Projects() {

    const [linkAIsHovering, linkAHoverProps] = useHover()
    const [linkBIsHovering, linkBHoverProps] = useHover()

    return (
        <Container className="project-container">
            <Particle />
            <div className="project-section">
                <img className="project-header" src={header} alt="project header"/>
                <div className="project-cards">
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 9 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img className="project-image" src={photo1}/>
                                    <Card.ImgOverlay>
                                        <Card.Title style={{fontSize: '60px', color: '#bd0d47e7',
                                        fontFamily: 'Road Rage'}}>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Card.Text className='sub-text'>
                                        This app was part of the UC Davis Full Stack Development Coding Bootcamp program assignments.
                                        </Card.Text>
                                            <a {...linkAHoverProps} href="https://github.com/Nmounce"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="icon-colour home-social-icons">
                                                <AiFillGithub />
                                                {linkAIsHovering ? "GitHub Repo" : ""}
                                            </a>
                                            <a {...linkBHoverProps} href="https://github.com/Nmounce"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="icon-colour home-social-icons">
                                                <CgWebsite />
                                                {linkBIsHovering ? "Live Site" : ""}
                                        </a>
                                    </Card.ImgOverlay>
                                </Card>
                        </Col>
                    ))}
                </Row>
            </div>
                    {/* <li className="hex">
                        <ProjectHex
                            link="link"
                            imgPath={photo2}
                            title="title"
                            text="text"
                        />
                    </li>
                    <li className="hex">
                        <ProjectHex
                            link="link"
                            imgPath={photo3}
                            title="title"
                            text="text"
                        />
                    </li>
                    <li className="hex">
                        <ProjectHex
                            link="link"
                            imgPath={photo4}
                            title="title"
                            text="text"
                        />
                    </li>
                    <li className="hex">
                        <ProjectHex
                            link="link"
                            imgPath={photo5}
                            title="title"
                            text="text"
                        />
                    </li>
                    <li className="hex">
                        <ProjectHex
                            link="link"
                            imgPath={photo6}
                            title="title"
                            text="text"
                        />
                    </li>
                    <li className="hex">
                        <ProjectHex
                            link="link"
                            imgPath={photo7}
                            title="title"
                            text="text"
                        />
                    </li>
                    <li className="hex">
                        <ProjectHex
                            link="link"
                            imgPath={photo8}
                            title="title"
                            text="text"
                        />
                    </li>
                    <li className="hex">
                        <ProjectHex
                            link="link"
                            imgPath={photo9}
                            title="title"
                            text="text"
                        />
                    </li>
                    <li className="hex">
                        <ProjectHex
                            link="link"
                            imgPath={photo10}
                            title="title"
                            text="text"
                        />
                    </li>
                    <li className="hex">
                        <ProjectHex
                            link="link"
                            imgPath={photo11}
                            title="title"
                            text="text"
                        />
                    </li>
                    <li className="hex">
                        <ProjectHex
                            link="link"
                            imgPath={photo12}
                            title="title"
                            text="text"
                        />
                    </li>
                    <li className="hex">
                        <ProjectHex
                            link="link"
                            imgPath={photo13}
                            title="title"
                            text="text"
                        />
                    </li>
                </ul> */}
            </div>
        </Container>
    );
}

export default Projects;



