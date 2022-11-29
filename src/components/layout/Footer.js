// import FooterItem from "../components/FooterItem";

import classes from './Footer.module.css';

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faGithubSquare, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { ExternalLink } from 'react-external-link';
// import { SocialIcon } from 'react-social-icons';
// import { SocialMediaIconsReact } from 'social-media-icons-react';


function Footer() {
    return (

        <div className={classes.footer}>

            <div className="row">
                {/* <div className="col-4 col-md-2 py-2 px-1">
                    <button className={classes.icon}><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(94, 97, 96, 1)" iconSize="3" roundness="50%" url="https://twitter.com/michaelbguitar" size="30" /></button>
                </div>
                <div className="col-4 col-md-2 py-2 px-1">
                    <button className={classes.icon}><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(94, 97, 96, 1)" iconSize="3" roundness="50%" url="https://www.instagram.com/michael_bester_music/?hl=en" size="30" /></button>
                </div>
                <div className="col-4 col-md-2 py-2 px-1">
                    <button className={classes.icon}><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(94, 97, 96, 1)" iconSize="3" roundness="50%" url="https://www.linkedin.com/in/michael-bester-3a7384143/" size="30" /></button>
                </div>
                <div className="col-4 col-md-2 py-2 px-1">
                    <button className={classes.icon}><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(94, 97, 96, 1)" iconSize="3" roundness="50%" url="https://www.facebook.com/michael.a.bester.1" size="30" /></button>
                </div>
                <div className="col-4 col-md-2 py-2 px-1">
                    <button className={classes.icon}><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(94, 97, 96, 1)" iconSize="3" roundness="50%" url="https://github.com/MBester1/" size="30" /></button>
                </div>
                <div className="col-4 col-md-2 py-2 px-1">
                    <button className={classes.icon}><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(94, 97, 96, 1)" iconSize="3" roundness="50%" url="mailto:michaelbesterguitar@gmail.com?body=My custom mail body" size="30" /></button>
                </div> */}

                {/* <div className="col-4 col-md-2 py-2 px-1">
                    <a href='https://twitter.com/michaelbguitar' target={"_blank"} rel="noreferrer">
                    <button className={classes.icon}><FontAwesomeIcon  icon={faTwitter} className={classes.github}></FontAwesomeIcon></button></a>
                </div> */}
                <div className="col-4 col-md-2 py-2 px-1">
                    <a href='mailto:michaelbesterguitar@gmail.com?body=My custom mail body' target={"_blank"} rel="noreferrer">
                    <button className={classes.icon}><FontAwesomeIcon  icon={faEnvelope} className={classes.github}></FontAwesomeIcon></button></a>
                </div>
                <div className="col-4 col-md-2 py-2 px-1">
                    <a href='https://github.com/MBester1/' target={"_blank"} rel="noreferrer">
                    <button className={classes.icon}><FontAwesomeIcon  icon={faGithubSquare} className={classes.github}></FontAwesomeIcon></button></a>
                </div>
                <div className="col-4 col-md-2 py-2 px-1">
                    <a href='https://gitlab.com/mikebester' target={"_blank"} rel="noreferrer">
                    <button className={classes.icon}><FontAwesomeIcon  icon={faGitlab} className={classes.github}></FontAwesomeIcon></button></a>
                </div>
                <div className="col-4 col-md-2 py-2 px-1">
                    <a href='https://www.instagram.com/michael_bester_music/?hl=en' target={"_blank"} rel="noreferrer">
                    <button className={classes.icon}><FontAwesomeIcon  icon={faInstagram} className={classes.github}></FontAwesomeIcon></button></a>
                </div>
                <div className="col-4 col-md-2 py-2 px-1">
                    <a href='https://www.linkedin.com/in/michael-bester-3a7384143/' target={"_blank"} rel="noreferrer">
                    <button className={classes.icon}><FontAwesomeIcon  icon={faLinkedin} className={classes.github}></FontAwesomeIcon></button></a>
                </div>
                <div className="col-4 col-md-2 py-2 px-1">
                    <a href='https://www.facebook.com/michael.a.bester.1' target={"_blank"} rel="noreferrer">
                    <button className={classes.icon}><FontAwesomeIcon  icon={faFacebook} className={classes.github}></FontAwesomeIcon></button></a>
                </div>
            </div>

        </div>

    )
}

export default Footer;