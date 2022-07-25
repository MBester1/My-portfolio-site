import React from 'react';
import classes from './Portfolio.module.css';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { ExternalLink } from 'react-external-link';

function PortfolioPage() {
    return (
        <div className="container">
            <div className="row align-items-center text-center border border-light p-4 shadow-sm">
                <div className="col-12">
                    <h4>Portfolio</h4>
                    <p className="fw-light">My personal portfolio page, the one you are visiting right now. Built with React.js and Bootstrap.</p>
                    <button className={classes.icon}><SocialMediaIconsReact borderColor="rgba(249,245,245,0.25)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(43,43,43,1)" backgroundColor="rgba(255,255,255,1)" iconSize="9" roundness="13%" url="https://some-website.com/my-social-media-url" size="30" /></button>


                    <ExternalLink href="https://my-portfolio-site-git-master-mbester1.vercel.app/" style={{ color: 'inherit', textDecoration: 'inherit' }} className={classes.btn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                        </svg>
                    </ExternalLink>

                    {/* <p><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                    </svg></p> */}
                </div>
                <div className="col-12 col-md-3">
                    <img src="" alt="" />
                </div>
                <div className="col-12 col-md-3">
                    <img src="" alt="" />
                </div>

            </div>
        </div >
    )
}

export default PortfolioPage;