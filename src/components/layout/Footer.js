// import FooterItem from "../components/FooterItem";

import classes from "./Footer.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faGithubSquare,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { ExternalLink } from 'react-external-link';
// import { SocialIcon } from 'react-social-icons';
// import { SocialMediaIconsReact } from 'social-media-icons-react';

function Footer() {
  return (
    <div>
      <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 align-items-center text-center p-4 mt-3">
        <div className="row">
          <div className="col-3">
            <a
              href="https://github.com/MBester1/"
              target={"_blank"}
              rel="noreferrer"
            >
              <button className={classes.icon}>
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  className={classes.github}
                ></FontAwesomeIcon>
              </button>
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.instagram.com/michael_bester_music/?hl=en"
              target={"_blank"}
              rel="noreferrer"
            >
              <button className={classes.icon}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={classes.github}
                ></FontAwesomeIcon>
              </button>
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.linkedin.com/in/michael-bester-3a7384143/"
              target={"_blank"}
              rel="noreferrer"
            >
              <button className={classes.icon}>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={classes.github}
                ></FontAwesomeIcon>
              </button>
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.facebook.com/michael.a.bester.1"
              target={"_blank"}
              rel="noreferrer"
            >
              <button className={classes.icon}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={classes.github}
                ></FontAwesomeIcon>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <a href="https://iconscout.com/icons/mysql" target="_blank">
        Free Mysql Icon
      </a>{" "}
      by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a>{" "}
      on <a href="https://iconscout.com">IconScout</a>
      <a href="https://iconscout.com/icons/express" target="_blank">
        Free Express Icon
      </a>{" "}
      by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a>{" "}
      on <a href="https://iconscout.com">IconScout</a> */}
    </div>
  );
}

export default Footer;
