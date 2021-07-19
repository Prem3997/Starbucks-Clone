import React from 'react'
import "./FooterTertiary.css"
import { Facebook, Pinterest, Instagram, YouTube, Twitter } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { COPYRIGHT } from '../../constants/HomePageConstants';
import { Fade } from 'react-awesome-reveal';

function FooterTertiary({ showPrivacyLinks }) {
    return (
        <Fade>
            <div className="footerTertiary">
                <div className="footerTertiary__container">
                    <Facebook onClick={() => window.open("https://m.facebook.com/Starbucks/", '_blank').focus()} className="footerTertiary__icons" fontSize="large" />
                    <Pinterest onClick={() => window.open("https://in.pinterest.com/starbucks/", '_blank').focus()} className="footerTertiary__icons" fontSize="large" />
                    <Instagram onClick={() => window.open("https://instagram.com/starbucks", '_blank').focus()} className="footerTertiary__icons" fontSize="large" />
                    <YouTube onClick={() => window.open("https://www.youtube.com/starbucks", '_blank').focus()} className="footerTertiary__icons" fontSize="large" />
                    <Twitter onClick={() => window.open("https://twitter.com/starbucks/", '_blank').focus()} className="footerTertiary__icons" fontSize="large" />
                </div>
                <div className="footerTertiary__container">
                    <div className="footerTertiary__linksContainer">
                        <Link className="footerTertiary__links">Privacy Policy</Link><span className="vertical"></span>
                        <Link className="footerTertiary__links">Term Of Use</Link><span className="vertical"></span>
                        <Link className="footerTertiary__links">CA Chain Supply Act</Link><span className="vertical"></span>
                        <Link className="footerTertiary__links">Submit Your Idea</Link><span className="vertical"></span>
                        <Link className="footerTertiary__links">Cookie Preferences</Link>
                    </div>
                </div>
                <p className="footerTertiary__copyright">{COPYRIGHT} Developed By PremBalaji.<Link href='https://www.linkedin.com/in/prem-balaji-429583162/'> Click Here</Link></p>
            </div>
        </Fade>
    )
}

export default FooterTertiary
