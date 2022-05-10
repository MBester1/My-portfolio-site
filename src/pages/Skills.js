import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJs, faCss3, faReact, faPhp, faGithub, faFigma, faNodeJs, faNpm } from '@fortawesome/free-brands-svg-icons';
import classes from './Skills.module.css';
// import SkillsIcon from "./SkillsIcon";
// import FooterItem from "../components/FooterItem";

function SkillsPage() {
    return (
        <div className={classes.skills}>
            <h2></h2>
            <section>

                <h3>SOFTWARE:</h3>
                <div className={classes.icon_container}>
                    <span><FontAwesomeIcon icon={faHtml5} className={classes.html5}></FontAwesomeIcon></span>
                    <FontAwesomeIcon icon={faCss3} className={classes.css3}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faJs} className={classes.js}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faReact} className={classes.react}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faPhp} className={classes.php}></FontAwesomeIcon>
                </div>
                {/* <ul>
                        <li><FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faCss3}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faJs}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faReact}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon={faPhp}></FontAwesomeIcon></li>
                    </ul> */}



                <h3>TOOLS:</h3>
                <div className={classes.icon_container}>
                    <FontAwesomeIcon icon={faGithub} className={classes.github}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faFigma} className={classes.figma}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faNodeJs} className={classes.nodejs}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faNpm} className={classes.npm}></FontAwesomeIcon>

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