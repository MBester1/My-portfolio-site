import { Link } from "react-router-dom";
// import NavbarItem from '../NavbarItem';
import classes from "./Navbar.module.css";
import NavButton from "../NavButton";
import "../../index.css";

// const NavButton = ({ title, path }) => {
//     const location = useLocation()
//     return (<button className={`${classes.btn} ${location.pathname === path ? classes.active : ''}`}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={path}>{title}</Link></button>)
// }

function Navbar() {
  // const location = useLocation()
  // return (
  //   <div>
  //     <header className="container">
  // <button className={classes.michael}>
  //   <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
  //     <h1 className="display-4">Michael Bester</h1>
  //   </Link>
  // </button>

  //       <nav className={classes.navbar}>
  //         <div className="row text-center justify-content-evenly">
  //           <div className="col-12 col-md-3">
  //             {/* <NavButton title="Home" path="/" /> */}
  //             <a href="#home">Home</a>
  //           </div>

  //           <div className="col-12 col-md-3">
  //             {/* <NavButton title="Skills" path="/Skills" /> */}
  //             <a href="#skills">Skills</a>
  //           </div>
  //           <div className="col-12 col-md-3">
  //             {/* <NavButton title="Portfolio" path="/Portfolio" /> */}
  //             <a href="#portfolio">Portfolio</a>
  //           </div>
  //           <div className="col-12 col-md-3">
  //             {/* <NavButton title="About" path="/About" /> */}
  //             <a href="#about">About</a>
  //           </div>
  //           {/* <div className="col-12 col-md-2">
  //                           <NavButton title="Contact" path="/Contact" />
  //                       </div> */}
  //         </div>
  //       </nav>
  //     </header>
  //   </div>
  // );

  return (
    <div>
      {/* <button className={classes.michael}>
        <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
          <h1 className="display-4">Michael Bester</h1>
        </Link>
      </button> */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand nav-link" href="#home">
            <img src="mblogodarkblue.png" alt="" style={{ height: "30px" }} />
          </a>

          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav text-center">
              <a className="nav-link mx-5" aria-current="page" href="#home">
                Home
              </a>
              <a className="nav-link mx-5" href="#portfolio">
                Projects
              </a>
              <a className="nav-link mx-5" href="#skills">
                Skills
              </a>

              <a className="nav-link mx-5" href="#about">
                About
              </a>
              <a className="nav-link mx-5" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
