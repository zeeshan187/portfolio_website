import React,{useLayoutEffect} from 'react'
import './about.css'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import PageHeader from '../pageheader/PageHeader'
import { FaReact, FaDev, FaDatabase, FaAppleAlt } from 'react-icons/fa'

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
      <PageHeader heading="About Me" icon={<BsFillInfoCircleFill />} />
      <div className="about_page_container">
        <div className="about_page">
          <div className="about_page_content">
            <h2>MERN Stack Developer</h2>
            <p className='page_cont_para'>I am a MERN Stack develoeper with almost more than 1 year of experience. During my one-year experience as a MERN stack developer, I have gained a comprehensive understanding of building web applications using MongoDB, Express.js, React, and Node.js. I have successfully contributed to the development of scalable and robust applications, leveraging my expertise in frontend development with React and backend development with Node.js and Express.js. Additionally, I have honed my skills in database management using MongoDB, ensuring efficient data storage and retrieval. Throughout my journey, I have collaborated with cross-functional teams, followed best practices, and maintained a strong focus on delivering high-quality code. </p>
            <h2>Personal Information</h2>
            <h5><p>Name:</p> <span>M Zeeshan Tahir</span></h5>
            <h5><p>Age:</p> <span>21`</span></h5>
            <h5><p>Address:</p> <span>Rawalpindi, Pakistan</span></h5>
            <h5><p>Email:</p> <span>mzeeshi187@gmail.com</span></h5>
            <h5><p>Contact No:</p> <span>+923057567185</span></h5>
          </div>
          <div className="about_page_img">
            <div className="about_page_inner_cont"> 
              <div>
                <FaReact size={60} color='var(--main-color)' />
              </div>
              <div>
                <FaDev size={60} color='var(--main-color)' />
              </div>
              <div>
                <FaDatabase size={60} color='var(--main-color)' />
              </div>
              <div>
                <FaAppleAlt size={60} color='var(--main-color)' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About