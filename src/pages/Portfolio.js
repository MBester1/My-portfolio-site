import React from "react";
import classes from "./Portfolio.module.css";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

function PortfolioPage() {
  return (
    <div id="portfolio">
      <div className="row align-items-center text-center mt-3">
        <h2>Projects</h2>
        <div className={classes.line}></div>
      </div>

      {/* Project 1: */}
      <div className="row align-items-center text-center p-4 mt-3">
        <div className="col-12 mb-4">
          <h4>1. YelpCamp</h4>
          <div className="col-12 col-lg-8 offset-lg-2">
            <p className="fw-light">
              Full-stack Campsite finder app, with Mongo DB backend.
              <br />
              <small>
                <i>
                  Please note: App is hosted on free-tier hosting platform,
                  please allow 15-30 seconds for app to load...
                </i>
              </small>
            </p>
          </div>
          <div className="col-lg-6 offset-lg-3 mt-3">
            <img src="Yelp2.png" alt="" className="img-fluid mb-3" />
          </div>
          <div className="col-12">
            <a
              href="https://github.com/MBester1/Yelpcamp2.0"
              target={"_blank"}
              rel="noreferrer"
            >
              <button className="icon">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </button>
            </a>
            <ExternalLink
              href="https://mb-yelpcamp.onrender.com/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <button className="icon">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className={classes.github}
                ></FontAwesomeIcon>
              </button>
            </ExternalLink>
          </div>
        </div>
        <div className={classes.line}></div>
      </div>

      {/* Project 2: */}
      <div className="row align-items-center text-center p-4 ">
        <div className="col-12 mb-4">
          <h4>2. Full-stack to-do app</h4>
          <div className="col-12 col-lg-8 offset-lg-2">
            <p className="fw-light">
              Built from scratch using Vue JS for the User Interface, and Node
              JS with Express for the backend server. All connected to Firebase
              for the database and auth functionality.
            </p>
          </div>
          <div className="col-lg-6 offset-lg-3 mt-3">
            <img src="Todo1.png" alt="" className="img-fluid" />
          </div>

          <div className="col-12">
            <ExternalLink
              href="https://my-meetups-app.web.app/login"
              style={{ color: "inherit", textDecoration: "inherit" }}
              className={classes.btn}
            >
              <button className="icon">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className={classes.github}
                ></FontAwesomeIcon>
              </button>
            </ExternalLink>
          </div>
        </div>
        <div className={classes.line}></div>
      </div>

      {/* Project 3: */}
      <div className="row align-items-center text-center p-4 mb-4 ">
        <div className="col-12  mb-4">
          <h4>3. Personal Portfolio</h4>
          <p className="fw-light">
            My personal portfolio page, the one you are visiting right now.
            Built with React.js and Bootstrap.
          </p>
          <div className="col-12">
            <a
              href="https://github.com/MBester1/My-portfolio-site"
              target={"_blank"}
              rel="noreferrer"
            >
              <button className="icon">
                <FontAwesomeIcon
                  icon={faGithub}
                  className={classes.github}
                ></FontAwesomeIcon>
              </button>
            </a>
            <ExternalLink
              href="https://my-portfolio-site-git-master-mbester1.vercel.app/"
              style={{ color: "inherit", textDecoration: "inherit" }}
              className={classes.btn}
            >
              <button className="icon">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className={classes.github}
                />
              </button>
            </ExternalLink>
          </div>
        </div>
        {/* <div className={classes.line}></div> */}
      </div>
    </div>
  );
}

export default PortfolioPage;
