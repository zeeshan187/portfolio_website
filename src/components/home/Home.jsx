import React,{useLayoutEffect} from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'
import About from '../about/About'
const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
      <section id="hero">
        <div className="hero container">
          <div className='hero_headings'>
            <h1 style={{zIndex:"1"}}>Hi, I am Zeeshan <span></span></h1>
            <h1>MERN Stack Developer <span></span></h1>
            <h1>(FREELANCER) <span></span></h1>
            <NavLink to='/contact' type="button" class="cta">HIRE ME</NavLink>
            <a href={require("../../Zeeshan_Tahir_MERN_Stack_2YearsExp.pdf")} download="Zeeshan_Tahir_MERN Stack Developer__2Years_Exp"  type="button" class="cta cta1">Download Resume</a>
          </div>
          <img src="/images/zeeshan.png" alt="" />
        </div>
      </section>
      <About />
    </>
  )
}

export default Home