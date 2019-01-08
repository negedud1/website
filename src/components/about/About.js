import React, { Component } from "react";
import "./About.css";



class About extends Component {
    state = {};
    render() {
        return (
            <div className="initial-setup" id="about">
                    <div className="row">
                        <div className="h">
                            <h2 className="heading">About Me</h2>
                        </div>
                        <div className="about-image">
                        <img src="https://res.cloudinary.com/negedud/image/upload/v1546464819/daniel.jpg.jpg" alt="logo"/>
                        </div>
                        <div className="text">
                            <p>
                               I am a full stack web developer and a sales perosn who Maintains a high level of professionalism, patience, and efficiency to 
                                minimize customer dissatisfaction and increase customer loyalty,Eloquent communication skills and attentive when individuals express 
                                their opinions,Consistent in taking records, adhere strictly to instructions given and 
                                very flexible,Ability to work well with individuals from different ethnicity and 
                               focused despite work pressure and i am a team player but also have the ablilty to work alone.
                               <br />
                               I first learnt how to code when i went to a coding boothcamp called BOTTEGA in lehi utah which didnt just teach me how to code but also improve my skills to learn at a fast pace and also how to work on a team better.  
                            </p>
                        </div>

                        <div className="skills-sec">        
                          <h7>SKILLS</h7>
                          <li>Html</li>
                          <li>css</li>
                          <li>scss</li>
                          <li>javascript</li>
                          <li>python</li>
                          <li>React</li>
                          <li>sales</li>
                          <li>public speaking</li>
                        </div>

                    </div>
            </div>
            
        );
    }
}
export default About;
