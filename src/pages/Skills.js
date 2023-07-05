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
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Skills.module.css";
// import SkillsIcon from "./SkillsIcon";
// import FooterItem from "../components/FooterItem";

function SkillsPage() {
  return (
    <div className={classes.skills} id="skills">
      <section>
        <div className="container">
          <h3>My tech stack:</h3>
          <div className="row  border rounded border-dark shadow-sm p-2 mb-4">
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
                  icon={faPhp}
                  className={classes.php}
                ></FontAwesomeIcon>
                PHP
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faNodeJs}
                  className={classes.nodejs}
                ></FontAwesomeIcon>
                Node
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h3>Other tools:</h3>
          <div className="row justify-content-evenly border rounded border-dark shadow-sm p-2 mb-4">
            <div className="col-6 col-md-4 col-xl-2">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faNpm}
                  className={classes.npm}
                ></FontAwesomeIcon>
                NPM
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-2">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faFigma}
                  className={classes.figma}
                ></FontAwesomeIcon>
                Figma
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-2">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faBootstrap}
                  className={classes.bootstrap}
                ></FontAwesomeIcon>
                Bootstrap
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-2">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className={classes.github}
                ></FontAwesomeIcon>
                Github
              </div>
            </div>
            {/* <div className="col-sm-6 col-md-4 col-xl-2">
              <div className={classes.icon}>
                <FontAwesomeIcon
                  icon={faGitlab}
                  className={classes.gitlab}
                ></FontAwesomeIcon>
                Gitlab
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;
