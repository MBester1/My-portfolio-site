import { Link } from 'react-router-dom';
// import NavbarItem from '../NavbarItem';
import classes from './Navbar.module.css';
import NavButton from '../NavButton';

// const NavButton = ({ title, path }) => {
//     const location = useLocation()

//     return (<button className={`${classes.btn} ${location.pathname === path ? classes.active : ''}`}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={path}>{title}</Link></button>)
// }

function Navbar() {
    // const location = useLocation()
    return (
        <div >
            <header className="container">
                <button className={classes.michael}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/'><h1 class="display-4">Michael Bester</h1></Link></button>

                <nav className={classes.navbar}>
                    <div className="row text-center justify-content-evenly">
                        <div className="col-12 col-md-3">
                            <NavButton title="Home" path="/" />
                        </div>
                        <div className="col-12 col-md-3">
                            <NavButton title="About" path="/About" />
                        </div>
                        <div className="col-12 col-md-3">
                            <NavButton title="Skills" path="/Skills" />
                        </div>
                        <div className="col-12 col-md-3">
                            <NavButton title="Portfolio" path="/Portfolio" />
                        </div>
                        {/* <div className="col-12 col-md-2">
                            <NavButton title="Contact" path="/Contact" />
                        </div> */}
                    </div>
                </nav>

            
            </header>
        </div >
    )
}

export default Navbar;