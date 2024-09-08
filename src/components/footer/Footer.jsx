import React from 'react'
import './footer.css'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer_social_med">
            <a href="https://www.facebook.com/zeeshan.zeeshanprince.94"><FaFacebookF className='footer_icons'/></a>
            <a href="https://www.instagram.com/zeeshanshaniii185/"><FaInstagram className='footer_icons'/></a>
           <a href="https://twitter.com/mzeeshi187"> <FaTwitter className='footer_icons'/></a>
           <a href="https://www.linkedin.com/in/thezeeshantahir/"> <AiFillLinkedin className='footer_icons'/></a>
        </div>
        <div className="web_pages">
            <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/skill"><li>Skills</li></NavLink>
            <NavLink to="/channel"><li>Resume</li></NavLink>
            <NavLink to="/portfolio"><li>Portfolio</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
            </ul>
        </div>
        <h5>© 2023 Copyright All Rights Reserved.<br />
               Created By <span>Malik Zeeshan</span></h5>
    </div>
    </>
  )
}

export default Footer