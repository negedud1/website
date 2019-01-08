import React, { Component } from "react";
import "./Skills.css";

//tech skills
import CSss from "./css3-original.svg";
import HTML1 from "./html5-original.svg";

import GITHUB from "./github-original.svg";
import GIT from "./git-plain.svg";
import HEROKU from "./heroku-plain.svg";
import JS from "./javascript-original.svg";
import NODE from "./nodejs.png";
import NPM from "./npm-original-wordmark.svg";
import SLACK from "./slack-original.svg";
import VSCODE from "./visualstudio-plain.svg";
import yarnu from "./yarn-original.svg";
import Redux from './reduxLogo.svg';
import PostMan from './postman.png';
import ReactNative from './react-native-svg.png'

class Skills extends Component {
  state = {};
  render() {
    return (
      <main className="testbackground" id="skills">

        <section className="skills-holder">
          <h4>Knowledge</h4>
          <div className="underline" />
          <div className="icon-holder">
            <img onClick={() => window.location.href = "https://www.getpostman.com/"}
              className="skills-icon"
              src={PostMan}
              alt=""
              width="90px"
              height="90px"
            />
            <img onClick={() => window.location.href = "https://www.npmjs.com/"} className="skills-icon" alt="" src={NPM} width="90px" height="90px" />
            <img onClick={() => window.location.href = "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"}
              className="skills-icon"
              src={CSss}
              alt=""
              width="90px"
              height="90px"

            />
            <img onClick={() => window.location.href = "https://redux.js.org/"}
              className="skills-icon"
              src={Redux}
              alt=""
              width="90px"
              height="90px"
            />
            <img onClick={() => window.location.href = "https://developer.mozilla.org/en-US/docs/Web/HTML"}
              className="skills-icon"
              src={HTML1}
              alt=""
              width="90px"
              height="90px"
            />
            <img onClick={() => window.location.href = "https://github.com/"}
              className="skills-icon"
              src={GITHUB}
              alt=""
              width="90px"
              height="90px"
            />
            <img onClick={() => window.location.href = "https://git-scm.com/"} className="skills-icon" alt="" src={GIT} width="90px" height="90px" />
            <img onClick={() => window.location.href = "https://www.heroku.com/platform"}
              className="skills-icon"
              src={HEROKU}
              alt=""
              width="90px"
              height="90px"
            />
            <img onClick={() => window.location.href = "https://facebook.github.io/react-native/"}
              className="skills-icon"
              src={ReactNative}
              alt=""
              width="90px"
              height="90px"
            />
            <img onClick={() => window.location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript"} className="skills-icon" alt="" src={JS} width="90px" height="90px" />
            <img onClick={() => window.location.href = "https://nodejs.org/en/"}
              className="skills-icon"
              src={NODE}
              alt=""
              width="90px"
              height="90px"
            />

            <img onClick={() => window.location.href = "https://slack.com/"}
              className="skills-icon"
              src={SLACK}
              alt=""
              width="90px"
              height="90px"
            />
            <img onClick={() => window.location.href = "https://code.visualstudio.com/"}
              className="skills-icon"
              src={VSCODE}
              alt=""
              width="90px"
              height="90px"
            />
            <img onClick={() => window.location.href = "https://yarnpkg.com/en/"}
              className="skills-icon"
              src={yarnu}
              alt=""
              width="90px"
              height="90px"
            />
          </div>
        </section>
      </main>
    );
  }
}
export default Skills;
