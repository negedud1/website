import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
    state = {};
    findPos(obj) {
        var curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop;
            } while ((obj = obj.offsetParent));
            return [curtop];
        }
    }
    render() {
        return (
            <div>
                <main className="initial-setup">
                    <header className="landing-page-header">
                        <section className="nav-link-holder">
                            <h5
                                onClick={() =>
                                    window.scrollTo(
                                        0,
                                        this.findPos(document.getElementById("projects"))
                                    )
                                }
                            >
                                PROJECTS
            </h5>
                            <h5
                                onClick={() =>
                                    window.scrollTo(
                                        0,
                                        this.findPos(document.getElementById("skills"))
                                    )
                                }
                            >
                                SKILLS
            </h5>
                            <h2>DANIEL NEGEDU</h2>
                            <h5
                                onClick={() =>
                                    window.scrollTo(
                                        0,
                                        this.findPos(document.getElementById("about"))
                                    )
                                }
                            >
                                ABOUT
            </h5>
                            <h5
                                onClick={() =>
                                    window.scrollTo(
                                        0,
                                        this.findPos(document.getElementById("contact"))
                                    )
                                }
                            >
                                CONTACT
            </h5>
                        </section>
                    </header>
                </main>
            </div>
        );
    }
}
export default NavBar;
