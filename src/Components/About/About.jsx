import React from "react";
import "./About.css";
import AUTHIMG from '../../assets/images/AUTHIMG.jpg';

function About() {
  return (
    <div id='about' className="about-page">
      <h2>About Me</h2>
      <div className="top-section">
        <div className="left-part">
          <img src={AUTHIMG} alt="Author" />
        </div>
        <div className="right-part">
          <p>
            I am currently a third-year student pursuing a Bachelor's degree in
            Computer Science from NIT Patna. Over the past year, I have gained
            extensive experience in developing web applications. My passion for
            web development is evident not only in my practical experience but
            also in the enthusiasm and dedication I bring to each project. I
            thrive on creating innovative solutions and continuously improving
            my skills to stay abreast of the latest industry trends.
          </p>
          <p>
            In addition to my expertise in web development, I have a keen
            interest in machine learning. This interest has driven me to explore
            various aspects of the field, integrating it with my web development
            projects where possible. I am committed to leveraging my knowledge
            in both web development and machine learning to contribute
            effectively to any team and deliver impactful solutions.
          </p>
          <div className="about-skills">
            <div className="skill">
              <p>Html5 | css3</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="skill">
              <p>React Js</p>
              <hr style={{ width: "64%" }} />
            </div>
            <div className="skill">
              <p>Node Js</p>
              <hr style={{ width: "56%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="extra">
          <h2>1+</h2>
          <p>Years Of Experience</p>
        </div>
        <hr />
        <div className="extra">
          <h2>10+</h2>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="extra">
          <h2>2+</h2>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
}

export default About;
