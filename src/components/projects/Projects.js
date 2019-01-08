import React, { Component } from "react";
import "./Projects.css";

//images

import bir1 from "./2019-01-01 (3).png";
import bir2 from "./2019-01-01 (1).png";
import mad1 from "./madlib-front.png";
import mad2 from "./madlib-back.png";

class Projects extends Component {
    state = {};
    render() {
        return (
            <div className="initial-setup" id="projects">
                <div className="project-holder">
                    <h4 className="project">Projects</h4>
                    <div className="underline" />
                    <div className="row1">
                        <div className="project1">
                            <div className="project-image">
                                <img className='front' onClick={() => window.location.href = "https://negedumadblis.herokuapp.com/"}
                                    src={mad1}
                                    alt=""
                                />
                                <img className='back' onClick={() => window.location.href = "https://negedumadblis.herokuapp.com/"}
                                    src={mad2}
                                    alt=""
                                />
                            </div>
                            <div className="project-info">
                                <h3>Madlib app</h3>
                                <p>This App takes new props and pass it to a new elements
                            </p>
                                <p>
                                    <i>React.js</i>,
                                </p>
                                <li>
                                    <a href="https://negedumadblis.herokuapp.com/" target="blank" />
                                </li>
                            </div>
                        </div>
                        <div className="project1">
                            <div className="project-image">
                                <img className='front' onClick={() => window.location.href = "https://fathomless-citadel-22708.herokuapp.com/"}
                                    src={bir1}
                                    alt=""
                                />
                                <img className='back' onClick={() => window.location.href = "https://fathomless-citadel-22708.herokuapp.com/"}
                                    src={bir2}
                                    alt=""
                                />
                            </div>
                            <div className="project-info">
                                <h3>Project in one day</h3>

                                <p>
                                    <i>HTML</i>,
                                    <i>CSS</i>,
                                    <i>PYTHON</i>
                                </p>
                                <li>
                                    <a href="https://negedumadblis.herokuapp.com/" target="blank" />
                                </li>
                            </div>
                        </div>
                        <div className="project1">
                            <div className="project-image">
                                <img className='front' onClick={() => window.location.href = "https://negedumadblis.herokuapp.com/"}
                                    src={mad1}
                                    alt=""
                                />
                                <img className='back' onClick={() => window.location.href = "https://negedumadblis.herokuapp.com/"}
                                    src={mad2}
                                    alt=""
                                />
                            </div>
                            <div className="project-info">
                                <h3>Madlib app</h3>
                                <p>This App takes new props and pass it to a new elements
                            </p>
                                <p>
                                    <i>React.js</i>,
                                    <i>React.js</i>,
                                    <i>React.js</i>,
                                    <i>React.js</i>,
                                    <i>React.js</i>,
                                    <i>React.js</i>
                                </p>
                                <li>
                                    <a href="https://negedumadblis.herokuapp.com/" target="blank" />
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Projects;
