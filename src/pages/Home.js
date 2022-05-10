// import NavbarItem from "../components/NavbarItem";
// import FooterItem from "../components/FooterItem";
import React from "react";


function Home() {
    return (
        <div>

            {/* <h1>Michael Bester</h1>
            <div className="navbar">
                <NavbarItem text="Home" />
                <NavbarItem text="About" />
                <NavbarItem text="Skills" />
                <NavbarItem text="Portfolio" />
                <NavbarItem text="Music" />
                <NavbarItem text="Contact me" />

            </div> */}
            <div className="main">

                <img src="MikeB-1.jpg" className="headshot" alt="Handsome guy" />

                <span className="intro">
                    Hi, I’m Michael. <br></br>
                    I'm a web developer living in Cape Town.
                    I am passionate about building beautiful and effective web applications,
                    teaching, playing jazz guitar, and playing with my 2 young boys.
                    Feel free to reach out to me if you’d like to chat.
                </span>
            </div>
            {/* <div className="footer">
                <FooterItem text='fb' />
                <FooterItem className='icon' text='in' />
                <FooterItem className='icon' text='tw' />
                <FooterItem className='icon' text='insta' />
                <FooterItem className='icon' text='@' />
            </div> */}
        </div>
    );
}

export default Home;