import React from "react";
import { FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-line">About</h1>
      <div className="about-self">
        <div className="ankit-info">
          <h2 className="work">Web Developer</h2>
          <h2 className="name">Ankit Chandra</h2>
          <h2 className="age">Age : 21</h2>
          <p className="para">
            <span className="carrer">Career Objective : </span>To pursue a
            challenging career and be part of a progressive organization that
            gives scope to enhance my knowledge, skillsand to reach the pinnacle
            in the computing and research fields with sheer determination
            dedication and hard work.
          </p>
          <p className="contact">
            Contact us :
            <span className="contact-us"> ankitchandra8783@gmail.com</span>
          </p>
        </div>
        <div className="hand-shake">
          <FaHandshake className="hand" />
        </div>
        <div className="rahul-info">
          <h2 className="work">Web Designer</h2>
          <h2 className="name">Rahul Bisht</h2>
          <h2 className="age">Age : 21</h2>
          <p className="para">
            <span className="carrer">Career Objective : </span>To pursue a
            challenging career and be part of a progressive organization that
            gives scope to enhance my knowledge, skillsand to reach the pinnacle
            in the computing and research fields with sheer determination
            dedication and hard work.
          </p>
          <p className="contact">
            Contact us :
            <span className="contact-us"> rahulbisht2345@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
