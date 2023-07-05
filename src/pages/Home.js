// import NavbarItem from "../components/NavbarItem";
// import FooterItem from "../components/FooterItem";
import React from "react";

function Home() {
  return (
    <div id="home">
      <div className="container main">
        <div className="row align-items-center text-center border border-dark p-4 shadow-sm">
          <div className="col-12 col-lg-3 mb-3">
            <img
              src="MikeB-1.jpg"
              className="headshot img"
              alt="Handsome guy"
            />
          </div>

          <div className="col-12 col-lg-9 intro">
            <p>
              Hi, I’m Michael. I'm a web developer living in Cape Town. I am
              passionate about building beautiful and effective web
              applications, hanging out with my 2 young sons, and playing jazz
              guitar. Feel free to reach out to me if you’d like to chat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
