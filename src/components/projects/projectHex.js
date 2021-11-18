import React from "react";

function ProjectHex(props) {
    return (
        <div className="hexIn">
            <a className="hexLink" href={props.link}>
                <img src={props.imgPath} className="hexImage" alt="images"></img>
                <h1 className="hexTitle">{props.title}</h1>
                <p className="hexText">{props.text}</p>
            </a>
        </div>
    );
}

export default ProjectHex;