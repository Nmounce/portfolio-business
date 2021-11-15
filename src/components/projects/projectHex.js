import React from "react";

function projectHex(props) {
    return (
        <li className="hex">
            <div className="hexIn">
                <a className="hexLink" href={props.link}>
                    <img src={props.imgPath} className="hexImage"></img>
                    <h1 className="hexTitle">{props.title}</h1>
                    <p className="hexText">{props.text}</p>
                </a>
            </div>
        </li>
    );
}

export default projectHex;