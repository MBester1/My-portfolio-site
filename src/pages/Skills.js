import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJs, faCss3, faReact, faPhp, faGithub, faFigma, faNodeJs, faNpm, faVuejs, faGitlab, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import classes from './Skills.module.css';
// import SkillsIcon from "./SkillsIcon";
// import FooterItem from "../components/FooterItem";

function SkillsPage() {
    return (
        <div className={classes.skills}>
            {/* <div className="container pt-4 pb-3 p-md-3">
                <p>I have worked with the following technologies:</p>
            </div> */}
            <section>
                <h3>My tech stack:</h3>
                <div className="container">
                    <div className="row justify-content-evenly border rounded border-light shadow-sm p-2 mb-4">
                        <div className="col-sm-6 col-md-4 col-xl-3">
                            <div className={classes.icon}><FontAwesomeIcon icon={faHtml5} className={classes.html5}></FontAwesomeIcon>Html</div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-3">
                            <div className={classes.icon}><FontAwesomeIcon icon={faCss3} className={classes.css3}></FontAwesomeIcon>CSS</div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-3">
                            <div className={classes.icon}><FontAwesomeIcon icon={faJs} className={classes.js}></FontAwesomeIcon>Javascript</div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-3">
                            <div className={classes.icon}><FontAwesomeIcon icon={faReact} className={classes.react}></FontAwesomeIcon>React</div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-3">
                            <div className={classes.icon}><FontAwesomeIcon icon={faVuejs} className={classes.vue}></FontAwesomeIcon>Vue</div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-3">
                            <div className={classes.icon}><FontAwesomeIcon icon={faPhp} className={classes.php}></FontAwesomeIcon>PHP</div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-3">
                            <div className={classes.icon}><FontAwesomeIcon icon={faNodeJs} className={classes.nodejs}></FontAwesomeIcon>Node</div>
                        </div>
                    </div>
                </div>
                <h3>Other tools:</h3>
                <div className="container">
                    <div className="row justify-content-evenly border rounded border-light shadow-sm p-2 mb-4">
                    <div className="col-sm-6 col-md-4 col-xl-2">
                            <div className={classes.icon}><FontAwesomeIcon icon={faNpm} className={classes.npm}></FontAwesomeIcon>NPM</div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-2">
                            <div className={classes.icon}><FontAwesomeIcon icon={faFigma} className={classes.figma}></FontAwesomeIcon>Figma</div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-2">
                            <div className={classes.icon}><FontAwesomeIcon icon={faBootstrap} className={classes.bootstrap}></FontAwesomeIcon>Bootstrap</div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-2">
                            <div className={classes.icon}><FontAwesomeIcon icon={faGithub} className={classes.github}></FontAwesomeIcon>Github</div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-2">
                            <div className={classes.icon}><FontAwesomeIcon icon={faGitlab} className={classes.gitlab}></FontAwesomeIcon>Gitlab</div>
                        </div>
                    </div>
                </div>

                {/* <ul>
                        <li><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faFigma}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faNpm}></FontAwesomeIcon></li>
                    </ul> */}


                {/* <h3>MUSIC PRODUCTION:</h3>
                <ul>
                    <li>Logic Pro X</li>
                    <li>Ableton Live 11</li>
                    <li>ProTools 12</li>
                </ul>
                <hr></hr>
                <h3>LECTURING / TEACHING:</h3>
                <ul>
                    <li>Lecturer in Jazz guitar (Head of department), Jazz Improvisation I and Jazz Improvisation II - University of Cape Town</li>
                    <li>High school music teacher - 10+ years' experience</li>
                </ul>
                <hr></hr>
                <h3>LANGUAGES</h3>
                <ul>
                    <li>Fluent in English and Afrikaans</li>
                </ul>
                <hr></hr> */}
            </section>

            {/* <div className="footer">
                <FooterItem text='fb' />
                <FooterItem className='icon' text='in' />
                <FooterItem className='icon' text='tw' />
                <FooterItem className='icon' text='insta' />
                <FooterItem className='icon' text='@' />
            </div> */}
        </div >
    )
}

export default SkillsPage;