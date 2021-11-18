import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Particle from "../particle";
import ProjectHex from "./projectHex";

import { photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13 } from "../../assets/projects/photo1";

function projects() {
    return (
        <Container fluid classNameName="project-container">
            <Particle />
            <h1 classNameName="projects-header" style={{ textAlign: 'center' }}>Take A Look At My Work</h1>
            <Container>
                <div classNameName="grid">
                    <ul id="hexGrid">
                        <li className="hex">
                            <ProjectHex
                                link="link"
                                imgPath={photo1}
                                title="title"
                                text="text"
                            />
                        </li>
                        <li className="hex">
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
                    </ul>
                </div>
            </Container>
        </Container>
    );
}

export default projects;



