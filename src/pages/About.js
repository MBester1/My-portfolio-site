import React from "react";
import { ExternalLink } from 'react-external-link';
// import FooterItem from "../components/FooterItem";

function AboutPage() {
    return (
        <div>
            <div className="container pt-5 pt-md-1">
                <div className="row justify-content-between align-items-center py-3">
                    <div className="col-12 col-lg-5">
                        {/* <img src="Besters.jpg" className="img-fluid" alt="My good-looking family" /> */}
                        <img src="Michael2.jpg" className="img-fluid" alt="Mike playing red guitar" />

                    </div>
                    <div className="col-12 col-lg-7 mt-3 mt-lg-0">
                        <p className="aboutPara">I grew up in Pretoria, South Africa, but I've lived in Cape Town, London, Valencia (Spain),
                            Grahamstown and Johannesburg over the years.
                        </p>
                        <br></br>
                        <br></br>
                        <p className="aboutPara">I have been a musician for most of my life, and music has taken me all over the world.
                            Recently I have had the pleasure of releasing my own music and performing regularly with my own band, which has been
                            hugely rewarding. You can hear my music at -
                            <ExternalLink href="https://www.michaelbester.co.za/sounds" style={{ color: 'inherit' }}
                                className=''>THIS LINK.</ExternalLink>
                        </p>
                        <br></br>
                        <br></br>
                        <p className="aboutPara">Web development has been a very exciting challenge that has taken me outside of my
                            comfort zone and caused me to grow immensely. To be learning an entirely new skill while also raising two small kids
                            has been an exciting new challenge and has taught me incredible determination and focus.</p>
                    </div>

                </div>
            </div>
        </div >

    )
}

export default AboutPage;