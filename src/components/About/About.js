import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={require("../Images/profile3.jpg")} alt="About Me" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Here's a random "About Me" text for inspiration: --- Hello! I'm an
              enthusiastic and creative individual with a passion for exploring
              new ideas and embracing challenges. My journey is driven by
              curiosity and a love for learning, which has led me to develop
              diverse skills and interests. Whether I'm working on a project,
              discovering a new hobby, or diving into a good book, I bring
              energy and a positive attitude to everything I do. I believe in
              the power of community and collaboration, and I'm always excited
              to connect with others who share a similar zest for life. Let's
              create something amazing together! ---
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
