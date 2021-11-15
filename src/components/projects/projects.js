import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Particle from "./particle";
import ProjectHex from "./projectHex";

import photos from "../..assets/projects/photos";

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
                                imgPath={photos}
                                title="title"
                                text="text"
                            />
                        </li>
                        <li className="hex">
                            <ProjectHex
                                link="link"
                                imgPath={photos}
                                title="title"
                                text="text"
                            />
                        </li>
                        <li className="hex">
                            <ProjectHex
                                link="link"
                                imgPath={photos}
                                title="title"
                                text="text"
                            />
                        </li>
                        <li className="hex">
                            <ProjectHex
                                link="link"
                                imgPath={photos}
                                title="title"
                                text="text"
                            />
                        </li>
                        <li className="hex">
                            <ProjectHex
                                link="link"
                                imgPath={photos}
                                title="title"
                                text="text"
                            />
                        </li>
                        <li className="hex">
                            <ProjectHex
                                link="link"
                                imgPath={photos}
                                title="title"
                                text="text"
                            />
                        </li>
                        <li className="hex">
                            <ProjectHex
                                link="link"
                                imgPath={photos}
                                title="title"
                                text="text"
                            />
                        </li>
                        <li className="hex">
                            <ProjectHex
                                link="link"
                                imgPath={photos}
                                title="title"
                                text="text"
                            />
                        </li>
                        <li className="hex">
                            <ProjectHex
                                link="link"
                                imgPath={photos}
                                title="title"
                                text="text"
                            />
                        </li>
                        <li className="hex">
                            <ProjectHex
                                link="link"
                                imgPath={photos}
                                title="title"
                                text="text"
                            />
                        </li>
                        <li className="hex">
                            <ProjectHex
                                link="link"
                                imgPath={photos}
                                title="title"
                                text="text"
                            />
                        </li>
                        <li className="hex">
                            <ProjectHex
                                link="link"
                                imgPath={photos}
                                title="title"
                                text="text"
                            />
                        </li>
                        <li className="hex">
                            <ProjectHex
                                link="link"
                                imgPath={photos}
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



