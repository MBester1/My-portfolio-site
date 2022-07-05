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

            <div className="container main">
                <div className="row align-items-center text-center border border-light p-4 shadow-sm">

                    <div className="col-12 col-lg-3 mb-3">
                        <img src="MikeB-1.jpg" className="headshot img" alt="Handsome guy" />
                    </div>

                    <div className="col-12 col-lg-9 intro">
                        <p>
                            Hi, I’m Michael.
                            I'm a web developer living in Cape Town.
                            I am passionate about building beautiful and effective web applications,
                            teaching, playing jazz guitar, and playing with my 2 young boys.
                            Feel free to reach out to me if you’d like to chat.
                        </p>
                    </div>

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
    );
}

export default Home;