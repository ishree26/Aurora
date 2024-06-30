import React from "react";
import "./Menus.css";
import { IoHome } from "react-icons/io5";
import { TiInfoLarge } from "react-icons/ti";
import { TiDeviceLaptop } from "react-icons/ti";
import { TiCode } from "react-icons/ti";
import { BsFillMortarboardFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { GrContact } from "react-icons/gr";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src={require("../Images/profile2.jpg")}alt="Profile"/>
            
          </div>
          <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link">
                <IoHome />Home</div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <TiInfoLarge />About</div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <TiDeviceLaptop />Work Experience</div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <TiCode />Tech Stack</div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <BsFillMortarboardFill />Education</div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <AiFillProject />Projects</div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <FaUserEdit />Testimonials</div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <GrContact />Contact</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link">
                <IoHome title="Home"/></div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <TiInfoLarge title="About"/></div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <TiDeviceLaptop title="Work Experience"/></div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <TiCode title="Tech Stack"/></div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <BsFillMortarboardFill title="Education"/></div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <AiFillProject title="Projects"/></div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <FaUserEdit title="Testimonials"/></div>
            </div>
            <div className="nav-item">
                <div className="nav-link">
                <GrContact title="Contact"/></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
