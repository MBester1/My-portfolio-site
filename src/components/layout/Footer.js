// import FooterItem from "../components/FooterItem";
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

import React from 'react';
import { ExternalLink } from 'react-external-link';

function Footer() {
    return (
        <div>
            <div className={classes.footer}>
                <ExternalLink href="https://www.facebook.com/michael.a.bester.1" style={{ color: 'inherit', textDecoration: 'inherit' }} className={classes.btn}>
                    <span>fb</span>
                </ExternalLink>
                <ExternalLink href="https://www.instagram.com/michael_bester_music/?hl=en" style={{ color: 'inherit', textDecoration: 'inherit' }} className={classes.btn}>
                    <span>insta</span>
                </ExternalLink>
                <ExternalLink href="https://twitter.com/michaelbguitar" style={{ color: 'inherit', textDecoration: 'inherit' }} className={classes.btn}>
                    <span>tw</span>
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/michael-bester-3a7384143/" style={{ color: 'inherit', textDecoration: 'inherit' }} className={classes.btn}>
                    <span>ins</span>
                </ExternalLink>
                <ExternalLink href="mailto:michaelbesterguitar@gmail.com?body=My custom mail body" style={{ color: 'inherit', textDecoration: 'inherit' }} className={classes.btn}>
                    <span>@</span>
                </ExternalLink>



                {/* <button><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/Music'>fb</Link></button>
                <button><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/Music'>in</Link></button>
                <button><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/Music'>tw</Link></button>
                <button><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/Music'>ins</Link></button>
                <button><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/Music'>@</Link></button> */}
                {/* <FooterItem text='fb' />
                <FooterItem className='icon' text='in' />
                <FooterItem className='icon' text='tw' />
                <FooterItem className='icon' text='insta' />
                <FooterItem className='icon' text='@' /> */}
            </div>
        </div >
    )
}

export default Footer;