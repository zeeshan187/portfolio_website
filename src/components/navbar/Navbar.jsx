import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiMenu} from 'react-icons/bi';
import {RxCross1} from 'react-icons/rx'
import './navbar.css'
const Navbar = () => {
  const [isMobile, setIsMobile]=useState(false)

  return (
    <>
      <div className="section_container" >
        <div className="nav">
          <NavLink to='/'><img src="/images/logo.png" alt="" /></NavLink>
          <ul className={isMobile ? "nav_menu_mob" : "nav_menu"}>
            <NavLink onClick={()=>{setIsMobile(false)}} to="/" style={{ i: 1 }}><li>HOME</li></NavLink>
            <NavLink onClick={()=>{setIsMobile(false)}} to="/about" style={{ i: 2 }}> <li>ABOUT</li></NavLink>
            <NavLink onClick={()=>{setIsMobile(false)}} to="/skill" style={{ i: 3 }}><li>SKILLS</li></NavLink>
            <NavLink onClick={()=>{setIsMobile(false)}} to="/channel" style={{ i: 4 }}><li>RESUME</li></NavLink>
            <NavLink onClick={()=>{setIsMobile(false)}} to="/portfolio" style={{ i: 5 }}><li>PORTFOLIO</li></NavLink>
            <NavLink onClick={()=>{setIsMobile(false)}} to="/contact" style={{ i: 6 }}><li>CONTACT</li></NavLink>
            
          </ul>
          <button className='mobile_menu_icon' onClick={()=>{setIsMobile(!isMobile)}}>
            {isMobile ? <RxCross1 className='cross_icon' /> : <BiMenu className='menu_icon'/>}
          </button>
          
          
          

        </div>
      </div>
    </>
  )
}

export default Navbar
