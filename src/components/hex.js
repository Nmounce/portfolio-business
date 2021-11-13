import React from "react";

export default function Hex(props) {
    return (
                <li className="hex">
                    <div className="hexIn">
                        <a className="hexLink" href={props.link}>
                            <div className='img'
                                style={{
                                    backgroundImage: `url(https://${props.bg})`
                                }}>
                            </div>
                            <h1 id="project-title">{props.title}</h1>
                            <p id="project-text">{props.text}</p>
                        </a>
                    </div>
                </li>)
}