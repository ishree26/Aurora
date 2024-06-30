import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import Resume from '../../Assets/docs/Ishika Resume.pdf'

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h1>Hello There,</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Welcome to Aurora !","I am a Software Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv" href={Resume} download="IshikaResume.pdf">My Resume</a>
            
          </div>
        </div>
      </div>
    </>
  );
};


export default Home;
