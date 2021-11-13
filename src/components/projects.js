import React from "react";
import Hex from "./hex";
export default function Projects() {
    return (
    <section className="projects">
        <div className="grid">
            <ul id="hexGrid">
                <Hex link="https://ubiquitous-p2.herokuapp.com/home" bg="media.giphy.com/media/4Gi8qVeVUuL3jAx9ww/giphy.gif" title="Ubiquitous Happiness" text="Design and UI" />
                {/* <li className="hex">
                    <div className="hexIn">
                        <a className="hexLink" href="https://github.com/Nmounce/E-Commerce_Back-End.git">
                            <div className='img'
                                style='background-image: url(https://media.giphy.com/media/9SIXTqBnMSLGL5SIDs/giphy.gif);'>
                            </div>
                            <h1 id="project-title">E-Commerce Back End</h1>
                            <p id="project-text">Back-End Build</p>
                        </a>
                    </div>
                </li>
                <li className="hex">
                    <div className="hexIn">
                        <a className="hexLink" href="https://github.com/Nmounce/Tech-Blog.git">
                            <div className='img'
                                style='background-image: url(https://media.giphy.com/media/58FdJOjvrRmKJgSApa/giphy.gif);'>
                            </div>
                            <h1 id="project-title">CMS-Style Tech Blog</h1>
                            <p id="project-text">Sole Developer</p>
                        </a>
                    </div>
                </li>
                <li className="hex">
                    <div className="hexIn">
                        <a className="hexLink" href=" https://nmounce.github.io/Password-Generator">
                            <div className='img'
                                style='background-image: url(https://media.giphy.com/media/kEQYXFyfpwh04Gww8E/giphy-downsized-large.gif);'>
                            </div>
                            <h1 id="project-title">Password Generator</h1>
                            <p id="project-text">Sole Developer</p>
                        </a>
                    </div>
                </li>
                <li className="hex">
                    <div className="hexIn">
                        <a className="hexLink" href=" https://gist.github.com/Nmounce/3bb29f1ef502bde3c3fb47820ea04abc">
                            <div className='img'
                                style='background-image: url(https://media.giphy.com/media/2SYpUjLGpkkIil7nuu/giphy.gif);'>
                            </div>
                            <h1 id="project-title">Regex Tutorial</h1>
                            <p id="project-text">Author</p>
                        </a>
                    </div>
                </li>
                <li className="hex">
                    <div className="hexIn">
                        <a className="hexLink"
                            href="https://afternoon-ridge-78920.herokuapp.com/?id=6178ac5eed66dbe7e3d5c1d6">
                            <div className='img'
                                style='background-image: url(https://media.giphy.com/media/dxluGtAo0YEj3GbzzR/giphy.gif);'>
                            </div>
                            <h1 id="project-title">Workout Tracker</h1>
                            <p id="project-text">Front-End Build</p>
                        </a>
                    </div>
                </li>
                <li className="hex">
                    <div className="hexIn">
                        <a className="hexLink" href="https://guarded-sands-90148.herokuapp.com/">
                            <div className='img'
                                style='background-image: url(https://media.giphy.com/media/3d9hj7UofDixfafivY/giphy.gif);'>
                            </div>
                            <h1 id="project-title">Budget Tracker</h1>
                            <p id="project-text">Modify Starter Code</p>
                        </a>
                    </div>
                </li>
                <li className="hex">
                    <div className="hexIn">
                        <a className="hexLink" href=" https://nmounce.github.io/project-01/">
                            <div className='img'
                                style='background-image: url(https://media.giphy.com/media/3oz8xEpseMV1isTuJq/giphy.gif);'>
                            </div>
                            <h1 id="project-title">Mellifluous</h1>
                            <p id="project-text">Design and UI</p>
                        </a>
                    </div>
                </li>

                <li className="hex">
                    <div className="hexIn">
                        <a className="hexLink" href="https://nmounce.github.io/read-me-generator/">
                            <div className='img'
                                style='background-image: url(https://media.giphy.com/media/5z83g65j4axkCSn6MR/giphy.gif);'>
                            </div>
                            <h1 id="project-title">README Generator</h1>
                            <p id="project-text">Sole Developer</p>
                        </a>
                    </div>
                </li>
                <li className="hex">
                    <div className="hexIn">
                        <a className="hexLink" href=" https://github.com/Nmounce/team-profile-generator.git">
                            <div className='img'
                                style='background-image: url(https://media.giphy.com/media/m9FruMaXWyTqE/giphy.gif);'>
                            </div>
                            <h1 id="project-title">Team Profile Generator</h1>
                            <p id="project-text">Sole Developer</p>
                        </a>
                    </div>
                </li>
                <li className="hex">
                    <div className="hexIn">
                        <a className="hexLink" href="https://ancient-shore-85916.herokuapp.com/">
                            <div className='img'
                                style='background-image: url(https://media.giphy.com/media/4NrISWWDDGuiIw3SMf/giphy.gif);'>
                            </div>
                            <h1 id="project-title">Note Taker</h1>
                            <p id="project-text">Back-End Build</p>
                        </a>
                    </div>
                </li>
                <li className="hex">
                    <div className="hexIn">
                        <a className="hexLink" href=" https://nmounce.github.io/monthly-day-planner/">
                            <div className='img'
                                style='background-image: url(https://media.giphy.com/media/ulb34mgm0CLfDEF9bu/giphy.gif);'>
                            </div>
                            <h1 id="project-title">Work-Day Scheduler</h1>
                            <p id="project-text">Sole Developer</p>
                        </a>
                    </div>
                </li>
                <li className="hex">
                    <div className="hexIn">
                        <a className="hexLink" href=" https://nmounce.github.io/weather-dashboard/">
                            <div className='img'
                                style='background-image: url(https://media.giphy.com/media/GAJgLPFc0IJLa/giphy.gif)'>
                            </div>
                            <h1 id="project-title">Weather Dashboard</h1>
                            <p id="project-text">Sole Developer</p>
                        </a>
                    </div>
                </li>
                <li className="hex">
                    <div className="hexIn">
                        <a className="hexLink" href="#">
                            <div className='img'
                                style='background-image: url(https://media.giphy.com/media/tSIddpTjy65lOqHPdS/giphy-downsized-large.gif)'>
                            </div>
                            <h1 id="project-title">Coming Soon!</h1>
                            <p id="project-text">New stuff on the way</p>
                        </a>
                    </div>
                </li> */}
            </ul>
        </div>


    </section>
    )
};