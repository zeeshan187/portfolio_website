import React from 'react'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import particles from './components/Particles'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Skill from './components/skills/Skills'
import Channel from './components/channel/Channel'
import Footer from './components/footer/Footer'
import './App.css'
import './components/home/home.css'
import './components/navbar/navbar.css'
const App = () => {
  let location=useLocation();
  let particlejsOnHome= location.pathname=== "/";
  let particlesInit= async (engine)=>{
    await loadFull(engine);
  }
  
  return (
    <div className='app_main_div'>
    {
      particlejsOnHome && (
        <Particles id="particles" options={particles} init={particlesInit}  />
      )
    }
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/portfolio" element={<Portfolio />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route exact path="/skill" element={<Skill />}/>
      <Route exact path="/channel" element={<Channel />}/>

    </Routes>
    <Footer />
    </div>
  )
}

export default App