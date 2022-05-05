import { Link } from 'react-router-dom';
// import NavbarItem from '../NavbarItem';
import classes from './Navbar.module.css';

function Navbar() {
    return (
        <header>
            <h1>Michael Bester</h1>
            <nav className={classes.navbar}>
                <button className={classes.btn}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/'>Home</Link></button>
                <button className={classes.btn}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/About'>About</Link></button>
                <button className={classes.btn}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/Skills'>Skills</Link></button>
                <button className={classes.btn}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/Portfolio'>Portfolio</Link></button>
                <button className={classes.btn}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/Music'>Music</Link></button>
                <button className={classes.btn}><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/Contact'>Contact</Link></button>


                {/* <h1>Michael Bester</h1>
            <div className="navbar">
                <NavbarItem text="Home" />
                <NavbarItem text="About" />
                <NavbarItem text="Skills" />
                <NavbarItem text="Portfolio" />
                <NavbarItem text="Music" />
                <NavbarItem text="Contact me" />

            </div> */}
            </nav>
        </header>
    )
}

export default Navbar;