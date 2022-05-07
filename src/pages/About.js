import React from "react";
import FooterItem from "../components/FooterItem";

function AboutPage() {
    return (
        <div>
            <h2>About me ...</h2>
            <div className="aboutMain">
                <div className='aboutBlock'>
                    <img src="MikeB-20.jpg" className="aboutPics" />
                    <p className="aboutPara">I grew up in Pretoria, South Africa, but I've lived in Cape Town, London, Valencia (Spain),
                        Grahamstown and Johannesburg over the years.
                    </p>
                </div>
                <div className='aboutBlock'>
                    <img src="Michael2.jpg" className="aboutPics" />
                    <p className="aboutPara">I have been a musician for most of my life, and music has taken me all over the world
                        - playing in famous bands, studying in NYC and Valencia, Spain, touring the US and Europe, playing on live TV
                        and to crowds of over 50 000. More recently I have had the pleasure of releasing my own music and performing
                        more regularly with my own band, which has been a lot of fun and hugely rewarding. You can hear my music at THIS LINK</p>
                </div>
                <div className='aboutBlock'>
                    <img src="Besters.jpg" className="aboutPics" />
                    <p className="aboutPara">Transitioning to coding has been a very exciting challenge that has taken me outside of my
                        comfort zone and caused me to grow immensely. To be learning an entirely new skill while also raising two small kids
                        has been quite a ride, but it has taught me incredible determination and focus, and has certainly changed my perspective
                        on what I am capable of!</p>
                </div>
            </div>
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

export default AboutPage;