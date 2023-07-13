import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faCss3,
  faReact,
  faPhp,
  faGithub,
  faFigma,
  faNodeJs,
  faNpm,
  faVuejs,
  faGitlab,
  faBootstrap,
  faMongodb,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Skills.module.css";
import "../index.css";
// import SkillsIcon from "./SkillsIcon";
// import FooterItem from "../components/FooterItem";

function SkillsPage() {
  return (
    <div className={classes.skills} id="skills">
      <div className="row align-items-center text-center mt-3">
        <h2>Technical skills</h2>
        <div className={classes.line}></div>
      </div>
      <section className="row align-items-start text-center mb-4">
        <div className="col-12 col-lg-4 align-items-center text-center p-4 mt-3 border shadow-sm">
          <h3>Front-end:</h3>
          <div className="row rounded p-2 mb-2">
            <div className="col-6 col-md-4 col-xl-3">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faHtml5}
                  className={classes.html5}
                ></FontAwesomeIcon>
                Html
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faCss3}
                  className={classes.css3}
                ></FontAwesomeIcon>
                CSS
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faJs}
                  className={classes.js}
                ></FontAwesomeIcon>
                Javascript
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faReact}
                  className={classes.react}
                ></FontAwesomeIcon>
                React
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faVuejs}
                  className={classes.vue}
                ></FontAwesomeIcon>
                Vue
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faBootstrap}
                  className={classes.bootstrap}
                ></FontAwesomeIcon>
                Bootstrap
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4 align-items-center text-center p-4 mt-3 border shadow-sm">
          <h3>Back-end:</h3>
          <div className="row rounded p-2 mb-2">
            <div className="col-6 col-md-4 col-xl-3">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faNodeJs}
                  className={classes.nodejs}
                ></FontAwesomeIcon>
                Node
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
              <div className={classes.icon}>
                <img src="mongodb.svg" alt="" className={classes.mongo} />
                MongoDB
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
              <div className={classes.icon}>
                <img src="mysql.svg" alt="" className={classes.mongo} />
                MySQL
              </div>
            </div>

            <div className="col-6 col-md-4 col-xl-3">
              <div className={classes.icon}>
                <img src="express.svg" alt="" className={classes.express} />
                Express
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faPhp}
                  className={classes.php}
                ></FontAwesomeIcon>
                PHP
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4 align-items-center text-center p-4 mt-3 border shadow-sm">
          <h3>Other tools:</h3>
          <div className="row rounded p-2 mb-2">
            <div className="col-6 col-md-4 col-xl-4">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faNpm}
                  className={classes.npm}
                ></FontAwesomeIcon>
                NPM
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-4">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faFigma}
                  className={classes.figma}
                ></FontAwesomeIcon>
                Figma
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-4">
              <div className={classes.icon}>
                <img src="git.svg" alt="" className={classes.mongo} />
                git
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-4">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className={classes.github}
                ></FontAwesomeIcon>
                Github
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-4">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faGitlab}
                  className={classes.gitlab}
                ></FontAwesomeIcon>
                Gitlab
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;
