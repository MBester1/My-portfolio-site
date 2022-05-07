import React from "react";
import FooterItem from "../components/FooterItem";

function SkillsPage() {
    return (
        <div>
            <h2>SKILLS</h2>
            <section>
                <div>
                    <h3>SOFTWARE:</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <hr></hr>
                <div>
                    <h3>TOOLS:</h3>
                    <ul>
                        <li>Github</li>
                        <li>Figma</li>
                        <li>Visual Studio Code</li>
                        <li>Command line interface</li>
                        <li>Node js</li>
                        <li>NPM</li>
                    </ul>
                </div>
                <hr></hr>
                <h3>MUSIC PRODUCTION:</h3>
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
                <hr></hr>
            </section>

            {/* <div className="footer">
                <FooterItem text='fb' />
                <FooterItem className='icon' text='in' />
                <FooterItem className='icon' text='tw' />
                <FooterItem className='icon' text='insta' />
                <FooterItem className='icon' text='@' />
            </div> */}
        </div>
    )
}

export default SkillsPage;