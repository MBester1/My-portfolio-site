import React from "react";
import { ExternalLink } from "react-external-link";
// import FooterItem from "../components/FooterItem";
import "../index.css";

function AboutPage() {
  return (
    <div id="about" className="mt-1">
      <div className="col12 text-center mt-3">
        <h2>About</h2>

        <div className="line"></div>
      </div>
      <div className="container my-3">
        <div className="row justify-content-between align-items-center my-lg-5 ">
          <div className="col-12 col-lg-5">
            {/* <img src="Besters.jpg" className="img-fluid" alt="My good-looking family" /> */}
            <img
              src="Michael2.jpg"
              className="img-fluid"
              alt="Mike playing red guitar"
            />
          </div>
          <div className="col-12 col-lg-7 mt-3 mt-lg-0 mb-5">
            <p className="aboutPara">
              I grew up in Pretoria, South Africa, but I've lived in London,
              Valencia, Johannesburg and currently Cape Town.
            </p>
            <br></br>
            <br></br>
            <p className="aboutPara">
              I have been a musician for most of my life, and music has taught
              me a lot about working with focus, translating ideas into reality,
              and the importance of communication and teamwork in realising a
              goal.
            </p>
            <br></br>
            <br></br>
            <p className="aboutPara">
              I am inspired by the world around me, and the challenge of how to
              make it better every day. I believe technology is one of those
              ways and this motivates me to become a better developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
