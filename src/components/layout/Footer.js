// import FooterItem from "../components/FooterItem";

import classes from './Footer.module.css';

import React from 'react';
// import { ExternalLink } from 'react-external-link';
// import { SocialIcon } from 'react-social-icons';
import { SocialMediaIconsReact } from 'social-media-icons-react';


function Footer() {
    return (
        <div>
            <div className={classes.footer}>
                {/* <FooterItem text='fb' />
                <FooterItem className='icon' text='in' />
                <FooterItem className='icon' text='tw' />
                <FooterItem className='icon' text='insta' />
                <FooterItem className='icon' text='@' /> */}

                {/* <button><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/Music'>fb</Link></button>
                <button><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/Music'>in</Link></button>
                <button><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/Music'>tw</Link></button>
                <button><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/Music'>ins</Link></button>
                <button><Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/Music'>@</Link></button> */}

                {/* <ExternalLink href="https://www.facebook.com/michael.a.bester.1" style={{ color: 'inherit', textDecoration: 'inherit' }} className={classes.btn}>
                    fb
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
                <ExternalLink href="https://github.com/MBester1/My-portfolio-site" style={{ color: 'inherit', textDecoration: 'inherit' }} className={classes.btn}>
                    <span>gitHub</span>
                </ExternalLink> */}

                {/* <SocialIcon url="https://twitter.com/michaelbguitar" />
                <SocialIcon url="https://www.facebook.com/michael.a.bester.1" />
                <SocialIcon url="https://www.instagram.com/michael_bester_music/?hl=en" />
                <SocialIcon url="https://www.linkedin.com/in/michael-bester-3a7384143/" />
                <SocialIcon url="https://github.com/MBester1/" />
                <SocialIcon url="mailto:michaelbesterguitar@gmail.com?body=My custom mail body" /> */}


                {/* <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://twitter.com/michaelbguitar" size="48" /> */}
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(94, 97, 96, 1)" iconSize="3" roundness="50%" url="https://twitter.com/michaelbguitar" size="33" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(94, 97, 96, 1)" iconSize="3" roundness="50%" url="https://www.facebook.com/michael.a.bester.1" size="33" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(94, 97, 96, 1)" iconSize="3" roundness="50%" url="https://www.instagram.com/michael_bester_music/?hl=en" size="33" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(94, 97, 96, 1)" iconSize="3" roundness="50%" url="https://www.linkedin.com/in/michael-bester-3a7384143/" size="33" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(94, 97, 96, 1)" iconSize="3" roundness="50%" url="https://github.com/MBester1/" size="33" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(94, 97, 96, 1)" iconSize="3" roundness="50%" url="mailto:michaelbesterguitar@gmail.com?body=My custom mail body" size="33" />
            </div>
        </div >
    )
}

export default Footer;