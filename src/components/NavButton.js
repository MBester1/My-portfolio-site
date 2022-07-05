import { Link, useLocation } from 'react-router-dom'
import classes from './layout/Navbar.module.css'

const NavButton = ({ title, path }) => {
    const location = useLocation()

    return (<Link className={`${classes.btn} ${location.pathname === path ? classes.active : ''}`} style={{ textDecoration: 'inherit' }} to={path}>{title}</Link>)
}

export default NavButton;
