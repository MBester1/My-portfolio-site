import React from "react";
import classes from "./Portfolio.module.css";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function PortfolioPage() {
  return (
    <div id="portfolio" className={classes.main}>
      <div className="row align-items-center text-center border border-dark p-4 shadow-sm mb-2">
        <div className="col-12">
          <h4>1 / Portfolio</h4>
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
              <button className={classes.icon}>
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
              <button className={classes.icon}>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className={classes.github}
                ></FontAwesomeIcon>
              </button>
            </ExternalLink>
          </div>
        </div>
      </div>
      <div className="row align-items-center text-center border border-dark p-4 shadow-sm mb-2">
        <div className="col-12">
          <h4>2 / Full-stack to-do app</h4>
          <p className="fw-light">
            Built from scratch using Vue JS for the User Interface, and Node JS
            with Express for the backend server. All connected to Firebase for
            the database and auth functionality.
          </p>
          <div className="col-12">
            <ExternalLink
              href="https://my-meetups-app.web.app/login"
              style={{ color: "inherit", textDecoration: "inherit" }}
              className={classes.btn}
            >
              <button className={classes.icon}>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className={classes.github}
                ></FontAwesomeIcon>
              </button>
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
