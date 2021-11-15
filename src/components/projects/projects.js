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
                        <ProjectHex />
                    </ul>
                </div>
            </Container>
        </Container>
    );
}

export default projects;



