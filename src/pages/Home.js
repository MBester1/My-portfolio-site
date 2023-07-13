// import NavbarItem from "../components/NavbarItem";
// import FooterItem from "../components/FooterItem";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// const NavButton = ({ title, path }) => {
//   const location = useLocation();
//   return (
//     <button className="btn">
//       <Link style={{ color: "inherit", textDecoration: "inherit" }} to={path}>
//         {title}
//       </Link>
//     </button>
//   );
// };

function Home() {
  return (
    <div id="home">
      <div className="container main my-5">
        <div className="row align-items-center text-center p-4 ">
          <div className="col-12 col-lg-3 mb-3">
            <img
              src="MikeB-1.jpg"
              className="headshot img"
              alt="Handsome guy"
            />
          </div>

          <div className="col-12 col-lg-9 intro mb-3">
            <p>
              Hi, I’m Michael. I'm a full-stack web developer living in Cape
              Town. I am passionate about building beautiful and effective web
              applications. Feel free to reach out to me if you’d like to chat.
            </p>
            <a
              href="mailto:michaelbesterguitar@gmail.com?body=My custom mail body"
              target={"_blank"}
              rel="noreferrer"
            >
              <button className="icon">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </button>
            </a>
          </div>
          <div>
            {/* <div className="col-12 col-lg-9 offset-lg-3">
              <a
                href="mailto:michaelbesterguitar@gmail.com?body=My custom mail body"
                target={"_blank"}
                rel="noreferrer"
              >
                <button className="btn btn-light m-1 border shadow-sm">
                  Email me
                </button>
              </a>
              <button
                type="button"
                className="btn btn-light m-1 border shadow-sm"
              >
                View resume
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
