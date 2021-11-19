import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../particle";
import ProjectHex from "./projectHex";

import photo1 from "../../assets/hex-images/photo1.png";
import photo2 from "../../assets/hex-images/photo2.png";
import photo3 from "../../assets/hex-images/photo3.png";
import photo4 from "../../assets/hex-images/photo4.png";
import photo5 from "../../assets/hex-images/photo5.png";
import photo6 from "../../assets/hex-images/photo6.png";
import photo7 from "../../assets/hex-images/photo7.png";
import photo8 from "../../assets/hex-images/photo8.png";
import photo9 from "../../assets/hex-images/photo9.png";
import photo10 from "../../assets/hex-images/photo10.png";
import photo11 from "../../assets/hex-images/photo11.png";
import photo12 from "../../assets/hex-images/photo12.png";
import photo13 from "../../assets/hex-images/photo13.png";


function Projects() {
    return (
            <Container className="project-container">
            <Particle />
            <h1 className="projects-header" style={{ textAlign: 'center' }}>Take A Look At My Work</h1>
            <div className="grid">
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
    );
}

export default Projects;



